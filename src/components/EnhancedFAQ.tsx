import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Helmet } from "react-helmet-async";

const faqs = [
  {
    question: "How accurate is AI Free Text Pro compared to GPTZero?",
    answer: "AI Free Text Pro achieves 98% accuracy using advanced GPT-4o Mini models for text pattern analysis. Our testing shows we outperform GPTZero (90% accuracy) and ZeroGPT (85% accuracy) in detecting ChatGPT, Claude, and other AI-generated content. We provide word-by-word probability scores and detailed breakdowns for transparent, actionable insights."
  },
  {
    question: "Can AI Free Text Pro detect ChatGPT 4 and Claude?",
    answer: "Yes! AI Free Text Pro is specifically designed to detect the latest AI models including ChatGPT-5, GPT-5, Claude 4, Gemini 2, and other leading language models. Our detection algorithms are continuously updated to identify patterns from new AI systems."
  },
  {
    question: "Is AI Free Text Pro free forever?",
    answer: "Yes, AI Free Text Pro offers a generous free tier with 1,000 words per month, 4x more than Rewritify (250 words) and double what ZeroGPT offers (500 words). Our core AI detection and humanization features remain free forever. Premium plans with higher limits are available for power users."
  },
  {
    question: "How does the AI humanizer work?",
    answer: "Our AI humanizer transforms robotic AI text into natural, human-like writing using advanced language models. You can choose from 4 writing styles (Professional, Academic, Creative, Casual) and customize settings for tone and complexity. The humanizer preserves your original meaning while improving flow, variety, and authenticity to bypass AI detectors."
  },
  {
    question: "Can I use this to bypass Turnitin AI detection?",
    answer: "AI Free Text Pro's humanizer improves text quality and naturalness, which may help content pass AI detection systems. However, we strongly encourage ethical use. Our tool is designed to help refine AI-assisted drafts and improve readability, not to deceive academic integrity systems. Always follow your institution's guidelines on AI usage."
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
    answer: "AI Detector analyzes text to identify AI-generated content, providing probability scores and word-by-word breakdowns highlighting suspicious patterns. AI Humanizer transforms robotic or AI-generated text into natural, human-like writing by improving flow, vocabulary variety, and authenticity. Use them together for best results, detect first, then humanize!"
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
    answer: "AI Free Text Pro offers higher detection accuracy (98% vs 88%), more writing styles (4 vs 2), better file support (PDF/DOCX/TXT vs text only), and a 4x larger free tier (1,000 vs 250 words). We also include features like word-by-word analysis, PDF reports, and analytics dashboard that Rewritify lacks."
  },
  {
    question: "Can I use AI Free Text Pro for content marketing?",
    answer: "Absolutely! Our Professional and Creative writing styles are perfect for marketing content, blog posts, social media, and email campaigns. The AI detector helps verify content authenticity, while the humanizer ensures your AI-assisted content sounds natural and engaging."
  },
  {
    question: "Does AI Free Text Pro work in languages other than English?",
    answer: "Currently, AI Free Text Pro is optimized for English text analysis and humanization. We're working on adding support for Spanish, French, German, and other major languages in future updates."
  },
  {
    question: "Is there a free AI humanizer tool?",
    answer: "Yes! AI Free Text Pro is a free AI humanizer tool that transforms AI-generated text into natural, human-like writing. Get 1,000 free words per month with no credit card required. Our free tier offers 4x more words than competitors like Rewritify (250 words)."
  },
  {
    question: "Can I use an AI detector with unlimited words?",
    answer: "Our free tier includes 1,000 words per month for AI detection and humanization. Upgrade to Pro for unlimited AI detection and humanization with no word limits. This makes AI Free Text Pro perfect for high-volume content creators and agencies."
  },
  {
    question: "How do I use an AI humanizer for free?",
    answer: "Simply paste your AI-generated text into our free AI humanizer at app.aifreetextpro.com. Select a writing style (Academic, Professional, Creative, or Casual) and click Humanize. Your first 1,000 words each month are completely free with no signup required."
  }
];

const EnhancedFAQ = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-20 md:py-28" itemScope itemType="https://schema.org/FAQPage">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Everything you need to know about AI Free Text Pro
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index}
                value={`item-${index}`}
                className="border rounded-lg px-4" 
                itemScope 
                itemProp="mainEntity" 
                itemType="https://schema.org/Question"
              >
                <AccordionTrigger 
                  className="text-left hover:no-underline py-4 text-base font-medium" 
                  itemProp="name"
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent 
                  className="text-muted-foreground pb-4 leading-relaxed" 
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
