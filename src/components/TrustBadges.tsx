import { Shield, Lock, Award, Users } from "lucide-react";

const TrustBadges = () => {
  return (
    <section className="py-4 md:py-8 border-y border-border/50 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:flex md:flex-wrap items-center justify-center gap-3 md:gap-12">
          <div className="flex items-center gap-2 text-muted-foreground justify-center">
            <Shield className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
            <span className="text-xs md:text-sm font-medium">Money-Back Guarantee</span>
          </div>
          
          <div className="flex items-center gap-2 text-muted-foreground justify-center">
            <Lock className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
            <span className="text-xs md:text-sm font-medium">256-bit SSL</span>
          </div>
          
          <div className="flex items-center gap-2 text-muted-foreground justify-center">
            <Award className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
            <span className="text-xs md:text-sm font-medium">4.8/5 (1,200+ Reviews)</span>
          </div>
          
          <div className="flex items-center gap-2 text-muted-foreground justify-center">
            <Users className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
            <span className="text-xs md:text-sm font-medium">50,000+ Users</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
