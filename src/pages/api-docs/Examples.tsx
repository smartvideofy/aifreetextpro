import { Link } from "react-router-dom";
import { DocsLayout } from "@/components/api-docs/DocsLayout";
import { CodeTabs, H2, P } from "@/components/api-docs/DocsBlocks";
import { detectExamples, humanizeExamples } from "@/components/api-docs/snippets";

const ApiDocsExamples = () => (
  <DocsLayout
    metaTitle="AI Humanizer API Code Examples: cURL, Python, Node.js, PHP, Go, Ruby"
    description="Copy-paste code examples for the AI Free Text Pro API: humanize AI text and detect AI writing with cURL, Python, Node.js, PHP, Go and Ruby, with timeouts and error handling."
    title="Code examples"
    lead="Working requests in six languages. Each reads the key from the AIFREETEXT_API_KEY environment variable."
  >
    <H2 id="humanize">Humanize text</H2>
    <P>Each example sends the text with the default style and strength, waits up to 150 seconds and raises an error with the API's error code when the request fails.</P>
    <CodeTabs examples={humanizeExamples} />

    <H2 id="detect">Detect AI writing</H2>
    <CodeTabs examples={detectExamples} />

    <H2 id="more">More patterns</H2>
    <P>
      Splitting long documents and retrying rate-limited requests are on the <Link to="/api/docs/best-practices">best practices</Link> page.
      Every field is described in the <Link to="/api/docs/humanize">humanize</Link> and <Link to="/api/docs/detect">detect</Link> references.
      To try a request without writing code, use the Playground in the developer console: it shows the matching cURL, Python and JavaScript for whatever you run.
    </P>
  </DocsLayout>
);

export default ApiDocsExamples;
