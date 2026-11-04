import { Users, FileText, TrendingUp, Globe } from "lucide-react";

interface StatItem {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  color: "primary" | "secondary";
}

const stats: StatItem[] = [
  { icon: <Users className="w-8 h-8" />, value: 50000, suffix: "+", label: "Active Users", color: "primary" },
  { icon: <FileText className="w-8 h-8" />, value: 2000000, suffix: "+", label: "Texts Analyzed", color: "secondary" },
  { icon: <TrendingUp className="w-8 h-8" />, value: 98, suffix: "%", label: "Accuracy Rate", color: "primary" },
  { icon: <Globe className="w-8 h-8" />, value: 120, suffix: "+", label: "Countries", color: "secondary" },
];

const formatNumber = (num: number): string => {
  if (num >= 1000000) return `${(num / 1000000).toFixed(0)}M`;
  if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
  return num.toString();
};

/**
 * The figures are rendered as text from the start (no count-up from zero and
 * no hidden-until-scrolled state), so prerendered HTML, crawlers and visitors
 * who never scroll all see the real numbers.
 */
const AnimatedStats = () => {
  return (
    <section className="py-10 md:py-20 bg-gradient-to-b from-card/10 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">Trusted by Writers Worldwide</h2>
          <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto">
            Join thousands of professionals, students, and creators who rely on AI Free Text Pro
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center space-y-1 md:space-y-2"
            >
              <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3 ${
                stat.color === "primary" ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"
              }`}>
                <div className="w-6 h-6 md:w-8 md:h-8">
                  {stat.icon}
                </div>
              </div>
              <div className={`text-2xl md:text-4xl font-bold ${
                stat.color === "primary" ? "text-primary" : "text-secondary"
              }`}>
                {formatNumber(stat.value)}{stat.suffix}
              </div>
              <div className="text-[10px] md:text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedStats;
