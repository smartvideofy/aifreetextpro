import { Card } from "@/components/ui/card";
import { CheckCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ComparisonTable = () => {
  return (
    <section className="py-20 md:py-28 bg-card/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">AI Free Text Pro vs Competitors</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See why thousands choose AI Free Text Pro over ZeroGPT, GPTZero, and Rewritify
          </p>
        </div>

        <div className="max-w-6xl mx-auto overflow-x-auto">
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
                <td className="py-5 px-6 font-semibold">Customization Options</td>
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
                  <span className="text-xs text-muted-foreground">Limited</span>
                </td>
              </tr>

              <tr className="hover:bg-muted/5 transition-colors">
                <td className="py-5 px-6 font-semibold">Analytics Dashboard</td>
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

        <div className="text-center mt-12">
          <a href="https://app.aifreetextpro.com/">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-lg px-12 py-6 shadow-xl hover:shadow-2xl shadow-primary/20">
              Try AI Free Text Pro Free — No Credit Card <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
          <p className="text-sm text-muted-foreground mt-4">
            Join 50,000+ users who trust AI Free Text Pro for accurate AI detection and humanization
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
