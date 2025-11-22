"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Upload, Loader2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

const AMENITIES_LIST = [
  "Air Conditioning",
  "Swimming Pool",
  "Central Heating",
  "Laundry Room",
  "Gym",
  "Alarm",
  "Window Coverings",
  "WiFi",
  "TV Cable",
  "Dryer",
  "Microwave",
  "Refrigerator",
];

export default function AddPropertyPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

  const handleAmenityToggle = (amenity: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((item) => item !== amenity)
        : [...prev, amenity]
    );
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {}

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Add New Property</h2>
        <Button variant="outline" onClick={() => router.back()}>
          Cancel
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* 1. BASIC INFO */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="grid gap-3">
              <Label htmlFor="title">Property Title</Label>
              <Input
                id="title"
                name="title"
                placeholder="e.g. Modern Sunset Villa"
                required
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="grid gap-3">
                <Label htmlFor="type">Property Type</Label>
                <Select name="type" defaultValue="FOR_SALE">
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="FOR_SALE">For Sale</SelectItem>
                    <SelectItem value="FOR_RENT">For Rent</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="price">Price (String format)</Label>
                <Input
                  id="price"
                  name="price"
                  placeholder="e.g. $1,250,000"
                  required
                />
              </div>
            </div>

            <div className="grid gap-3">
              <Label htmlFor="location">Location (Address)</Label>
              <Input
                id="location"
                name="location"
                placeholder="e.g. 123 Palm Street, Miami, FL"
                required
              />
            </div>
          </CardContent>
        </Card>

        {/* 2. DETAILS */}
        <Card>
          <CardHeader>
            <CardTitle>Property Details</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="grid grid-cols-3 gap-6">
              <div className="grid gap-3">
                <Label htmlFor="beds">Beds</Label>
                <Input
                  id="beds"
                  name="beds"
                  type="number"
                  min="0"
                  placeholder="4"
                  required
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="baths">Baths (Float)</Label>
                <Input
                  id="baths"
                  name="baths"
                  type="number"
                  step="0.5"
                  min="0"
                  placeholder="2.5"
                  required
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="sqft">Sq Ft</Label>
                <Input
                  id="sqft"
                  name="sqft"
                  type="number"
                  min="0"
                  placeholder="2500"
                  required
                />
              </div>
            </div>

            <div className="grid gap-3">
              <Label htmlFor="content">Description</Label>
              <Textarea
                id="content"
                name="content"
                placeholder="Describe the property features, neighborhood, etc..."
                className="min-h-[150px]"
                required
              />
            </div>

            <div className="grid gap-3">
              <Label>Amenities</Label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
                {AMENITIES_LIST.map((item) => (
                  <div key={item} className="flex items-center space-x-2">
                    <Checkbox
                      id={item}
                      checked={selectedAmenities.includes(item)}
                      onCheckedChange={() => handleAmenityToggle(item)}
                    />
                    <Label
                      htmlFor={item}
                      className="font-normal cursor-pointer text-sm"
                    >
                      {item}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 3. MEDIA & META */}
        <Card>
          <CardHeader>
            <CardTitle>Media & Settings</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="grid gap-3">
              <Label htmlFor="image">Main Image URL</Label>
              <div className="flex gap-2">
                <Input
                  id="image"
                  name="image"
                  placeholder="https://..."
                  required
                />
                <Button type="button" variant="secondary">
                  <Upload className="h-4 w-4 mr-2" /> Upload
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                For this demo, please paste a valid image URL.
              </p>
            </div>

            <Separator />

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tag">Tag (Optional)</Label>
                <Input
                  id="tag"
                  name="tag"
                  placeholder="e.g. New, Featured, Hot Deal"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="status">Listing Status</Label>
                <Select name="status" defaultValue="ACTIVE">
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ACTIVE">Active</SelectItem>
                    <SelectItem value="INACTIVE">Inactive</SelectItem>
                    <SelectItem value="SOLD">Sold</SelectItem>
                    <SelectItem value="RENTED">Rented</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end gap-4">
          <Button type="button" variant="outline" onClick={() => router.back()}>
            Discard
          </Button>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="min-w-[150px]"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Creating...
              </>
            ) : (
              "Create Property"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
