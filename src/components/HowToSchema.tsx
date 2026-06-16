import { Helmet } from "react-helmet-async";

const HowToSchema = () => {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Use AI Free Text Pro to Detect and Humanize AI Text",
    "description": "Step-by-step guide to using AI Free Text Pro's AI detector and humanizer tools",
    "image": "https://aifreetextpro.com/og-image.png",
    "totalTime": "PT5M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "0"
    },
    "tool": [
      {
        "@type": "HowToTool",
        "name": "AI Free Text Pro"
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Input Your Content",
        "text": "Import or paste your text directly into the intuitive writing workspace. You can also upload PDF, DOCX, or TXT files up to 10MB.",
        "image": "https://aifreetextpro.com/og-image.png"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Smart Analysis & Refinement",
        "text": "Advanced AI analyzes patterns and suggests improvements for authenticity and readability. Choose from 4 writing styles: Professional, Academic, Creative, or Casual.",
        "image": "https://aifreetextpro.com/og-image.png"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Polish & Publish",
        "text": "Transform your content into polished, authentic writing ready for publication. Export professional PDF reports with detailed analysis.",
        "image": "https://aifreetextpro.com/og-image.png"
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(howToSchema)}
      </script>
    </Helmet>
  );
};

export default HowToSchema;
