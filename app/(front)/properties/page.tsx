import { SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import PropertyFeed from "@/components/shared/properties/property-feed";
import { getProperties } from "@/lib/actions/property.actions";
import PropertyFilters from "@/components/shared/properties/property-filters";

export default async function PropertiesPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedParams = await searchParams;

  const properties = await getProperties({
    query: resolvedParams.query as string,
    type: resolvedParams.type as string,
    minPrice: resolvedParams.minPrice as string,
    maxPrice: resolvedParams.maxPrice as string,
    beds: resolvedParams.beds as string,
    baths: resolvedParams.baths as string,
    amenities: resolvedParams.amenities,
  });

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950">
      <div className="bg-white border-b py-8 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                Find Your Home
              </h1>
              <p className="text-muted-foreground mt-1">
                Browsing {properties.length} properties in your network.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="hidden lg:block lg:col-span-1">
            <PropertyFilters />
          </aside>

          <main className="lg:col-span-3">
            <div className="lg:hidden mb-6">
              <Button variant="outline" className="w-full">
                <SlidersHorizontal className="mr-2 h-4 w-4" /> Show Filters
              </Button>
            </div>

            <PropertyFeed properties={properties} />

            <div className="mt-12 flex justify-center gap-2">
              <Button variant="outline" disabled>
                Previous
              </Button>
              <Button variant="secondary">1</Button>
              <Button variant="ghost">2</Button>
              <Button variant="ghost">3</Button>
              <Button variant="outline">Next</Button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
