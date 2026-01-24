import { Shield, Lock, Award, Users } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    { icon: Shield, label: "Money-Back Guarantee" },
    { icon: Lock, label: "256-bit SSL" },
    { icon: Award, label: "4.8/5 (1,200+ Reviews)" },
    { icon: Users, label: "50,000+ Users" },
  ];

  return (
    <section className="py-8 md:py-12 border-y border-border/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:flex md:flex-wrap items-center justify-center gap-4 md:gap-10">
          {badges.map((badge, index) => (
            <div 
              key={index}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-muted/50 border border-border/40 justify-center"
            >
              <badge.icon className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-xs md:text-sm font-medium text-muted-foreground">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
