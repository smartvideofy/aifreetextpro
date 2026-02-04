import { Sparkles, CheckCircle } from "lucide-react";

interface KeyTakeawaysProps {
  points: string[];
}

export const KeyTakeaways = ({ points }: KeyTakeawaysProps) => {
  return (
    <div className="key-takeaways bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
      <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
        <Sparkles className="w-5 h-5 text-primary" />
        Key Takeaways
      </h2>
      <ul className="space-y-2">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KeyTakeaways;
