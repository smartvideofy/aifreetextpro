import { Link } from "react-router-dom";
import { DocsLayout } from "@/components/api-docs/DocsLayout";
import { CodeBlock, H2, P, SimpleTable } from "@/components/api-docs/DocsBlocks";
import { errorExample } from "@/components/api-docs/snippets";

const ApiDocsErrors = () => (
  <DocsLayout
    metaTitle="API Errors: Status Codes and Error Codes | AI Free Text Pro API"
    description="Every error the AI Free Text Pro API returns: HTTP status, error code, extra fields, whether you were charged and what to do (retry, fix the request, add tokens)."
    title="Errors"
    lead="Errors are JSON with a machine-readable code and a message you can show or log."
  >
    <H2 id="shape">Error format</H2>
    <P>Every error response has the same shape. Some codes add fields next to <code>code</code> and <code>message</code>:</P>
    <CodeBlock code={errorExample} label="402 Payment Required" />

    <H2 id="codes">Error codes</H2>
    <SimpleTable
      head={["Status", "code", "When", "Charged?", "What to do"]}
      rows={[
        ["400", "invalid_request", "The body isn't a JSON object, text is missing, or style, strength or another field is invalid.", "No", "Fix the request; the message names the field."],
        ["400", "text_too_long", "Over 5,000 words (humanize) or 50,000 characters (detect). Adds max_words and word_count, or max_characters.", "No", "Split the text; see best practices."],
        ["401", "invalid_api_key", "The key is missing, isn't an sk_live_ key, or was revoked.", "No", "Check the Authorization header; create a new key if needed."],
        ["402", "insufficient_tokens", "Your balance can't cover the request. Adds tokens_needed and tokens_remaining.", "No", "Add credits, or turn on auto-recharge."],
        ["404", "not_found", "No endpoint at that path.", "No", "Use /v1/humanize or /v1/detect."],
        ["405", "method_not_allowed", "Anything other than POST (or an OPTIONS preflight).", "No", "Use POST."],
        ["413", "payload_too_large", "The request body is over 1 MB. Adds max_body_bytes.", "No", "Send only the documented fields; split long text."],
        ["429", "rate_limited", "Over the per-minute limit. Adds retry_after_seconds and a Retry-After header.", "No", "Wait Retry-After seconds, then retry."],
        ["500", "server_error", "Something unexpected went wrong on our side.", "Normally not", "Retry once after a short wait. If it keeps happening or your balance dropped, email support@aifreetextpro.com with the time of the request."],
        ["503", "service_unavailable", "The rewriting or detection service is temporarily unavailable. Comes with Retry-After.", "Refunded", "Retry after Retry-After seconds."],
      ]}
    />

    <H2 id="charging">When you're charged</H2>
    <P>
      Tokens are taken when a request starts and given back automatically if it fails on our side. Requests that are rejected before any work
      (400, 401, 402, 404, 405, 429) are never charged. A humanize request that completes is charged even when the text comes back
      unchanged, because the rewriting and checks ran. Every charge and refund appears in the token history on the console's Billing page.
    </P>

    <H2 id="retries">Retrying</H2>
    <P>
      Retry <code>429</code> and <code>503</code> after the <code>Retry-After</code> delay, and network errors with exponential backoff. Don't
      retry 400-range errors without changing the request. See <Link to="/api/docs/best-practices#retries">best practices</Link> for a retry helper.
    </P>
  </DocsLayout>
);

export default ApiDocsErrors;
