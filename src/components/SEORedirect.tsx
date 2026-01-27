import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

interface SEORedirectProps {
  to: string;
}

/**
 * SEO-friendly redirect component for internal routes.
 * Uses meta refresh for search engine crawlers and React Router for JS-enabled browsers.
 */
export const SEORedirect = ({ to }: SEORedirectProps) => {
  const navigate = useNavigate();
  const fullUrl = `https://aifreetextpro.com${to}`;

  useEffect(() => {
    navigate(to, { replace: true });
  }, [to, navigate]);

  return (
    <>
      <Helmet>
        {/* Meta refresh for crawlers that don't execute JS */}
        <meta httpEquiv="refresh" content={`0; url=${fullUrl}`} />
        {/* Canonical points to the destination */}
        <link rel="canonical" href={fullUrl} />
        {/* Tell crawlers not to index this redirect page, but follow the link */}
        <meta name="robots" content="noindex, follow" />
        <meta name="googlebot" content="noindex, follow" />
        <title>Redirecting...</title>
      </Helmet>
      <div style={{ padding: "20px", textAlign: "center" }}>
        <p>Redirecting to <a href={fullUrl}>{fullUrl}</a>...</p>
      </div>
    </>
  );
};

export default SEORedirect;
