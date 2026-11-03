import { Link } from "react-router-dom";
import { DocsLayout } from "@/components/api-docs/DocsLayout";
import { Callout, CodeBlock, CodeTabs, H2, P } from "@/components/api-docs/DocsBlocks";
import { detectExamples, detectResponseExample, humanizeExamples, humanizeResponseExample } from "@/components/api-docs/snippets";
import { DEVELOPER_CONSOLE, FREE_TRIAL_TOKENS } from "@/lib/developerApi";

const ApiDocsQuickstart = () => (
  <DocsLayout
    metaTitle="AI Humanizer API Quickstart: First Request in 5 Minutes"
    description="Get started with the AI Free Text Pro API: create an account and an API key, check text with /v1/detect and humanize it with /v1/humanize in cURL, Python or Node.js."
    title="Quickstart"
    lead="Create a key, check a paragraph for AI writing, then humanize it."
  >
    <H2 id="account">1. Create an account</H2>
    <P>
      Sign up at <a href={`${DEVELOPER_CONSOLE}/signup`}>developer.aifreetextpro.com</a>. If you already use AI Free Text Pro, sign in with
      the same account. Every account starts with {FREE_TRIAL_TOKENS} free API tokens, enough to humanize about {FREE_TRIAL_TOKENS} words.
    </P>
    <P>
      Want to see the output before writing code? The console's <a href={`${DEVELOPER_CONSOLE}/playground`}>Playground</a> runs real
      requests with your account, and shows the matching cURL, Python and JavaScript.
    </P>

    <H2 id="key">2. Create an API key</H2>
    <P>
      Open <a href={`${DEVELOPER_CONSOLE}/keys`}>API keys</a>, click <strong>Create key</strong> and copy the key. It starts with <code>sk_live_</code> and is shown only once.
      Keep it in an environment variable on your server:
    </P>
    <CodeBlock code={`export AIFREETEXT_API_KEY="sk_live_..."`} label="shell" />
    <Callout kind="warning">Never put the key in browser JavaScript or a mobile app: anyone could copy it and spend your tokens. Call the API from your backend.</Callout>

    <H2 id="detect">3. Check text for AI writing</H2>
    <P>Detection is the cheapest call (1 token per 5 words), so it's a good first test:</P>
    <CodeTabs examples={detectExamples} />
    <P>The response:</P>
    <CodeBlock code={detectResponseExample} label="json" />

    <H2 id="humanize">4. Humanize it</H2>
    <P>
      Send the same text to <code>/v1/humanize</code>. It takes 20–90 seconds because every version is checked with an AI detector,
      so give your HTTP client a timeout of at least 150 seconds.
    </P>
    <CodeTabs examples={humanizeExamples.filter((e) => ["curl", "python", "node"].includes(e.id))} />
    <P>The response:</P>
    <CodeBlock code={humanizeResponseExample} label="json" />
    <P>
      <code>humanized_text</code> is the version with the lowest AI score. <code>versions</code> lists the score of every round, and
      <code> best_version</code> says which one you got. Add <code>"return_versions": true</code> to get the text of every version too.
    </P>

    <H2 id="next">Next steps</H2>
    <ul className="list-disc space-y-1.5 pl-5 text-muted-foreground [&_a]:text-primary [&_a:hover]:underline">
      <li><Link to="/api/docs/humanize">All humanize options</Link>: styles, strength, languages and versions.</li>
      <li><Link to="/api/docs/best-practices">Best practices</Link>: long documents, retries and timeouts.</li>
      <li><Link to="/api/docs/pricing">Pricing</Link>: token packs and auto-recharge.</li>
    </ul>
  </DocsLayout>
);

export default ApiDocsQuickstart;
