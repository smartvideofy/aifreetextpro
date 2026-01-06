import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl: string;
  keywords?: string;
  ogType?: "website" | "article";
  ogImage?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  noindex?: boolean;
}

const DEFAULT_OG_IMAGE = "https://storage.googleapis.com/gpt-engineer-file-uploads/pMRdXBn6dLVGnmBuHKJGJfIOYh42/social-images/social-1759692115249-Logo.PNG";
const SITE_NAME = "AI Free Text Pro";
const TWITTER_HANDLE = "@aifreetextpro";

export const SEOHead = ({
  title,
  description,
  canonicalUrl,
  keywords,
  ogType = "website",
  ogImage = DEFAULT_OG_IMAGE,
  publishedTime,
  modifiedTime,
  author = "AI Free Text Pro",
  noindex = false,
}: SEOHeadProps) => {
  const fullUrl = canonicalUrl.startsWith("http") 
    ? canonicalUrl 
    : `https://aifreetextpro.com${canonicalUrl}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullUrl} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
      <meta name="googlebot" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
      <meta name="bingbot" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
      <meta name="author" content={author} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />

      {/* Article-specific OG tags */}
      {ogType === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {ogType === "article" && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {ogType === "article" && author && (
        <meta property="article:author" content={author} />
      )}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={TWITTER_HANDLE} />
      <meta name="twitter:creator" content={TWITTER_HANDLE} />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={title} />
    </Helmet>
  );
};

export default SEOHead;
