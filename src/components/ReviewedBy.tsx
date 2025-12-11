import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

interface ReviewedByProps {
  name: string;
  role: string;
  slug: string;
}

const ReviewedBy = ({ name, role, slug }: ReviewedByProps) => {
  return (
    <div className="flex items-center gap-3 py-4 px-5 bg-muted/50 rounded-lg border border-border/50 my-8">
      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
      <div className="text-sm">
        <span className="text-muted-foreground">Reviewed by </span>
        <Link 
          to={`/team#${slug}`} 
          className="font-semibold text-primary hover:underline"
        >
          {name}
        </Link>
        <span className="text-muted-foreground"> · {role}</span>
      </div>
    </div>
  );
};

export default ReviewedBy;
