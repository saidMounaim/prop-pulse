"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { MapPin, Search } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

const Hero = () => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim() !== "") {
      const searchUrl = `/properties?query=${encodeURIComponent(query)}`;
      window.location.href = searchUrl;
    } else {
      toast.error("Please enter a search query.");
    }
  };

  return (
    <section className="relative flex min-h-[600px] flex-col items-center justify-center text-center text-white">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1920&auto=format&fit=crop"
          alt="Luxury Home Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container mx-auto z-10 px-4 py-16 sm:px-6 lg:px-8">
        <Badge
          variant="secondary"
          className="mb-4 px-4 py-1 text-sm font-medium uppercase tracking-wider text-primary"
        >
          Real Estate Reimagined
        </Badge>
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Find Your Pulse in the <br className="hidden md:block" />
          <span className="text-primary-foreground/90">Perfect Home</span>
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-200 sm:text-xl">
          PropPulse connects you with the most exclusive properties in top
          locations. Buy, rent, or sell with confidence and speed.
        </p>

        <div className="mx-auto flex w-full max-w-3xl flex-col gap-2 rounded-lg bg-white p-2 shadow-2xl sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <MapPin className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="City, Neighborhood, or Address"
              className="border-0 bg-transparent py-6 pl-10 text-black focus-visible:ring-0 focus-visible:ring-offset-0"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <Separator orientation="vertical" className="hidden h-8 sm:block" />
          <Button
            size="lg"
            className="w-full text-base font-semibold sm:w-auto"
            onClick={() => handleSearch()}
          >
            <Search className="mr-2 h-5 w-5" /> Search
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
