"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { LayoutGrid, List, MapPin, Bed, Bath, Square } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Define the shape of our data
interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  type: string;
  tag?: string | null;
}

export default function PropertyFeed({
  properties,
}: {
  properties: Property[];
}) {
  const [isGridView, setIsGridView] = useState(true);

  return (
    <div className="space-y-6">
      {/* --- CONTROLS HEADER --- */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <p className="text-sm text-muted-foreground">
          Showing{" "}
          <span className="font-medium text-foreground">
            {properties.length}
          </span>{" "}
          results
        </p>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground hidden sm:inline-block">
              Sort by:
            </span>
            <Select defaultValue="newest">
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest Listed</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center border rounded-md bg-background">
            <Button
              variant={isGridView ? "secondary" : "ghost"}
              size="icon"
              className="h-9 w-9 rounded-none rounded-l-md"
              onClick={() => setIsGridView(true)}
              aria-label="Grid view"
            >
              <LayoutGrid className="h-4 w-4" />
            </Button>
            <Separator orientation="vertical" className="h-6" />
            <Button
              variant={!isGridView ? "secondary" : "ghost"}
              size="icon"
              className="h-9 w-9 rounded-none rounded-r-md"
              onClick={() => setIsGridView(false)}
              aria-label="List view"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* --- LISTING FEED --- */}
      <div
        className={
          isGridView
            ? "grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
            : "flex flex-col gap-6"
        }
      >
        {properties.map((property) => (
          <Card
            key={property.id}
            className={`group overflow-hidden transition-all hover:shadow-lg border-slate-200 dark:border-slate-800 ${
              !isGridView ? "flex flex-col sm:flex-row" : ""
            }`}
          >
            {/* IMAGE SECTION */}
            <div
              className={`relative overflow-hidden bg-slate-100 ${
                isGridView
                  ? "aspect-[4/3] w-full"
                  : "w-full sm:w-72 md:w-80 sm:shrink-0 h-64 sm:h-auto"
              }`}
            >
              <Image
                src={property.image}
                alt={property.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Badges */}
              <div className="absolute top-3 left-3 flex gap-2">
                <Badge className="bg-white/90 text-black hover:bg-white/100 border-0 backdrop-blur-sm">
                  {property.type}
                </Badge>
                {property.tag && isGridView && (
                  <Badge variant="secondary" className="shadow-sm">
                    {property.tag}
                  </Badge>
                )}
              </div>
              {/* Price Overlay (Grid Only) */}
              {isGridView && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-12">
                  <div className="text-xl font-bold text-white">
                    {property.price}
                  </div>
                </div>
              )}
            </div>

            {/* CONTENT SECTION */}
            <div className={`flex flex-col ${!isGridView ? "flex-1 p-2" : ""}`}>
              <CardHeader className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="line-clamp-1 text-lg">
                      {property.title}
                    </CardTitle>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <MapPin className="mr-1 h-3.5 w-3.5" />
                      {property.location}
                    </div>
                  </div>
                  {/* Price (List View Only) */}
                  {!isGridView && (
                    <div className="text-xl font-bold text-primary text-right hidden sm:block">
                      {property.price}
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardContent className="p-4 pt-0 flex-1">
                {!isGridView && (
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    Beautifully designed property featuring modern amenities and
                    spacious living areas perfect for families or professionals.
                  </p>
                )}

                <div
                  className={`flex text-sm text-muted-foreground ${
                    isGridView ? "justify-between" : "gap-6"
                  }`}
                >
                  <div className="flex items-center gap-1">
                    <Bed className="h-4 w-4" />{" "}
                    <span className="font-medium text-foreground">
                      {property.beds}
                    </span>{" "}
                    {!isGridView && "Beds"}
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="h-4 w-4" />{" "}
                    <span className="font-medium text-foreground">
                      {property.baths}
                    </span>{" "}
                    {!isGridView && "Baths"}
                  </div>
                  <div className="flex items-center gap-1">
                    <Square className="h-4 w-4" />{" "}
                    <span className="font-medium text-foreground">
                      {property.sqft}
                    </span>{" "}
                    {!isGridView && "SqFt"}
                  </div>
                </div>
              </CardContent>

              <CardFooter className="p-4 pt-0">
                <Separator className="mb-4 block sm:hidden" />
                <Button
                  className="w-full"
                  variant={isGridView ? "outline" : "default"}
                  asChild
                >
                  <Link href={`/listings/${property.id}`}>View Property</Link>
                </Button>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
