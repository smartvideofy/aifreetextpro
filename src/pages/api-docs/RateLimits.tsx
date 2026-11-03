import { Link } from "react-router-dom";
import { DocsLayout } from "@/components/api-docs/DocsLayout";
import { H2, P, SimpleTable } from "@/components/api-docs/DocsBlocks";
import { MAX_DETECT_CHARACTERS, MAX_HUMANIZE_WORDS, formatNumber } from "@/lib/developerApi";

const ApiDocsRateLimits = () => (
  <DocsLayout
    metaTitle="API Rate Limits and Request Sizes | AI Free Text Pro API"
    description="Rate limits and size limits for the AI Free Text Pro API: 10 humanize and 30 detect requests per minute per account, 5,000 words or 50,000 characters per request, and typical response times."
    title="Rate limits and sizes"
    lead="Limits are per account, across all your API keys and the console Playground."
  >
    <H2 id="limits">Limits</H2>
    <SimpleTable
      head={["Endpoint", "Requests per minute", "Max per request", "Typical time", "Client timeout"]}
      rows={[
        ["/v1/humanize", "10", `${formatNumber(MAX_HUMANIZE_WORDS)} words`, "20–90 s", "150 s"],
        ["/v1/detect", "30", `${formatNumber(MAX_DETECT_CHARACTERS)} characters`, "2–10 s", "60 s"],
      ]}
    />

    <H2 id="rate-limited">When you hit a limit</H2>
    <P>
      Over the per-minute limit, requests get <code>429 rate_limited</code> with a <code>Retry-After</code> header (in seconds) and a
      <code> retry_after_seconds</code> field. Rate-limited requests aren't charged. Wait that long and retry.
    </P>
    <P>
      Oversized requests get <code>400 text_too_long</code> before anything is charged. Split long documents at paragraph breaks;
      <Link to="/api/docs/best-practices#long-documents" className="text-primary hover:underline"> best practices</Link> has code for that.
    </P>

    <H2 id="throughput">Throughput</H2>
    <P>
      Because a humanize request runs several rewrite and detection rounds, ten requests a minute is the steady-state limit, not ten in
      parallel at once followed by nothing. To process a batch, send requests a few at a time and start the next as each finishes. At 5,000
      words per request that is up to about 50,000 words a minute.
    </P>
    <P>Need higher limits for a production workload? Email <a href="mailto:support@aifreetextpro.com" className="text-primary hover:underline">support@aifreetextpro.com</a> with your expected volume.</P>
  </DocsLayout>
);

export default ApiDocsRateLimits;
