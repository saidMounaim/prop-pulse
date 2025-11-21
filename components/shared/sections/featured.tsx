import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Bath, Bed, MapPin, Square } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FEATURED_PROPERTIES = [
  {
    id: 1,
    title: "Modern Highland Villa",
    location: "Beverly Hills, CA",
    price: "$3,250,000",
    beds: 4,
    baths: 3.5,
    sqft: 3200,
    image:
      "https://images.unsplash.com/photo-1600596542815-2750aa5cbe96?q=80&w=800&auto=format&fit=crop",
    type: "For Sale",
  },
  {
    id: 2,
    title: "Urban Loft Apartment",
    location: "SoHo, New York",
    price: "$8,500 / mo",
    beds: 2,
    baths: 2,
    sqft: 1450,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
    type: "For Rent",
  },
  {
    id: 3,
    title: "Seaside Retreat",
    location: "Malibu, CA",
    price: "$5,900,000",
    beds: 5,
    baths: 4,
    sqft: 4100,
    image:
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?q=80&w=800&auto=format&fit=crop",
    type: "For Sale",
  },
];

const Featured = () => {
  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Featured Properties
            </h2>
            <p className="mt-2 text-muted-foreground">
              Handpicked listings just for you.
            </p>
          </div>
          <Button variant="outline" asChild className="hidden sm:flex">
            <Link href="/listings">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_PROPERTIES.map((property) => (
            <Card
              key={property.id}
              className="group overflow-hidden transition-all hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <Badge className="absolute left-4 top-4 bg-white/90 text-black hover:bg-white/100">
                  {property.type}
                </Badge>
                <div className="absolute bottom-4 left-4 rounded-md bg-black/60 px-3 py-1 text-lg font-bold text-white backdrop-blur-sm">
                  {property.price}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-1 text-xl">
                  {property.title}
                </CardTitle>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="mr-1 h-4 w-4" />
                  {property.location}
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Bed className="h-4 w-4" />{" "}
                    <span className="font-medium text-foreground">
                      {property.beds}
                    </span>{" "}
                    Beds
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="h-4 w-4" />{" "}
                    <span className="font-medium text-foreground">
                      {property.baths}
                    </span>{" "}
                    Baths
                  </div>
                  <div className="flex items-center gap-1">
                    <Square className="h-4 w-4" />{" "}
                    <span className="font-medium text-foreground">
                      {property.sqft}
                    </span>{" "}
                    SqFt
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="secondary" asChild>
                  <Link href={`/listings/${property.id}`}>View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-8 sm:hidden">
          <Button variant="outline" asChild className="w-full">
            <Link href="/listings">View All Listings</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
