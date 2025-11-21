import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const Values = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto grid gap-12 px-4 sm:px-6 lg:px-8 lg:grid-cols-2 lg:items-center">
        <div className="relative aspect-square overflow-hidden rounded-2xl lg:aspect-auto lg:h-[600px]">
          <Image
            src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1200&auto=format&fit=crop"
            alt="Interior Design"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Why Choose PropPulse?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            {
              "We don't just sell houses; we help you find a place where your life happens. Our proprietary tech and expert agents make the process seamless."
            }
          </p>
          <ul className="space-y-4">
            {[
              "Market-leading AI valuation tools",
              "Exclusive off-market listings",
              "Transparent 1% commission rates",
              "24/7 Dedicated property concierge",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Button size="lg">Start Your Journey</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
