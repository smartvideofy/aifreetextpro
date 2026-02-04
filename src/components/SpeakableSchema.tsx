import { Helmet } from "react-helmet-async";

interface SpeakableSchemaProps {
  pageUrl: string;
  pageName: string;
  selectors?: string[];
}

export const SpeakableSchema = ({ 
  pageUrl, 
  pageName, 
  selectors = ["h1", ".article-summary", ".key-takeaways"] 
}: SpeakableSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": pageName,
    "url": pageUrl,
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": selectors
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default SpeakableSchema;
