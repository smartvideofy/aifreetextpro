import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { DocsLayout } from "@/components/api-docs/DocsLayout";
import { CodeBlock, H2, List, P, SimpleTable } from "@/components/api-docs/DocsBlocks";
import { MCP_URL } from "@/lib/developerApi";

const tools = [
  ["humanize_text", "Rewrites text sentence by sentence and checks it with an AI detector."],
  ["detect_ai_text", "Scores text for how likely it is to be flagged as AI-written."],
  ["get_account_status", "Your plan and how many words you have used this month."],
  ["list_humanizations", "Your recent humanizations."],
  ["get_humanization", "One humanization, with the original and the rewrite."],
  ["list_ai_detections", "Your recent AI checks."],
];

const claudeSteps = [
  'Open Settings, then Connectors, and choose "Add custom connector".',
  'Name it "AI Free Text Pro" and paste the server URL above.',
  "Click Connect, sign in with your AI Free Text Pro account and allow access.",
  'In a chat, ask Claude to "humanize this with AI Free Text Pro" or to check text for AI.',
];

const chatgptSteps = [
  "Open Settings, then Apps & Connectors. If there is no option to create a connector, turn on developer mode under Advanced.",
  'Create a connector named "AI Free Text Pro" with the server URL above and OAuth authentication.',
  "Sign in with your AI Free Text Pro account and allow access.",
  "Turn the connector on in a chat and ask ChatGPT to humanize or check your text.",
];

const cliCommand = `claude mcp add --transport http aifreetextpro ${MCP_URL}`;

const ApiMcp = () => (
  <DocsLayout
    metaTitle="AI Humanizer MCP Server for Claude and ChatGPT | AI Free Text Pro"
    description="Connect AI Free Text Pro to Claude, ChatGPT, Claude Code and other MCP clients. Humanize text and check it for AI writing right in the chat, using your AI Free Text Pro plan."
    title="Use AI Free Text Pro in Claude and ChatGPT"
    lead={<>Our MCP server lets AI assistants humanize and check text for you, right in the chat. You sign in with your AI Free Text Pro account, and humanizing uses your plan's monthly words, the same as on <a className="text-primary hover:underline" href="https://app.aifreetextpro.com">app.aifreetextpro.com</a>. It doesn't use API tokens.</>}
  >
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org", "@type": "HowTo", "name": "Connect AI Free Text Pro to Claude",
          "step": claudeSteps.map((text, i) => ({ "@type": "HowToStep", "position": i + 1, "text": text })),
        })}
      </script>
    </Helmet>

    <H2 id="server-url">Server URL</H2>
    <CodeBlock code={MCP_URL} label="mcp server" />
    <P>Streamable HTTP with OAuth sign-in. No API key needed.</P>

    <H2 id="claude">Claude (claude.ai and the desktop app)</H2>
    <List ordered>{claudeSteps.map((s) => <li key={s}>{s}</li>)}</List>

    <H2 id="chatgpt">ChatGPT</H2>
    <List ordered>{chatgptSteps.map((s) => <li key={s}>{s}</li>)}</List>

    <H2 id="claude-code">Claude Code and other MCP clients</H2>
    <P>In Claude Code, run this, then sign in when asked:</P>
    <CodeBlock code={cliCommand} label="shell" />
    <P>Other clients that support remote MCP servers with OAuth (Cursor, VS Code and others) take the same server URL.</P>

    <H2 id="tools">Tools</H2>
    <SimpleTable head={["Tool", "What it does"]} rows={tools} />

    <H2 id="api-or-mcp">MCP or the REST API?</H2>
    <P>
      Use MCP when you want the humanizer inside your own AI assistant. Building it into your own product or pipeline? Use the
      <Link to="/api/docs"> REST API</Link> with token packs instead.
    </P>
  </DocsLayout>
);

export default ApiMcp;
