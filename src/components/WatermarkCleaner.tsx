import { useState } from "react";
import { ArrowRight, Check, Copy, Eraser, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { cleanText, type CleanResult } from "@/lib/invisibleChars";
import { trackEvent } from "@/lib/analytics";

const HUMANIZER = "https://app.aifreetextpro.com/humanizer?utm_source=site&utm_medium=watermark_cleaner&utm_campaign=ai_watermark_remover";

/** Scans pasted AI text for hidden characters and returns a clean copy. */
export function WatermarkCleaner() {
  const [text, setText] = useState("");
  const [dashes, setDashes] = useState(false);
  const [quotes, setQuotes] = useState(false);
  const [result, setResult] = useState<CleanResult | null>(null);
  const [copied, setCopied] = useState(false);

  const run = () => {
    const r = cleanText(text, { dashes, quotes });
    setResult(r);
    setCopied(false);
    trackEvent("watermark_clean", "Watermark_Cleaner", r.removed > 0 ? "found" : "clean", r.removed);
  };

  const copy = async () => {
    if (!result) return;
    try {
      await navigator.clipboard.writeText(result.text);
      setCopied(true);
    } catch {
      /* clipboard blocked: the text stays selectable below */
    }
  };

  return (
    <div className="not-prose rounded-2xl border border-primary/20 bg-card p-5 shadow-lg md:p-7">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <h2 className="flex items-center gap-2 text-xl font-bold md:text-2xl">
          <Eraser className="h-6 w-6 text-primary" aria-hidden /> Remove hidden AI characters
        </h2>
        <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Lock className="h-3.5 w-3.5" aria-hidden /> Free, no sign-up, no word limit. Runs in your browser.
        </p>
      </div>
      <label htmlFor="watermark-input" className="sr-only">
        Text to clean
      </label>
      <Textarea
        id="watermark-input"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          setResult(null);
        }}
        placeholder="Paste text copied from ChatGPT, Claude, Gemini, DeepSeek or any AI tool."
        className="min-h-[180px] text-base"
      />
      <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
        <label className="flex cursor-pointer items-center gap-2">
          <Checkbox checked={dashes} onCheckedChange={(v) => setDashes(v === true)} /> Replace em dashes
        </label>
        <label className="flex cursor-pointer items-center gap-2">
          <Checkbox checked={quotes} onCheckedChange={(v) => setQuotes(v === true)} /> Straighten curly quotes
        </label>
        <Button size="lg" className="ml-auto" onClick={run} disabled={!text.trim()}>
          Scan and clean <ArrowRight className="ml-1 h-4 w-4" aria-hidden />
        </Button>
      </div>

      {result && (
        <div className="mt-6 space-y-4" aria-live="polite">
          {result.findings.length === 0 ? (
            <p className="rounded-xl bg-emerald-500/10 p-4 text-sm text-emerald-700 dark:text-emerald-400">
              No hidden characters found. If you still need to lower an AI score, the watermark (if any) is in the
              wording itself: rewrite it with the humanizer below.
            </p>
          ) : (
            <div className="rounded-xl border p-4">
              <p className="mb-3 font-semibold">
                Removed {result.removed} hidden character{result.removed === 1 ? "" : "s"}
                {result.dashes ? `, ${result.dashes} em dash${result.dashes === 1 ? "" : "es"}` : ""}
                {result.quotes ? `, ${result.quotes} curly quote${result.quotes === 1 ? "" : "s"}` : ""}
              </p>
              <ul className="grid gap-1.5 text-sm sm:grid-cols-2">
                {result.findings.map((f) => (
                  <li key={f.code} className="flex justify-between gap-3 rounded-lg bg-muted px-3 py-1.5">
                    <span>
                      {f.name} <span className="text-muted-foreground">{f.code}</span>
                    </span>
                    <span className="font-medium">×{f.count}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <p className="text-sm font-medium">Clean text</p>
              <Button variant="outline" size="sm" onClick={copy}>
                {copied ? <Check className="mr-1 h-4 w-4" /> : <Copy className="mr-1 h-4 w-4" />}
                {copied ? "Copied" : "Copy"}
              </Button>
            </div>
            <Textarea readOnly value={result.text} className="min-h-[140px] bg-muted/40 text-base" />
          </div>
          <a
            href={HUMANIZER}
            className="flex items-center justify-between rounded-xl bg-primary px-4 py-3 font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Rewrite it to remove statistical watermarks too <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
      )}
    </div>
  );
}

export default WatermarkCleaner;
