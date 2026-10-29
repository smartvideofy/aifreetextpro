import { Card } from "@/components/ui/card";
import { CheckCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ComparisonItem {
  feature: string;
  aiFreeTextPro: React.ReactNode;
  zeroGPT: React.ReactNode;
  gptZero: React.ReactNode;
  rewritify: React.ReactNode;
}

const comparisonData: ComparisonItem[] = [
  {
    feature: "AI Content Detection",
    aiFreeTextPro: <CheckCircle className="w-5 h-5 text-primary mx-auto" />,
    zeroGPT: <CheckCircle className="w-5 h-5 text-muted-foreground mx-auto" />,
    gptZero: <CheckCircle className="w-5 h-5 text-muted-foreground mx-auto" />,
    rewritify: <CheckCircle className="w-5 h-5 text-muted-foreground mx-auto" />,
  },
  {
    feature: "AI Text Humanizer",
    aiFreeTextPro: <CheckCircle className="w-5 h-5 text-primary mx-auto" />,
    zeroGPT: <X className="w-5 h-5 text-destructive mx-auto" />,
    gptZero: <X className="w-5 h-5 text-destructive mx-auto" />,
    rewritify: <CheckCircle className="w-5 h-5 text-muted-foreground mx-auto" />,
  },
  {
    feature: "Detection Accuracy",
    aiFreeTextPro: <span className="font-bold text-primary">98%</span>,
    zeroGPT: <span className="text-muted-foreground">~85%</span>,
    gptZero: <span className="text-muted-foreground">~90%</span>,
    rewritify: <span className="text-muted-foreground">~88%</span>,
  },
  {
    feature: "Writing Styles",
    aiFreeTextPro: <span className="font-bold text-primary">4 Styles</span>,
    zeroGPT: <span className="text-muted-foreground">N/A</span>,
    gptZero: <span className="text-muted-foreground">N/A</span>,
    rewritify: <span className="text-muted-foreground">2 Styles</span>,
  },
  {
    feature: "File Upload",
    aiFreeTextPro: <span className="font-bold text-primary text-xs">PDF, DOCX, TXT</span>,
    zeroGPT: <span className="text-muted-foreground text-xs">PDF only</span>,
    gptZero: <span className="text-muted-foreground text-xs">PDF only</span>,
    rewritify: <span className="text-muted-foreground text-xs">Text only</span>,
  },
  {
    feature: "Free Tier Words",
    aiFreeTextPro: <span className="font-bold text-primary">1,000</span>,
    zeroGPT: <span className="text-muted-foreground">500</span>,
    gptZero: <span className="text-muted-foreground">500</span>,
    rewritify: <span className="text-muted-foreground">250</span>,
  },
  {
    feature: "Price (Free Plan)",
    aiFreeTextPro: <span className="font-bold text-primary text-lg">$0</span>,
    zeroGPT: <span className="text-muted-foreground">$0</span>,
    gptZero: <span className="text-muted-foreground">$0</span>,
    rewritify: <span className="text-muted-foreground">$0</span>,
  },
];

// Mobile Card Component
const MobileComparisonCard = ({ item }: { item: ComparisonItem }) => (
  <Card className="p-4 bg-card/80 border-border/50">
    <h4 className="font-semibold text-sm mb-3 text-foreground">{item.feature}</h4>
    <div className="grid grid-cols-2 gap-3 text-center text-xs">
      <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
        <div className="font-semibold text-primary text-[10px] mb-1">AI Free Text Pro</div>
        <div>{item.aiFreeTextPro}</div>
      </div>
      <div className="p-2 rounded-lg bg-muted/50">
        <div className="font-medium text-muted-foreground text-[10px] mb-1">ZeroGPT</div>
        <div>{item.zeroGPT}</div>
      </div>
      <div className="p-2 rounded-lg bg-muted/50">
        <div className="font-medium text-muted-foreground text-[10px] mb-1">GPTZero</div>
        <div>{item.gptZero}</div>
      </div>
      <div className="p-2 rounded-lg bg-muted/50">
        <div className="font-medium text-muted-foreground text-[10px] mb-1">Rewritify</div>
        <div>{item.rewritify}</div>
      </div>
    </div>
  </Card>
);

const ComparisonTable = () => {
  return (
    <section className="py-12 md:py-28 bg-card/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6">AI Free Text Pro vs Competitors</h2>
          <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto">
            See why thousands choose AI Free Text Pro over ZeroGPT, GPTZero, and Rewritify
          </p>
        </div>

        {/* Mobile Card Layout */}
        <div className="md:hidden space-y-4 max-w-lg mx-auto">
          {comparisonData.map((item, index) => (
            <MobileComparisonCard key={index} item={item} />
          ))}
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block max-w-6xl mx-auto overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden shadow-xl">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-6 px-6 font-bold text-lg">Feature</th>
                <th className="text-center py-6 px-6 font-bold text-lg bg-primary/10">
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-primary">AI Free Text Pro</span>
                    <span className="text-xs font-normal text-muted-foreground">Free Forever</span>
                  </div>
                </th>
                <th className="text-center py-6 px-6 font-bold text-lg">ZeroGPT</th>
                <th className="text-center py-6 px-6 font-bold text-lg">GPTZero</th>
                <th className="text-center py-6 px-6 font-bold text-lg">Rewritify</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr className="hover:bg-muted/5 transition-colors">
                <td className="py-5 px-6 font-semibold">AI Content Detection</td>
                <td className="text-center py-5 px-6 bg-primary/5">
                  <CheckCircle className="w-6 h-6 text-primary mx-auto" />
                </td>
                <td className="text-center py-5 px-6">
                  <CheckCircle className="w-6 h-6 text-muted-foreground mx-auto" />
                </td>
                <td className="text-center py-5 px-6">
                  <CheckCircle className="w-6 h-6 text-muted-foreground mx-auto" />
                </td>
                <td className="text-center py-5 px-6">
                  <CheckCircle className="w-6 h-6 text-muted-foreground mx-auto" />
                </td>
              </tr>
              
              <tr className="hover:bg-muted/5 transition-colors">
                <td className="py-5 px-6 font-semibold">AI Text Humanizer</td>
                <td className="text-center py-5 px-6 bg-primary/5">
                  <CheckCircle className="w-6 h-6 text-primary mx-auto" />
                </td>
                <td className="text-center py-5 px-6">
                  <X className="w-6 h-6 text-destructive mx-auto" />
                </td>
                <td className="text-center py-5 px-6">
                  <X className="w-6 h-6 text-destructive mx-auto" />
                </td>
                <td className="text-center py-5 px-6">
                  <CheckCircle className="w-6 h-6 text-muted-foreground mx-auto" />
                </td>
              </tr>

              <tr className="hover:bg-muted/5 transition-colors">
                <td className="py-5 px-6 font-semibold">Detection Accuracy</td>
                <td className="text-center py-5 px-6 bg-primary/5">
                  <span className="font-bold text-primary">98%</span>
                </td>
                <td className="text-center py-5 px-6 text-muted-foreground">~85%</td>
                <td className="text-center py-5 px-6 text-muted-foreground">~90%</td>
                <td className="text-center py-5 px-6 text-muted-foreground">~88%</td>
              </tr>

              <tr className="hover:bg-muted/5 transition-colors">
                <td className="py-5 px-6 font-semibold">Writing Styles</td>
                <td className="text-center py-5 px-6 bg-primary/5">
                  <span className="font-bold text-primary">4 Styles</span>
                  <div className="text-xs text-muted-foreground mt-1">Professional, Academic, Creative, Casual</div>
                </td>
                <td className="text-center py-5 px-6 text-muted-foreground">N/A</td>
                <td className="text-center py-5 px-6 text-muted-foreground">N/A</td>
                <td className="text-center py-5 px-6 text-muted-foreground">2 Styles</td>
              </tr>

              <tr className="hover:bg-muted/5 transition-colors">
                <td className="py-5 px-6 font-semibold">File Upload Support</td>
                <td className="text-center py-5 px-6 bg-primary/5">
                  <span className="font-bold text-primary">PDF, DOCX, TXT</span>
                  <div className="text-xs text-muted-foreground mt-1">Up to 10MB</div>
                </td>
                <td className="text-center py-5 px-6 text-muted-foreground">PDF only</td>
                <td className="text-center py-5 px-6 text-muted-foreground">PDF only</td>
                <td className="text-center py-5 px-6 text-muted-foreground">Text only</td>
              </tr>

              <tr className="hover:bg-muted/5 transition-colors">
                <td className="py-5 px-6 font-semibold">Word-by-Word Analysis</td>
                <td className="text-center py-5 px-6 bg-primary/5">
                  <CheckCircle className="w-6 h-6 text-primary mx-auto" />
                </td>
                <td className="text-center py-5 px-6">
                  <CheckCircle className="w-6 h-6 text-muted-foreground mx-auto" />
                </td>
                <td className="text-center py-5 px-6">
                  <X className="w-6 h-6 text-destructive mx-auto" />
                </td>
                <td className="text-center py-5 px-6">
                  <X className="w-6 h-6 text-destructive mx-auto" />
                </td>
              </tr>

              <tr className="hover:bg-muted/5 transition-colors">
                <td className="py-5 px-6 font-semibold">Professional PDF Reports</td>
                <td className="text-center py-5 px-6 bg-primary/5">
                  <CheckCircle className="w-6 h-6 text-primary mx-auto" />
                </td>
                <td className="text-center py-5 px-6">
                  <X className="w-6 h-6 text-destructive mx-auto" />
                </td>
                <td className="text-center py-5 px-6">
                  <span className="text-xs text-muted-foreground">Paid only</span>
                </td>
                <td className="text-center py-5 px-6">
                  <X className="w-6 h-6 text-destructive mx-auto" />
                </td>
              </tr>

              <tr className="hover:bg-muted/5 transition-colors">
                <td className="py-5 px-6 font-semibold">Free Tier Word Limit</td>
                <td className="text-center py-5 px-6 bg-primary/5">
                  <span className="font-bold text-primary text-lg">1,000 words</span>
                </td>
                <td className="text-center py-5 px-6 text-muted-foreground">500 words</td>
                <td className="text-center py-5 px-6 text-muted-foreground">500 words</td>
                <td className="text-center py-5 px-6 text-muted-foreground">250 words</td>
              </tr>

              <tr className="hover:bg-muted/5 transition-colors">
                <td className="py-5 px-6 font-semibold">Price (Free Plan)</td>
                <td className="text-center py-5 px-6 bg-primary/5">
                  <span className="font-bold text-primary text-xl">$0</span>
                  <div className="text-xs text-muted-foreground mt-1">Forever</div>
                </td>
                <td className="text-center py-5 px-6">
                  <span className="font-semibold">$0</span>
                  <div className="text-xs text-muted-foreground mt-1">Limited</div>
                </td>
                <td className="text-center py-5 px-6">
                  <span className="font-semibold">$0</span>
                  <div className="text-xs text-muted-foreground mt-1">Limited</div>
                </td>
                <td className="text-center py-5 px-6">
                  <span className="font-semibold">$0</span>
                  <div className="text-xs text-muted-foreground mt-1">Very Limited</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="text-center mt-8 md:mt-12">
          <a href="https://app.aifreetextpro.com/">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-sm md:text-lg px-6 md:px-12 py-5 md:py-6 shadow-xl hover:shadow-2xl shadow-primary/20 w-full sm:w-auto">
              Try AI Free Text Pro Free <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Button>
          </a>
          <p className="text-xs md:text-sm text-muted-foreground mt-4">
            Join 50,000+ users who trust AI Free Text Pro
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
