import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const TEAM_MEMBERS = [
  {
    name: "Sarah Jenkins",
    role: "Founder & CEO",
    bio: "Former architect turned real estate mogul with 15+ years in luxury markets.",
    image: "/sarah-jenkins.avif",
  },
  {
    name: "David Chen",
    role: "Head of Sales",
    bio: "Top-performing broker in NY for 5 consecutive years. Expert in negotiation.",
    image: "/david-chen.avif",
  },
  {
    name: "Elena Rodriguez",
    role: "Chief Technology Officer",
    bio: "Leading our AI valuation initiatives to bring transparency to pricing.",
    image: "/elena-rodriguez.avif",
  },
  {
    name: "Marcus Johnson",
    role: "Senior Property Manager",
    bio: "Ensuring every property under our care is maintained to perfection.",
    image: "/marcus-johnson.avif",
  },
];

const Team = () => {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Meet the Board
          </h2>
          <p className="text-muted-foreground">
            The industry veterans and tech innovators behind the platform.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM_MEMBERS.map((member, i) => (
            <Card key={i} className="overflow-hidden border-none shadow-md">
              <div className="aspect-[4/5] relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <CardHeader className="p-4 pb-0">
                <CardTitle className="text-lg">{member.name}</CardTitle>
                <CardDescription className="text-primary font-medium">
                  {member.role}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-2">
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
