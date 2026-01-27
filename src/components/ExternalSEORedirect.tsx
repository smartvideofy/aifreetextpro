import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

interface ExternalSEORedirectProps {
  to: string;
}

/**
 * SEO-friendly redirect component for external URLs.
 * Uses meta refresh for search engine crawlers and window.location for JS-enabled browsers.
 */
export const ExternalSEORedirect = ({ to }: ExternalSEORedirectProps) => {
  useEffect(() => {
    window.location.href = to;
  }, [to]);

  return (
    <>
      <Helmet>
        {/* Meta refresh for crawlers that don't execute JS */}
        <meta httpEquiv="refresh" content={`0; url=${to}`} />
        {/* Canonical points to the destination */}
        <link rel="canonical" href={to} />
        {/* Tell crawlers not to index this redirect page, but follow the link */}
        <meta name="robots" content="noindex, follow" />
        <meta name="googlebot" content="noindex, follow" />
        <title>Redirecting...</title>
      </Helmet>
      <div style={{ padding: "20px", textAlign: "center" }}>
        <p>Redirecting to <a href={to}>{to}</a>...</p>
      </div>
    </>
  );
};

export default ExternalSEORedirect;
