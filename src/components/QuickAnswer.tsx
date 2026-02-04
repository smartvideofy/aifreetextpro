import { MessageCircleQuestion } from "lucide-react";

interface QuickAnswerProps {
  question: string;
  answer: string;
}

export const QuickAnswer = ({ question, answer }: QuickAnswerProps) => {
  return (
    <div className="quick-answer bg-secondary/10 border-l-4 border-secondary p-6 mb-8 rounded-r-lg">
      <div className="flex items-start gap-3">
        <MessageCircleQuestion className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
        <div>
          <p className="font-semibold text-lg mb-2">{question}</p>
          <p className="text-muted-foreground">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default QuickAnswer;
