import { CheckCircle2, Globe, Trophy, Users } from "lucide-react";
import Image from "next/image";

const Mission = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              Our Mission
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              At PropPulse, we dont just sell properties; we engineer
              lifestyles. Our mission is to democratize access to premium real
              estate data while providing white-glove service to every client,
              regardless of budget.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {[
                {
                  icon: Trophy,
                  title: "Award Winning",
                  desc: "Recognized globally for excellence.",
                },
                {
                  icon: Users,
                  title: "Client Focus",
                  desc: "Over 10,000 happy families settled.",
                },
                {
                  icon: Globe,
                  title: "Wide Network",
                  desc: "Listings across 50+ major cities.",
                },
                {
                  icon: CheckCircle2,
                  title: "Transparency",
                  desc: "No hidden fees, ever.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="bg-primary/10 p-2 rounded-lg text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden bg-muted">
            <Image
              src="/team-meeting.avif"
              alt="Team Meeting"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
