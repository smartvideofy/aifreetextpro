import { useMemo, useState } from "react";
import { ArrowRight, Lock, ScanSearch, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { analyzeText, MIN_WORDS, type SignalReport } from "@/lib/textSignals";
import { trackAICheckerComplete, trackAICheckerSample, trackAICheckerStart } from "@/lib/analytics";
import { cn } from "@/lib/utils";

const AI_SAMPLE =
  "In today's fast-paced digital landscape, artificial intelligence plays a crucial role in shaping how businesses operate. Organizations are leveraging AI to streamline processes, enhance decision-making, and unlock new opportunities for growth. Moreover, AI-powered tools enable teams to analyze vast amounts of data with unprecedented speed and accuracy. Furthermore, the integration of machine learning into everyday workflows fosters innovation and drives efficiency. However, it is important to note that AI adoption also presents challenges, including ethical considerations and the need for robust data governance. Ultimately, companies that embrace AI thoughtfully will be well-positioned to thrive in an ever-evolving marketplace.";

const HUMAN_SAMPLE =
  "The bus was late again. I stood at the corner of 5th and Main for twenty minutes, watching my breath, wondering whether I'd make the 8:15 lecture. I didn't. Professor Okafor had already started on thermodynamics when I slid into the back row, and the only seat left was next to a guy eating cereal out of a mug. He offered me some. I said no, then regretted it, because I hadn't eaten since lunch the day before. That's the semester in a nutshell, really: late, hungry, and slightly confused about entropy.";

const VERDICT: Record<Exclude<SignalReport["verdict"], "too-short">, { title: string; body: string; tone: string }> = {
  "ai-leaning": {
    title: "Reads like an unedited AI draft",
    body: "Several strong AI-writing patterns. Run the full detector for a model-based score, or rewrite it with the humanizer.",
    tone: "text-destructive",
  },
  mixed: {
    title: "Mixed signals",
    body: "Some AI-style patterns, some human ones. Typical of AI drafts that were edited, or formal human writing.",
    tone: "text-amber-600 dark:text-amber-400",
  },
  "human-leaning": {
    title: "Reads like human writing",
    body: "Few AI-writing patterns. Varied rhythm and concrete detail usually point to a person.",
    tone: "text-emerald-600 dark:text-emerald-400",
  },
};

const app = (path: string, campaign: string) =>
  `https://app.aifreetextpro.com${path}?utm_source=site&utm_medium=signal_checker&utm_campaign=${campaign}`;

interface AISignalCheckerProps {
  /** Where the checker sits, for the app links' utm_campaign. */
  source: string;
  title?: string;
  className?: string;
}

/**
 * Free writing-signal check that runs in the browser: no account, no word
 * limit. Points to the app's detector for a model-based AI probability.
 */
export function AISignalChecker({ source, title = "Check text for AI writing signals", className }: AISignalCheckerProps) {
  const [text, setText] = useState("");
  const [report, setReport] = useState<SignalReport | null>(null);
  const words = useMemo(() => (text.match(/[A-Za-z0-9][A-Za-z0-9'’-]*/g) ?? []).length, [text]);

  const run = () => {
    const started = performance.now();
    trackAICheckerStart(words);
    const r = analyzeText(text);
    setReport(r);
    if (r.verdict !== "too-short") trackAICheckerComplete(r.score, (performance.now() - started) / 1000);
  };

  const load = (sample: "ai" | "human") => {
    setText(sample === "ai" ? AI_SAMPLE : HUMAN_SAMPLE);
    setReport(null);
    trackAICheckerSample(sample);
  };

  const verdict = report && report.verdict !== "too-short" ? VERDICT[report.verdict] : null;

  return (
    <div className={cn("not-prose rounded-2xl border border-primary/20 bg-card p-5 shadow-lg md:p-7", className)}>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <h2 className="flex items-center gap-2 text-xl font-bold md:text-2xl">
          <ScanSearch className="h-6 w-6 text-primary" aria-hidden /> {title}
        </h2>
        <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Lock className="h-3.5 w-3.5" aria-hidden /> Free, no sign-up, no word limit. Runs in your browser.
        </p>
      </div>

      <label htmlFor={`signal-${source}`} className="sr-only">
        Text to check
      </label>
      <Textarea
        id={`signal-${source}`}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          setReport(null);
        }}
        placeholder={`Paste at least ${MIN_WORDS} words: an essay, article, email or cover letter.`}
        className="min-h-[180px] text-base"
      />
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <Button size="lg" onClick={run} disabled={words === 0}>
          Check writing signals <ArrowRight className="ml-1 h-4 w-4" aria-hidden />
        </Button>
        <Button variant="ghost" size="sm" onClick={() => load("ai")}>
          Try an AI sample
        </Button>
        <Button variant="ghost" size="sm" onClick={() => load("human")}>
          Try a human sample
        </Button>
        <span className="ml-auto text-xs text-muted-foreground">{words.toLocaleString()} words</span>
      </div>

      {report?.verdict === "too-short" && (
        <p className="mt-5 rounded-xl bg-muted p-4 text-sm">
          Paste at least {MIN_WORDS} words and four sentences. Shorter passages don't carry enough signal for any checker to
          read reliably.
        </p>
      )}

      {report && verdict && (
        <div className="mt-6 space-y-5" aria-live="polite">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className={cn("text-lg font-bold", verdict.tone)}>{verdict.title}</p>
              <p className="max-w-xl text-sm text-muted-foreground">{verdict.body}</p>
            </div>
            <p className="text-right">
              <span className="block text-4xl font-bold">{report.score}</span>
              <span className="text-xs text-muted-foreground">AI-style signal, out of 100</span>
            </p>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-muted">
            <div
              className={cn(
                "h-full rounded-full",
                report.score >= 60 ? "bg-destructive" : report.score >= 35 ? "bg-amber-500" : "bg-emerald-500",
              )}
              style={{ width: `${Math.max(4, report.score)}%` }}
            />
          </div>

          <ul className="divide-y rounded-xl border">
            {report.signals.map((s) => (
              <li key={s.key} className="grid gap-1 p-3 sm:grid-cols-[180px_1fr_80px] sm:items-center sm:gap-4">
                <span className="font-medium">{s.label}</span>
                <span className="text-sm text-muted-foreground">
                  {s.value}. {s.note}
                </span>
                <span className="h-1.5 overflow-hidden rounded-full bg-muted" aria-label={`${Math.round(s.strength * 100)}% AI-like`}>
                  <span
                    className={cn(
                      "block h-full rounded-full",
                      s.strength >= 0.6 ? "bg-destructive" : s.strength >= 0.3 ? "bg-amber-500" : "bg-emerald-500",
                    )}
                    style={{ width: `${Math.max(6, s.strength * 100)}%` }}
                  />
                </span>
              </li>
            ))}
          </ul>

          {report.phrases.length > 0 && (
            <div>
              <p className="mb-2 text-sm font-medium">AI-typical words in your text</p>
              <div className="flex flex-wrap gap-1.5">
                {report.phrases.slice(0, 16).map((p) => (
                  <span key={p.phrase} className="rounded-full bg-destructive/10 px-2.5 py-1 text-xs text-destructive">
                    {p.phrase}
                    {p.count > 1 ? ` ×${p.count}` : ""}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="grid gap-3 sm:grid-cols-2">
            <a
              href={app("/detector", source)}
              className="flex items-center justify-between rounded-xl bg-primary px-4 py-3 font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Get the model-based AI score <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a
              href={app("/humanizer", source)}
              className="flex items-center justify-between rounded-xl border border-primary/30 px-4 py-3 font-semibold text-primary hover:bg-primary/5"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="h-4 w-4" aria-hidden /> Rewrite it to sound human
              </span>
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
          <p className="text-xs text-muted-foreground">
            This check reads writing style: sentence rhythm, stock phrases, concrete detail. It's a quick screen, not proof
            of who wrote the text. The detector in the app scores the text with a trained model (free account, 250 words a
            month).
          </p>
        </div>
      )}
    </div>
  );
}

export default AISignalChecker;
