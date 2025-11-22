import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  MapPin,
  Bed,
  Bath,
  Square,
  ArrowLeft,
  CheckCircle2,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { formatType, getUserInitials } from "@/lib/utils";
import { getPropertyDetails } from "@/lib/actions/property.actions";

interface PropertyWithUser {
  id: string;
  title: string;
  slug: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: number;
  type: "FOR_SALE" | "FOR_RENT";
  tag: string;
  image: string;
  content: string;
  amenities: string[];
  status: "ACTIVE" | "INACTIVE" | "SOLD" | "RENTED";
  createdAt: Date;
  user: {
    name: string;
    email: string;
    phone?: string;
  };
}

export default async function PropertyDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = (await getPropertyDetails(slug)) as PropertyWithUser | null;

  if (!property) notFound();

  const isSold = property.status === "SOLD" || property.status === "RENTED";

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
      <div className="bg-white border-b dark:bg-slate-900">
        <div className="container mx-auto px-4 py-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link
            href="/properties"
            className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Listings
          </Link>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Heart className="mr-2 h-4 w-4" /> Save
            </Button>
          </div>
        </div>
      </div>

      <div className="relative h-[400px] lg:h-[600px] w-full bg-slate-200">
        <Image
          src={property.image}
          alt={property.title}
          fill
          priority
          className="object-cover"
        />
        {isSold && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="border-4 border-white px-8 py-4 text-5xl font-bold text-white uppercase tracking-widest rotate-[-12deg]">
              {property.status}
            </span>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Badge className="mb-4 bg-primary text-white border-0 hover:bg-primary/90">
              {formatType(property.type)}
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-2">
              {property.title}
            </h1>
            <div className="flex items-center gap-2 text-gray-200 text-lg">
              <MapPin className="h-5 w-5" /> {property.location}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-10">
            <div className="grid grid-cols-3 md:grid-cols-4 gap-4 border rounded-xl p-6 bg-white shadow-sm dark:bg-slate-900">
              <div className="col-span-3 md:col-span-1">
                <div className="text-sm text-muted-foreground">Price</div>
                <div className="text-2xl font-bold text-primary">
                  {property.price}
                </div>
              </div>
              <div className="flex flex-col border-l pl-4 md:pl-8">
                <span className="flex items-center text-muted-foreground text-sm mb-1">
                  <Bed className="w-4 h-4 mr-2" /> Beds
                </span>
                <span className="font-bold text-xl">{property.beds}</span>
              </div>
              <div className="flex flex-col border-l pl-4 md:pl-8">
                <span className="flex items-center text-muted-foreground text-sm mb-1">
                  <Bath className="w-4 h-4 mr-2" /> Baths
                </span>
                <span className="font-bold text-xl">{property.baths}</span>
              </div>
              <div className="flex flex-col border-l pl-4 md:pl-8">
                <span className="flex items-center text-muted-foreground text-sm mb-1">
                  <Square className="w-4 h-4 mr-2" /> SqFt
                </span>
                <span className="font-bold text-xl">
                  {property.sqft.toLocaleString()}
                </span>
              </div>
            </div>

            <section>
              <h2 className="text-2xl font-semibold mb-4">About this home</h2>
              <div className="prose prose-slate max-w-none dark:prose-invert text-muted-foreground leading-relaxed">
                {property.content.split("\n").map((paragraph, i) => (
                  <p key={i} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold mb-6">
                Amenities & Features
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                {property.amenities.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold mb-4">Location</h2>
              <div className="bg-slate-200 h-[300px] rounded-xl overflow-hidden">
                <iframe
                  title={`Map of ${property.location}`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    property.location
                  )}&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </section>
          </div>

          <aside className="space-y-6">
            <div className="sticky top-24">
              <Card className="p-0 pb-5 shadow-lg border-slate-200 dark:border-slate-800 overflow-hidden">
                <div className="bg-slate-100 dark:bg-slate-900 p-6 border-b">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12 border-2 border-white shadow-sm">
                      <AvatarFallback>
                        {getUserInitials(property.user.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Listing Agent
                      </p>
                      <h3 className="text-lg font-bold leading-none">
                        {property.user.name}
                      </h3>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6 pt-0">
                  <h4 className="font-semibold mb-4">
                    Interested in this property?
                  </h4>

                  <form className="space-y-4">
                    <div className="grid gap-2">
                      <Input name="name" placeholder="Your Name" required />
                    </div>

                    <div className="grid gap-2">
                      <Input
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        required
                      />
                    </div>

                    <div className="grid gap-2">
                      <Input
                        name="phone"
                        type="tel"
                        placeholder="Phone Number"
                      />
                    </div>

                    <div className="grid gap-2">
                      {/* Pre-filled message helps conversion */}
                      <Textarea
                        name="message"
                        defaultValue={`Hi ${
                          property.user.name.split(" ")[0]
                        }, I am interested in ${property.title} at ${
                          property.location
                        }. Please send me more details.`}
                        className="h-32 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full font-bold"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
