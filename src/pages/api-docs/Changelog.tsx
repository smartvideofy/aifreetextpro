import { DocsLayout } from "@/components/api-docs/DocsLayout";
import { H2, List } from "@/components/api-docs/DocsBlocks";

// Newest first. Add an entry for every change customers can notice.
const entries: { date: string; id: string; items: React.ReactNode[] }[] = [
  {
    date: "4 November 2026",
    id: "2026-11-04",
    items: [
      <>Request bodies over 1 MB are refused with <code>413 payload_too_large</code>, before anything is charged. Requests within the text limits are well under 1 MB.</>,
    ],
  },
  {
    date: "3 November 2026",
    id: "2026-11-03",
    items: [
      <>The developer console moved to <code>developer.aifreetextpro.com</code>; <code>api.aifreetextpro.com</code> now serves only the API. Old console links redirect.</>,
      <>Documentation moved to <code>aifreetextpro.com/api/docs</code>.</>,
      <><code>/v1/humanize</code>: text stuck at a high AI score now gets an escalated rewrite by a second model in a looser voice. A version that ties with the original is returned instead of the original.</>,
      <><code>/v1/humanize</code>: requests that come back <code>unchanged</code> are now charged; only failed requests are refunded.</>,
      <>Developer console: Playground, usage charts, request logs, receipts, auto-recharge and low-balance emails.</>,
      <>New token packs: $9.99, $24.99, $49.99 and $99.99. New accounts get 500 free tokens.</>,
      <>New endpoint <code>POST /v1/detect</code>.</>,
      <><code>/v1/humanize</code> rebuilt on the sentence-aligned engine: one rewrite per sentence, AI-detector checks, up to four versions, <code>ai_score</code>, <code>versions</code> and <code>best_version</code> in the response.</>,
    ],
  },
];

const ApiDocsChangelog = () => (
  <DocsLayout
    metaTitle="API Changelog | AI Free Text Pro API"
    description="Changes to the AI Free Text Pro API: new endpoints, fields, pricing and behaviour, newest first."
    title="Changelog"
    lead="Changes to the API that you can notice, newest first."
  >
    {entries.map((e) => (
      <section key={e.id}>
        <H2 id={e.id}>{e.date}</H2>
        <div className="mt-3"><List>{e.items.map((item, i) => <li key={i}>{item}</li>)}</List></div>
      </section>
    ))}
  </DocsLayout>
);

export default ApiDocsChangelog;
