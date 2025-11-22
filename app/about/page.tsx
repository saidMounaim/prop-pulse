import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Team from "@/components/shared/sections/team";
import Mission from "@/components/shared/sections/mission";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative py-20 md:py-32 overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/about-image.avif"
            alt="Office background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-6 text-white border-white/30">
            Since 2014
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-6">
            We Are Proppulse
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Bridging the gap between modern technology and traditional real
            estate service. We believe buying a home should be as seamless as
            ordering a ride.
          </p>
        </div>
      </section>

      <Mission />

      <Team />
    </div>
  );
}
