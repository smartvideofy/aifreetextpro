import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { ArrowRight, FileText } from "lucide-react";

type Article = {
  title: string;
  description: string;
  href: string;
  category: string;
};

interface RelatedArticlesProps {
  articles: Article[];
}

export const RelatedArticles = ({ articles }: RelatedArticlesProps) => {
  return (
    <section className="py-12 border-t border-border/50">
      <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <Link key={index} to={article.href} className="group">
            <Card className="p-6 h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-card/50 backdrop-blur border-border/50">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs text-primary font-medium">{article.category}</span>
                    <h3 className="font-semibold mt-1 group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {article.description}
                </p>
                <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                  Read more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};
