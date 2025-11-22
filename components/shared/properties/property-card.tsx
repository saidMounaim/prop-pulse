import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Bed, Bath, Square } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { formatType } from "@/lib/utils";

type PropertyCardProps = {
  image: string;
  title: string;
  slug: string;
  location: string;
  price: string;
  type: string;
  beds: number;
  baths: number;
  sqft: number;
};

const PropertyCard = ({
  image,
  title,
  slug,
  location,
  price,
  type,
  beds,
  baths,
  sqft,
}: PropertyCardProps) => {
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg p-0 pb-5">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <Badge className="absolute left-4 top-4 bg-white/90 text-black hover:bg-white/100">
          {formatType(type)}
        </Badge>
        <div className="absolute bottom-4 left-4 rounded-md bg-black/60 px-3 py-1 text-lg font-bold text-white backdrop-blur-sm">
          {price}
        </div>
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-1 text-xl">{title}</CardTitle>
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="mr-1 h-4 w-4" />
          {location}
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Bed className="h-4 w-4" />
            <span className="font-medium text-foreground">{beds}</span> Beds
          </div>
          <div className="flex items-center gap-1">
            <Bath className="h-4 w-4" />
            <span className="font-medium text-foreground">{baths}</span> Baths
          </div>
          <div className="flex items-center gap-1">
            <Square className="h-4 w-4" />
            <span className="font-medium text-foreground">{sqft}</span> SqFt
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant="secondary" asChild>
          <Link href={`/listings/${slug}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;
