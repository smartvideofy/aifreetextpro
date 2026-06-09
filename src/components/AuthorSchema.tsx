import { Helmet } from "react-helmet-async";

interface AuthorSchemaProps {
  /** Canonical URL of the article this author byline appears on */
  articleUrl: string;
  /** Article headline */
  headline: string;
  /** ISO date string for publication date */
  datePublished: string;
  /** ISO date string for last modified date */
  dateModified?: string;
  /** Article description/excerpt */
  description: string;
  /** Optional hero image URL for the article */
  image?: string;
}

/**
 * Emits Article JSON-LD with full Person/Author E-E-A-T metadata for Dr. Sarah Chen.
 * Use on every blog post to standardize author signals for search engines and AI search.
 */
const AUTHOR = {
  "@type": "Person",
  name: "Dr. Sarah Chen",
  url: "https://aifreetextpro.com/team",
  jobTitle: "Head of AI Research",
  worksFor: {
    "@type": "Organization",
    name: "AI Free Text Pro",
    url: "https://aifreetextpro.com",
  },
  knowsAbout: [
    "AI content detection",
    "Natural language processing",
    "AI humanization",
    "Academic integrity",
    "Large language models",
  ],
  sameAs: [
    "https://aifreetextpro.com/team",
    "https://aifreetextpro.com/about",
  ],
};

const PUBLISHER = {
  "@type": "Organization",
  name: "AI Free Text Pro",
  url: "https://aifreetextpro.com",
  logo: {
    "@type": "ImageObject",
    url: "https://aifreetextpro.com/og-image.png",
  },
};

export const AuthorSchema = ({
  articleUrl,
  headline,
  datePublished,
  dateModified,
  description,
  image,
}: AuthorSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
    url: articleUrl,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: AUTHOR,
    publisher: PUBLISHER,
    ...(image ? { image } : {}),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default AuthorSchema;
