"use server";

import { revalidatePath, revalidateTag, unstable_cache } from "next/cache";
import prisma from "../prisma";
import { PropertyType, Status } from "../generated/prisma/enums";
import { auth } from "../auth";
import { headers } from "next/headers";
import { slugify } from "../utils";
import { z } from "zod";
import { propertySchema } from "../validations";

export interface PropertyFilterParams {
  query?: string;
  type?: string;
  beds?: string;
  baths?: string;
  amenities?: string | string[];
}

export const getFeaturedProperties = unstable_cache(
  async () => {
    return await prisma.property.findMany({
      where: {
        tag: "Featured",
        status: "ACTIVE",
      },
      take: 4,
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        title: true,
        location: true,
        price: true,
        beds: true,
        baths: true,
        sqft: true,
        image: true,
        type: true,
        tag: true,
        slug: true,
      },
    });
  },
  ["featured-properties-key"],
  { revalidate: 3600, tags: ["featured-properties"] }
);

export async function getPropertyDetails(slug: string) {
  const property = await prisma.property.findUnique({
    where: {
      slug: slug,
    },
    include: {
      user: {
        select: { name: true, email: true, image: true },
      },
    },
  });

  return property;
}

export async function getProperties(params: PropertyFilterParams) {
  try {
    const { query, type, beds, baths, amenities } = params;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const where: any = {
      status: Status.ACTIVE,
    };

    if (query) {
      where.OR = [
        { title: { contains: query, mode: "insensitive" } },
        { location: { contains: query, mode: "insensitive" } },
      ];
    }

    if (type && type !== "all") {
      where.type =
        type === "buy" ? PropertyType.FOR_SALE : PropertyType.FOR_RENT;
    }

    if (beds && beds !== "Any") {
      const bedsNum = parseInt(beds);
      where.beds = { gte: bedsNum };
    }

    if (baths && baths !== "Any") {
      const bathsNum = parseInt(baths);
      where.baths = { gte: bathsNum };
    }

    if (amenities) {
      const amenitiesList = Array.isArray(amenities)
        ? amenities
        : amenities.split(",");
      if (amenitiesList.length > 0) {
        where.amenities = {
          hasEvery: amenitiesList,
        };
      }
    }

    const properties = await prisma.property.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });

    return properties;
  } catch (error) {
    console.error("Database Error:", error);
    return [];
  }
}

export async function getAgentProperties() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    throw new Error("Unauthorized");
  }

  const currentUserId = session?.user?.id;

  try {
    const properties = await prisma.property.findMany({
      where: {
        userId: currentUserId,
      },
      orderBy: {
        updatedAt: "desc",
      },
      select: {
        id: true,
        title: true,
        slug: true,
        location: true,
        price: true,
        status: true,
        type: true,
        image: true,
        createdAt: true,
      },
    });

    return properties;
  } catch (error) {
    console.error("Failed to fetch agent properties:", error);
    throw new Error("Failed to load properties");
  }
}

export async function getDashboardStats(userId: string) {
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  const [totalListings, activeListings, newInLast30Days] = await Promise.all([
    prisma.property.count({
      where: { userId },
    }),

    prisma.property.count({
      where: {
        userId,
        status: Status.ACTIVE,
      },
    }),

    prisma.property.count({
      where: {
        userId,
        createdAt: { gte: thirtyDaysAgo },
      },
    }),
  ]);

  return {
    totalListings,
    activeListings,
    newInLast30Days,
  };
}

type CreatePropertyArgs = z.infer<typeof propertySchema> & { imageUrl: string };

export async function createProperty(data: CreatePropertyArgs) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    throw new Error("Unauthorized");
  }

  try {
    await prisma.property.create({
      data: {
        title: data.title,
        slug: slugify(data.title),
        location: data.location,
        price: data.price,
        beds: data.beds,
        baths: data.baths,
        sqft: data.sqft,
        type: data.type,
        tag: data.tag || "",
        image: data.imageUrl,
        content: data.content,
        amenities: data.amenities,
        status: data.status,
        userId: session.user.id,
      },
    });
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to create property listing");
  }

  revalidatePath("/dashboard");
  revalidatePath("/properties");
  revalidateTag("featured-properties", { expire: 0 });
}

export async function deleteProperty(propertyId: string, userId: string) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session || session.user.id !== userId) {
    throw new Error("Unauthorized");
  }

  const property = await prisma.property.findUnique({
    where: { id: propertyId },
  });

  if (!property) {
    throw new Error("Property not found");
  }

  if (property.userId !== userId) {
    throw new Error("You do not have permission to delete this property");
  }

  await prisma.property.delete({
    where: { id: propertyId },
  });

  revalidatePath("/dashboard");
  revalidatePath("/properties");
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function updateProperty(id: string, data: any) {
  try {
    const property = await prisma.property.findUnique({
      where: { id },
    });

    if (!property) {
      throw new Error("Property not found");
    }

    await prisma.property.update({
      where: { id: property.id },
      data: {
        title: data.title,
        slug:
          property.title !== data.title ? slugify(data.title) : property.slug,
        location: data.location,
        price: data.price,
        beds: data.beds,
        baths: data.baths,
        sqft: data.sqft,
        type: data.type,
        tag: data.tag || "",
        image: data.imageUrl,
        content: data.content,
        amenities: data.amenities,
        status: data.status,
      },
    });

    revalidatePath("/dashboard");
    revalidatePath(`/listings/${property.slug}`);
    revalidateTag("featured-properties", { expire: 0 });
  } catch (error) {
    console.error(error);
    throw new Error("Failed to update property listing");
  }
}
