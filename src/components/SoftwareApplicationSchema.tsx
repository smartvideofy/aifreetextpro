import { Helmet } from "react-helmet-async";

interface SoftwareApplicationSchemaProps {
  name: string;
  description: string;
  url: string;
  category?: string;
  price?: string;
  priceCurrency?: string;
  ratingValue?: number;
  ratingCount?: number;
  screenshot?: string;
  featureList?: string[];
}

export const SoftwareApplicationSchema = ({
  name,
  description,
  url,
  category = "UtilityApplication",
  price = "0",
  priceCurrency = "USD",
  ratingValue,
  ratingCount,
  screenshot,
  featureList,
}: SoftwareApplicationSchemaProps) => {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    url,
    applicationCategory: category,
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price,
      priceCurrency,
      availability: "https://schema.org/InStock",
    },
  };
  // Only emit aggregateRating when real, page-specific values are supplied.
  // Never fabricate a default rating — unverifiable review snippets are a
  // Google manual-action risk.
  if (ratingValue && ratingCount) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue,
      ratingCount,
      bestRating: 5,
      worstRating: 1,
    };
  }
  if (screenshot) schema.screenshot = screenshot;
  if (featureList?.length) schema.featureList = featureList;

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default SoftwareApplicationSchema;
