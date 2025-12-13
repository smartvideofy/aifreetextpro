import { Shield, Lock, Award, Users } from "lucide-react";

const TrustBadges = () => {
  return (
    <section className="py-8 border-y border-border/50 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">100% Money-Back Guarantee</span>
          </div>
          
          <div className="flex items-center gap-2 text-muted-foreground">
            <Lock className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">256-bit SSL Encryption</span>
          </div>
          
          <div className="flex items-center gap-2 text-muted-foreground">
            <Award className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">4.8/5 Rating (1,200+ Reviews)</span>
          </div>
          
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">50,000+ Happy Users</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
