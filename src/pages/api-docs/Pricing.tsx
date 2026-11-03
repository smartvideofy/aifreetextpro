import { Link } from "react-router-dom";
import { DocsLayout } from "@/components/api-docs/DocsLayout";
import { Callout, H2, List, P, SimpleTable } from "@/components/api-docs/DocsBlocks";
import { DETECT_WORDS_PER_TOKEN, DEVELOPER_CONSOLE, FREE_TRIAL_TOKENS, TOKEN_PACKS, formatNumber, pricePer1kWords } from "@/lib/developerApi";

const ApiDocsPricing = () => (
  <DocsLayout
    metaTitle="AI Humanizer API Pricing: Token Packs From $9.99"
    description="AI Free Text Pro API pricing: prepaid token packs from $9.99 for 15,000 tokens. 1 token = 1 word humanized, detection 1 token per 5 words, 500 free tokens, auto-recharge and receipts."
    title="Pricing and billing"
    lead="Pay as you go with prepaid tokens. No subscription, and separate from the web app plans."
  >
    <H2 id="tokens">How tokens work</H2>
    <SimpleTable
      head={["Request", "Cost"]}
      rows={[
        ["/v1/humanize", "1 token per word of input"],
        ["/v1/detect", `1 token per ${DETECT_WORDS_PER_TOKEN} words, rounded up`],
        ["Failed request (our side)", "Free: refunded automatically"],
        ["Rejected request (400, 401, 402, 429)", "Free: nothing is charged"],
      ]}
    />
    <P>New accounts get {FREE_TRIAL_TOKENS} free tokens. Every response includes <code>tokens_used</code> and <code>tokens_remaining</code>, so you can meter usage in your own product.</P>

    <H2 id="packs">Token packs</H2>
    <SimpleTable
      head={["Pack", "Price (USD)", "Tokens", "Per 1,000 words"]}
      rows={TOKEN_PACKS.map((p) => [p.name + (p.popular ? " (most popular)" : ""), `$${p.priceUsd.toFixed(2)}`, formatNumber(p.tokens), pricePer1kWords(p)])}
    />
    <P>
      Buy packs on the <a href={`${DEVELOPER_CONSOLE}/billing`}>Billing</a> page of the console with <strong>Add Credits</strong>. Payment is a one-off
      card charge in US dollars through Paystack; tokens are added as soon as the payment goes through.
    </P>

    <H2 id="auto-recharge">Auto-recharge</H2>
    <P>Switch it on in Billing so your integration doesn't stop when the balance runs out:</P>
    <List>
      <li>Choose a pack and a threshold. When a request leaves your balance below the threshold, that pack is bought with the card from your last purchase.</li>
      <li>It runs at most once every 15 minutes.</li>
      <li>If a charge fails, we email you. After 3 failures in a row, auto-recharge turns itself off.</li>
      <li>Your first purchase saves the card; buy any pack once before turning it on.</li>
    </List>

    <H2 id="low-balance">Low-balance email</H2>
    <P>If you'd rather top up by hand, turn on the low-balance email in Billing and set a threshold. We email you at most once a day while your balance is below it (not while auto-recharge is on).</P>

    <H2 id="receipts">Receipts and history</H2>
    <P>Billing lists every purchase with a printable receipt, and the full token history: purchases, usage per request, refunds and auto-recharges. Usage and Logs break it down by key and endpoint, with CSV export.</P>

    <Callout>
      The <Link to="/api/mcp" className="text-primary hover:underline">MCP server</Link> for Claude and ChatGPT uses your AI Free Text Pro web plan
      (monthly words), not API tokens.
    </Callout>
  </DocsLayout>
);

export default ApiDocsPricing;
