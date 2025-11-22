import { Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import PropertyFeed from "@/components/shared/properties/property-feed";

const PROPERTIES = [
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
    tag: "New",
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
    tag: "Featured",
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
    tag: null,
  },
  {
    id: 4,
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
    id: 5,
    title: "Minimalist Cabin",
    location: "Aspen, CO",
    price: "$1,850,000",
    beds: 2,
    baths: 1,
    sqft: 1200,
    image:
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=800&auto=format&fit=crop",
    type: "For Sale",
    tag: null,
  },
  {
    id: 6,
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

export default function PropertiesPage() {
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
                Browsing {PROPERTIES.length} properties in your network.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="hidden lg:block lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg">Filters</h3>
                <Button
                  variant="link"
                  className="px-0 text-muted-foreground h-auto"
                >
                  Reset
                </Button>
              </div>

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search location..." className="pl-9" />
              </div>

              <Separator />

              <div className="space-y-3">
                <Label>Listing Status</Label>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Buy & Rent</SelectItem>
                    <SelectItem value="buy">For Sale</SelectItem>
                    <SelectItem value="rent">For Rent</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Separator />

              <div className="space-y-3">
                <Label>Price Range</Label>
                <div className="flex items-center gap-2">
                  <Input type="number" placeholder="Min" className="w-full" />
                  <span className="text-muted-foreground">-</span>
                  <Input type="number" placeholder="Max" className="w-full" />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <div>
                  <Label className="mb-2 block">Bedrooms</Label>
                  <div className="flex gap-2">
                    {["Any", "1+", "2+", "3+", "4+"].map((b) => (
                      <button
                        key={b}
                        className="h-9 w-full rounded-md border bg-background text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:ring-1 focus:ring-ring"
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <Label className="mb-2 block">Bathrooms</Label>
                  <div className="flex gap-2">
                    {["Any", "1+", "2+", "3+"].map((b) => (
                      <button
                        key={b}
                        className="h-9 w-full rounded-md border bg-background text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:ring-1 focus:ring-ring"
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <Label>Amenities</Label>
                <div className="space-y-2">
                  {[
                    "Pool",
                    "Garage",
                    "Air Conditioning",
                    "Gym",
                    "Fireplace",
                  ].map((item) => (
                    <div key={item} className="flex items-center space-x-2">
                      <Checkbox id={item} />
                      <Label
                        htmlFor={item}
                        className="font-normal cursor-pointer"
                      >
                        {item}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="w-full" size="lg">
                Apply Filters
              </Button>
            </div>
          </aside>

          <main className="lg:col-span-3">
            <div className="lg:hidden mb-6">
              <Button variant="outline" className="w-full">
                <SlidersHorizontal className="mr-2 h-4 w-4" /> Show Filters
              </Button>
            </div>

            <PropertyFeed properties={PROPERTIES} />

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
