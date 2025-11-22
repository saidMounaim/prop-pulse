"use server";

import { unstable_cache } from "next/cache";
import prisma from "../prisma";

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
  ["featured-properties"],
  { revalidate: 3600 }
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
