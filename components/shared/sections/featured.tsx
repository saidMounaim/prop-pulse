import { Button } from "@/components/ui/button";
import { getFeaturedProperties } from "@/lib/actions/property.actions";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import PropertyCard from "../properties/property-card";

const Featured = async () => {
  const FEATURED_PROPERTIES = await getFeaturedProperties();

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
            <PropertyCard key={property.id} {...property} />
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
