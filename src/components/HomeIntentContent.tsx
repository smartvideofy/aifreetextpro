import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Wand2, ShieldCheck, Gauge } from "lucide-react";
import { trackCTAClick } from "@/lib/analytics";

/**
 * Homepage depth module targeting the queries the homepage already earns
 * impressions for ("ai free text", "ai text humanizer", "free ai humanizer",
 * "ai detector") plus a curated internal-link grid that pushes authority to
 * the detector, bypass and comparison hubs.
 */

const intents = [
  {
    icon: Wand2,
    heading: "AI text humanizer",
    body:
      "Paste ChatGPT, Claude, Gemini or DeepSeek output and rewrite it so sentence length, rhythm and word choice read like a person wrote it. The rewrite keeps your meaning, citations and formatting intact while raising perplexity and burstiness, the two signals detectors lean on hardest.",
    link: { to: "/blog/humanize-ai-text", label: "How humanizing works" },
  },
  {
    icon: Search,
    heading: "AI detector",
    body:
      "Run any draft through a detector before you submit it. You get a sentence-level breakdown showing which passages read as machine-generated, so you can revise the specific lines that trigger false flags instead of rewriting the whole document.",
    link: { to: "/ai-checker", label: "Check text for AI" },
  },
  {
    icon: Gauge,
    heading: "Free AI text tools, no signup",
    body:
      "The free tier covers 1,000 words per rewrite with no card and no trial countdown. That is enough for a full essay section, a landing page, or a batch of product descriptions, so you can judge output quality on your own writing before paying anything.",
    link: { to: "/free-ai-detector-word-limit", label: "See the free word limit" },
  },
  {
    icon: ShieldCheck,
    heading: "Written to reduce false flags",
    body:
      "Detectors misfire on non-native English, technical prose and heavily edited drafts. The goal here is not trickery, it is producing writing that is genuinely varied and specific enough that an honest draft is not misread as synthetic.",
    link: { to: "/technology", label: "How our engine works" },
  },
];

const linkGroups = [
  {
    title: "AI detectors explained",
    links: [
      { to: "/detector/turnitin", label: "Turnitin AI detection" },
      { to: "/detector/gptzero", label: "GPTZero accuracy" },
      { to: "/detector/originality", label: "Originality.ai review" },
      { to: "/detector/copyleaks", label: "Copyleaks AI detection" },
      { to: "/detector/winston", label: "Winston AI detection" },
      { to: "/blog/how-ai-detectors-work", label: "How AI detectors work" },
    ],
  },
  {
    title: "Humanize by model",
    links: [
      { to: "/blog/humanize-chatgpt-text", label: "Humanize ChatGPT text" },
      { to: "/blog/humanize-claude-output", label: "Humanize Claude output" },
      { to: "/blog/humanize-gemini-output", label: "Humanize Gemini output" },
      { to: "/blog/humanize-gpt5-output", label: "Humanize GPT-5 output" },
      { to: "/blog/humanize-deepseek-output", label: "Humanize DeepSeek output" },
      { to: "/blog/claude-watermark-remover", label: "Claude watermark guide" },
    ],
  },
  {
    title: "Compare the alternatives",
    links: [
      { to: "/vs/stealthwriter", label: "vs StealthWriter" },
      { to: "/vs/phrasly", label: "vs Phrasly" },
      { to: "/vs/bypassgpt", label: "vs BypassGPT" },
      { to: "/vs/humbot", label: "vs Humbot" },
      { to: "/compare-ai-humanizers", label: "All humanizers compared" },
      { to: "/vs-undetectable-ai", label: "vs Undetectable AI" },
    ],
  },
  {
    title: "Who it is for",
    links: [
      { to: "/ai-humanizer-for-students", label: "Students" },
      { to: "/ai-humanizer-for-writers", label: "Writers and freelancers" },
      { to: "/academic-ai-writing-tool", label: "Academic writing" },
      { to: "/api", label: "Developers and API" },
      { to: "/pricing", label: "Pricing and limits" },
      { to: "/case-studies", label: "Case studies" },
    ],
  },
];

export const HomeIntentContent = () => (
  <section className="py-16 md:py-24" aria-labelledby="home-intent-heading">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
        <h2 id="home-intent-heading" className="text-3xl md:text-5xl font-bold">
          Free AI text tools that do the whole job
        </h2>
        <p className="text-lg text-muted-foreground">
          One workspace for rewriting AI drafts, checking them against the detectors your
          school or client actually uses, and shipping copy that reads like you wrote it.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
        {intents.map(({ icon: Icon, heading, body, link }) => (
          <Card key={heading} className="p-6 md:p-8 space-y-4 border-border/60 bg-card/40">
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20">
                <Icon className="w-5 h-5 text-primary" />
              </span>
              <h3 className="text-xl font-bold">{heading}</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">{body}</p>
            <Link
              to={link.to}
              className="inline-flex items-center gap-1 font-semibold text-secondary hover:underline"
            >
              {link.label}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Card>
        ))}
      </div>

      <div className="max-w-5xl mx-auto mt-16">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Explore every detector, model and alternative
        </h3>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {linkGroups.map((group) => (
            <nav key={group.title} aria-label={group.title} className="space-y-3">
              <h4 className="font-bold text-foreground">{group.title}</h4>
              <ul className="space-y-2">
                {group.links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="text-sm text-muted-foreground hover:text-secondary transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      <div className="max-w-3xl mx-auto text-center mt-14">
        <a
          href="https://app.aifreetextpro.com/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackCTAClick("home_intent_module", "app_humanizer")}
        >
          <Button
            size="lg"
            className="text-base md:text-lg px-8 py-6 font-bold bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-xl group"
          >
            Humanize 1,000 words free
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </a>
      </div>
    </div>
  </section>
);

export default HomeIntentContent;
