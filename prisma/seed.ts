import { PropertyType, Status } from "@/lib/generated/prisma/enums";
import prisma from "@/lib/prisma";
import { slugify } from "@/lib/utils";

const RAW_PROPERTIES = [
  {
    title: "Modern Highland Villa",
    location: "Beverly Hills, CA",
    price: "$3,250,000",
    beds: 4,
    baths: 3.5,
    sqft: 3200,
    image:
      "https://images.unsplash.com/photo-1600596542815-2750aa5cbe96?q=80&w=800&auto=format&fit=crop",
    type: "For Sale",
    tag: "New",
  },
  {
    title: "Urban Loft Apartment",
    location: "SoHo, New York",
    price: "$8,500 / mo",
    beds: 2,
    baths: 2,
    sqft: 1450,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
    type: "For Rent",
    tag: "Featured",
  },
  {
    title: "Seaside Retreat",
    location: "Malibu, CA",
    price: "$5,900,000",
    beds: 5,
    baths: 4,
    sqft: 4100,
    image:
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?q=80&w=800&auto=format&fit=crop",
    type: "For Sale",
    tag: "Luxury",
  },
  {
    title: "Glass House Estate",
    location: "Austin, TX",
    price: "$2,100,000",
    beds: 3,
    baths: 3,
    sqft: 2800,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
    type: "For Sale",
    tag: "Price Drop",
  },
  {
    title: "Minimalist Cabin",
    location: "Aspen, CO",
    price: "$1,850,000",
    beds: 2,
    baths: 1,
    sqft: 1200,
    image:
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=800&auto=format&fit=crop",
    type: "For Sale",
    tag: "Cozy",
  },
  {
    title: "Downtown Penthouse",
    location: "Chicago, IL",
    price: "$12,000 / mo",
    beds: 3,
    baths: 3.5,
    sqft: 2500,
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800&auto=format&fit=crop",
    type: "For Rent",
    tag: "Luxury",
  },
];

async function main() {
  for (const p of RAW_PROPERTIES) {
    const slug = slugify(p.title);

    const propertyType =
      p.type === "For Rent" ? PropertyType.FOR_RENT : PropertyType.FOR_SALE;

    const property = await prisma.property.upsert({
      where: { slug: slug },
      update: {},
      create: {
        title: p.title,
        slug: slug,
        location: p.location,
        price: p.price,
        beds: p.beds,
        baths: p.baths,
        sqft: p.sqft,
        type: propertyType,
        tag: p.tag,
        image: p.image,
        userId: "In0C25ONqtTF3m5eAZDP49XlUYoSMMFO",
        status: Status.ACTIVE,

        content: `Experience luxury living in this beautiful ${p.title}. Located in the heart of ${p.location}, this property features state-of-the-art amenities and breathtaking views.`,

        amenities: [
          "Air Conditioning",
          "Smart Home System",
          "Swimming Pool",
          "Private Parking",
        ],
      },
    });
    console.log(`Created property: ${property.title}`);
  }

  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
