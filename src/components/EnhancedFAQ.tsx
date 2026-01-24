import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How accurate is AI Free Text Pro compared to GPTZero?",
    answer: "AI Free Text Pro achieves 98% accuracy using advanced GPT-4o Mini models for text pattern analysis. Our testing shows we outperform GPTZero (90% accuracy) and ZeroGPT (85% accuracy) in detecting ChatGPT, Claude, and other AI-generated content. We provide word-by-word probability scores and detailed breakdowns for transparent, actionable insights."
  },
  {
    question: "Can AI Free Text Pro detect ChatGPT 4 and Claude?",
    answer: "Yes! AI Free Text Pro is specifically designed to detect the latest AI models including ChatGPT-4, GPT-4 Turbo, Claude 3, Gemini, and other leading language models. Our detection algorithms are continuously updated to identify patterns from new AI systems."
  },
  {
    question: "Is AI Free Text Pro free forever?",
    answer: "Yes, AI Free Text Pro offers a generous free tier with 1,000 words per analysis — double what competitors like ZeroGPT (500 words) and Rewritify (250 words) offer. Our core AI detection and humanization features remain free forever. Premium features with higher limits are planned for the future."
  },
  {
    question: "How does the AI humanizer work?",
    answer: "Our AI humanizer transforms robotic AI text into natural, human-like writing using advanced language models. You can choose from 4 writing styles (Professional, Academic, Creative, Casual) and customize settings for tone and complexity. The humanizer preserves your original meaning while improving flow, variety, and authenticity to bypass AI detectors."
  },
  {
    question: "Can I use this to bypass Turnitin AI detection?",
    answer: "AI Free Text Pro's humanizer improves text quality and naturalness, which may help content pass AI detection systems. However, we strongly encourage ethical use. Our tool is designed to help refine AI-assisted drafts and improve readability — not to deceive academic integrity systems. Always follow your institution's guidelines on AI usage."
  },
  {
    question: "Is my text stored or shared with anyone?",
    answer: "No, never. Your privacy is our top priority. AI Free Text Pro processes all content in real-time and does not store, log, or share your text with third parties. Analysis happens on-demand, and your content is immediately discarded after processing. We maintain a strict zero-data-retention policy."
  },
  {
    question: "What file formats can I upload?",
    answer: "AI Free Text Pro supports PDF, DOCX (Microsoft Word), and TXT file uploads up to 10MB in size. This is more comprehensive than competitors like ZeroGPT and GPTZero, which typically only support PDF files. You can also paste text directly into the editor."
  },
  {
    question: "What's the difference between AI Detector and Humanizer?",
    answer: "AI Detector analyzes text to identify AI-generated content, providing probability scores and word-by-word breakdowns highlighting suspicious patterns. AI Humanizer transforms robotic or AI-generated text into natural, human-like writing by improving flow, vocabulary variety, and authenticity. Use them together for best results — detect first, then humanize!"
  },
  {
    question: "How does AI Free Text Pro compare to ZeroGPT?",
    answer: "AI Free Text Pro offers both AI detection AND humanization in one platform, while ZeroGPT only offers detection. We also provide 98% accuracy vs ZeroGPT's ~85%, double the free word limit (1,000 vs 500 words), and additional features like PDF reports, analytics dashboard, and 4 writing styles for humanization."
  },
  {
    question: "Can I export detection reports?",
    answer: "Yes! AI Free Text Pro generates professional PDF reports with detailed analysis, probability scores, highlighted sections, and actionable insights. This feature is free for all users, unlike GPTZero which requires a paid subscription for PDF exports."
  },
  {
    question: "Is AI Free Text Pro suitable for academic writing?",
    answer: "Yes, AI Free Text Pro is widely used by students and researchers to check essays, research papers, and assignments for AI content. Our Academic writing style helps refine AI-assisted drafts while maintaining scholarly tone. However, always use ethically and follow your institution's AI usage policies."
  },
  {
    question: "How long does analysis take?",
    answer: "AI detection and humanization both complete in approximately 3-5 seconds for typical text lengths (500-1,000 words). Our optimized processing ensures you get fast, accurate results without long wait times."
  },
  {
    question: "What makes AI Free Text Pro better than Rewritify?",
    answer: "AI Free Text Pro offers higher detection accuracy (98% vs 88%), more writing styles (4 vs 2), better file support (PDF/DOCX/TXT vs text only), and a larger free tier (1,000 vs 250 words). We also include features like word-by-word analysis, PDF reports, and analytics dashboard that Rewritify lacks."
  },
  {
    question: "Can I use AI Free Text Pro for content marketing?",
    answer: "Absolutely! Our Professional and Creative writing styles are perfect for marketing content, blog posts, social media, and email campaigns. The AI detector helps verify content authenticity, while the humanizer ensures your AI-assisted content sounds natural and engaging."
  },
  {
    question: "Does AI Free Text Pro work in languages other than English?",
    answer: "Currently, AI Free Text Pro is optimized for English text analysis and humanization. We're working on adding support for Spanish, French, German, and other major languages in future updates."
  }
];

const EnhancedFAQ = () => {
  return (
    <section className="py-20 md:py-28 bg-card/20" itemScope itemType="https://schema.org/FAQPage">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 md:gap-3 mb-6">
          <HelpCircle className="w-6 h-6 md:w-8 md:h-8 text-primary flex-shrink-0" />
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center">
            Frequently Asked Questions
          </h2>
        </div>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          Everything you need to know about AI Free Text Pro, detection accuracy, and humanization
        </p>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-lg px-6 hover:shadow-lg transition-shadow" 
                itemScope 
                itemProp="mainEntity" 
                itemType="https://schema.org/Question"
              >
                <AccordionTrigger 
                  className="text-left hover:no-underline py-5 text-lg font-semibold" 
                  itemProp="name"
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent 
                  className="text-muted-foreground pb-5 leading-relaxed" 
                  itemScope 
                  itemProp="acceptedAnswer" 
                  itemType="https://schema.org/Answer"
                >
                  <div itemProp="text">{faq.answer}</div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default EnhancedFAQ;
