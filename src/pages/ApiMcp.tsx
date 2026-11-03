import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { toast } from "sonner";
import { Check, Copy, Plug, Wrench } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MCP_URL } from "@/lib/developerApi";

const tools = [
  { name: "humanize_text", desc: "Rewrites text sentence by sentence and checks it with an AI detector." },
  { name: "detect_ai_text", desc: "Scores text for how likely it is to be flagged as AI-written." },
  { name: "get_account_status", desc: "Your plan and how many words you have used this month." },
  { name: "list_humanizations", desc: "Your recent humanizations." },
  { name: "get_humanization", desc: "One humanization, with the original and the rewrite." },
  { name: "list_ai_detections", desc: "Your recent AI checks." },
];

const clients = [
  {
    name: "Claude (claude.ai and the desktop app)",
    steps: [
      'Open Settings, then Connectors, and choose "Add custom connector".',
      'Name it "AI Free Text Pro" and paste the server URL above.',
      "Click Connect, sign in with your AI Free Text Pro account and allow access.",
      'In a chat, ask Claude to "humanize this with AI Free Text Pro" or to check text for AI.',
    ],
  },
  {
    name: "ChatGPT",
    steps: [
      "Open Settings, then Apps & Connectors. If there is no option to create a connector, turn on developer mode under Advanced.",
      'Create a connector named "AI Free Text Pro" with the server URL above and OAuth authentication.',
      "Sign in with your AI Free Text Pro account and allow access.",
      "Turn the connector on in a chat and ask ChatGPT to humanize or check your text.",
    ],
  },
];

const cliCommand = `claude mcp add --transport http aifreetextpro ${MCP_URL}`;

function CopyField({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    toast.success("Copied");
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="flex items-center gap-2 rounded-lg border border-border bg-muted/40 px-3 py-2">
      <code className="flex-1 overflow-x-auto whitespace-nowrap font-mono text-sm">{value}</code>
      <Button size="icon" variant="ghost" className="h-8 w-8 shrink-0" onClick={copy} aria-label="Copy">
        {copied ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
      </Button>
    </div>
  );
}

const CardHeading = ({ children }: { children: React.ReactNode }) => (
  <CardHeader className="pb-3"><h2 className="flex items-center gap-2 text-lg font-semibold">{children}</h2></CardHeader>
);

const ApiMcp = () => {
  return (
    <>
      <Helmet>
        <title>AI Humanizer MCP Server for Claude and ChatGPT | AI Free Text Pro</title>
        <meta name="description" content="Connect AI Free Text Pro to Claude, ChatGPT, Claude Code and other MCP clients. Humanize text and check it for AI writing right in the chat, using your AI Free Text Pro plan." />
        <link rel="canonical" href="https://aifreetextpro.com/api/mcp" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="AI Humanizer MCP Server for Claude and ChatGPT" />
        <meta property="og:description" content="Humanize and check text for AI writing inside Claude and ChatGPT." />
        <meta property="og:url" content="https://aifreetextpro.com/api/mcp" />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org", "@type": "HowTo", "name": "Connect AI Free Text Pro to Claude",
            "step": clients[0].steps.map((text, i) => ({ "@type": "HowToStep", "position": i + 1, "text": text })),
          })}
        </script>
      </Helmet>

      <Navbar />
      <main className="min-h-screen">
        <div className="container mx-auto px-4 pt-4">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "API", href: "/api" }, { label: "MCP", href: "/api/mcp" }]} />
        </div>

        <div className="container mx-auto max-w-3xl space-y-8 px-4 py-10 lg:py-14">
          <div>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Plug className="h-5 w-5 text-primary" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Use AI Free Text Pro in Claude and ChatGPT</h1>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Our MCP server lets AI assistants humanize and check text for you, right in the chat.
              You sign in with your AI Free Text Pro account, and humanizing uses your plan's monthly words,
              the same as on <a className="text-primary hover:underline" href="https://app.aifreetextpro.com">app.aifreetextpro.com</a>.
              It doesn't use API tokens.
            </p>
          </div>

          <Card>
            <CardHeading>Server URL</CardHeading>
            <CardContent className="space-y-2">
              <CopyField value={MCP_URL} />
              <p className="text-xs text-muted-foreground">Streamable HTTP with OAuth sign-in. No API key needed.</p>
            </CardContent>
          </Card>

          {clients.map((client) => (
            <Card key={client.name}>
              <CardHeading>{client.name}</CardHeading>
              <CardContent>
                <ol className="list-decimal space-y-2 pl-5 text-sm text-muted-foreground">
                  {client.steps.map((step) => <li key={step}>{step}</li>)}
                </ol>
              </CardContent>
            </Card>
          ))}

          <Card>
            <CardHeading>Claude Code and other MCP clients</CardHeading>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>In Claude Code, run this, then sign in when asked:</p>
              <CopyField value={cliCommand} />
              <p>Other clients that support remote MCP servers with OAuth (Cursor, VS Code and others) take the same server URL.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeading><Wrench className="h-4 w-4 text-primary" /> Tools</CardHeading>
            <CardContent>
              <ul className="space-y-3">
                {tools.map((tool) => (
                  <li key={tool.name} className="text-sm">
                    <code className="font-mono text-primary">{tool.name}</code>
                    <span className="text-muted-foreground"> · {tool.desc}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <p className="text-sm text-muted-foreground">
            Building your own product instead? Use the <Link to="/api/docs" className="text-primary hover:underline">REST API</Link> with token packs.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ApiMcp;
