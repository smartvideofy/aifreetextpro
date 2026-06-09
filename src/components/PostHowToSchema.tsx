import { Helmet } from "react-helmet-async";

interface HowToStep {
  name: string;
  text: string;
  url?: string;
}

interface PostHowToSchemaProps {
  /** Canonical URL of the article */
  url: string;
  /** HowTo name (typically post title or "How to ...") */
  name: string;
  description: string;
  /** ISO-8601 duration like "PT8M" */
  totalTime?: string;
  /** Optional cost; defaults to free */
  estimatedCost?: { currency: string; value: string };
  steps: HowToStep[];
  image?: string;
}

/**
 * Per-post HowTo JSON-LD via Helmet. Use on guide/how-to blog posts that
 * have a clear step-by-step structure.
 */
export const PostHowToSchema = ({
  url,
  name,
  description,
  totalTime = "PT8M",
  estimatedCost = { currency: "USD", value: "0" },
  steps,
  image,
}: PostHowToSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    totalTime,
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: estimatedCost.currency,
      value: estimatedCost.value,
    },
    ...(image ? { image } : {}),
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
      ...(s.url ? { url: s.url } : { url: `${url}#step-${i + 1}` }),
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default PostHowToSchema;
