import { Helmet } from "react-helmet-async";

interface ReviewSchemaProps {
  /** Name of the product/service being reviewed */
  itemName: string;
  /** What kind of thing is being reviewed (e.g. "SoftwareApplication") */
  itemType?: string;
  /** Canonical URL of the review page */
  reviewUrl: string;
  /** Optional URL of the item being reviewed (vendor site) */
  itemUrl?: string;
  /** Rating value, e.g. 4.2 */
  ratingValue: number;
  /** Best possible rating, default 5 */
  bestRating?: number;
  /** Number of ratings in the aggregate */
  ratingCount?: number;
  /** Short review headline */
  reviewHeadline: string;
  /** Review body, 1-3 sentences */
  reviewBody: string;
  /** ISO date string of the review */
  datePublished: string;
}

/**
 * Emits Review + AggregateRating JSON-LD authored by Dr. Sarah Chen.
 * Use on detector/humanizer review and comparison posts.
 */
const REVIEWER = {
  "@type": "Person",
  name: "Dr. Sarah Chen",
  url: "https://aifreetextpro.com/team",
};

const PUBLISHER = {
  "@type": "Organization",
  name: "AI Free Text Pro",
  url: "https://aifreetextpro.com",
};

export const ReviewSchema = ({
  itemName,
  itemType = "SoftwareApplication",
  reviewUrl,
  itemUrl,
  ratingValue,
  bestRating = 5,
  ratingCount = 1,
  reviewHeadline,
  reviewBody,
  datePublished,
}: ReviewSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Review",
    url: reviewUrl,
    name: reviewHeadline,
    reviewBody,
    datePublished,
    author: REVIEWER,
    publisher: PUBLISHER,
    itemReviewed: {
      "@type": itemType,
      name: itemName,
      ...(itemUrl ? { url: itemUrl } : {}),
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue,
      bestRating,
      worstRating: 1,
    },
  };

  const aggregate = {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    itemReviewed: {
      "@type": itemType,
      name: itemName,
      ...(itemUrl ? { url: itemUrl } : {}),
    },
    ratingValue,
    bestRating,
    worstRating: 1,
    ratingCount,
    reviewCount: ratingCount,
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
      <script type="application/ld+json">{JSON.stringify(aggregate)}</script>
    </Helmet>
  );
};

export default ReviewSchema;
