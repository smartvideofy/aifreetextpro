import { Link, Navigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SEOHead } from "@/components/SEOHead";
import { AuthorSchema } from "@/components/AuthorSchema";
import { QuickAnswer } from "@/components/QuickAnswer";
import { FAQSection } from "@/components/FAQSection";
import InternalLinks from "@/components/InternalLinks";
import { AISignalChecker } from "@/components/AISignalChecker";
import { modelGuides } from "@/data/models";

const HAND_WRITTEN = [
  { name: "ChatGPT", href: "/blog/humanize-chatgpt-text" },
  { name: "Claude", href: "/blog/humanize-claude-output" },
  { name: "Gemini", href: "/blog/humanize-gemini-output" },
  { name: "GPT-5", href: "/blog/humanize-gpt5-output" },
  { name: "DeepSeek", href: "/blog/humanize-deepseek-output" },
];

/** /blog/humanize-{slug}-output for assistants without a hand-written guide. */
const HumanizeModelTemplate = ({ slug }: { slug: string }) => {
  const m = modelGuides[slug];
  if (!m) return <Navigate to="/blog/humanize-chatgpt-text" replace />;

  const path = `/blog/humanize-${m.slug}-output`;
  const url = `https://aifreetextpro.com${path}`;
  const title = `How to Humanize ${m.short} Output (2026): Make ${m.short} Text Sound Human`;
  const app = `https://app.aifreetextpro.com/humanizer?utm_source=blog&utm_medium=organic&utm_campaign=humanize_${m.slug}`;
  const guides = [
    ...HAND_WRITTEN,
    ...Object.values(modelGuides)
      .filter((g) => g.slug !== m.slug)
      .map((g) => ({ name: g.short, href: `/blog/humanize-${g.slug}-output` })),
  ];

  return (
    <>
      <SEOHead
        title={title}
        description={m.metaDescription}
        canonicalUrl={path}
        keywords={`humanize ${m.short.toLowerCase()} text, ${m.short.toLowerCase()} ai detection, can turnitin detect ${m.short.toLowerCase()}, make ${m.short.toLowerCase()} undetectable, ${m.short.toLowerCase()} humanizer`}
        ogType="article"
        publishedTime="2026-10-24"
        modifiedTime="2026-10-24"
      />
      <AuthorSchema headline={title} description={m.metaDescription} articleUrl={url} datePublished="2026-10-24" dateModified="2026-10-24" />

      <Navbar />
      <main className="min-h-screen pb-16 pt-24">
        <div className="container mx-auto max-w-4xl px-4">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: `Humanize ${m.short} output` }]} />

          <article className="prose prose-lg max-w-none dark:prose-invert">
            <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">How to Humanize {m.name} Output</h1>
            <QuickAnswer
              question={`How do you make ${m.short} text sound human?`}
              answer={`Remove ${m.short}'s formatting habits, vary sentence length sharply, replace generic claims with details only you know, then run the draft through a humanizer that rebuilds sentence structure. Check the result with an AI detector before you use it.`}
            />
            <p className="text-xl text-muted-foreground">{m.intro}</p>

            <h2>Why {m.short} text gets flagged as AI</h2>
            <p>
              AI detectors don't look for a model's name. They measure how predictable the words are and how evenly the
              sentences are paced, the two properties every large language model shares. {m.maker}'s model is no
              exception, and {m.short} adds habits of its own that make a draft easy to spot:
            </p>
            <ul>
              {m.tells.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </article>

          <AISignalChecker source={`humanize_${m.slug}`} title={`Check your ${m.short} text for AI signals`} className="my-10" />

          <article className="prose prose-lg max-w-none dark:prose-invert">
            <h2>How to humanize {m.short} output in 5 steps</h2>
            <ol>
              <li>
                <strong>Check the draft first.</strong> Paste it into the checker above and note which signals fire.
              </li>
              <li>
                <strong>Fix the {m.short}-specific habits.</strong>
                <ul>
                  {m.fixes.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </li>
              <li>
                <strong>Vary the rhythm.</strong> Follow a long sentence with a four-word one. Merge two short ones. Start
                a sentence with "And" or "But" where it reads naturally.
              </li>
              <li>
                <strong>Rebuild the structure with a humanizer.</strong> The{" "}
                <a href={app}>AI Free Text Pro humanizer</a> rewrites sentence order and phrasing rather than swapping
                synonyms, which is what changes an AI score.
              </li>
              <li>
                <strong>Add yourself, then re-check.</strong> One example, figure or opinion per paragraph that only you
                could write. Then run the <Link to="/ai-checker">free AI detector</Link> again.
              </li>
            </ol>

            <h2>Humanizing vs paraphrasing {m.short} text</h2>
            <p>
              A paraphraser swaps words but keeps each sentence's shape, so {m.short}'s rhythm survives and detectors
              still flag it. A humanizer changes sentence length, order and structure. If you only need to reword a
              line, an <Link to="/ai-paraphraser">AI paraphraser</Link> is enough; if the goal is text that reads as
              yours, humanize it. More on the difference in{" "}
              <Link to="/blog/paraphrasing-vs-humanizing">paraphrasing vs humanizing</Link>.
            </p>

            <div className="not-prose my-12 rounded-xl border border-primary/20 bg-primary/5 p-8 text-center">
              <h2 className="mb-3 text-2xl font-bold">Humanize your {m.short} draft free</h2>
              <p className="mb-6 text-muted-foreground">250 free words a month, five languages, detector in the same place. No card.</p>
              <a href={app} className="inline-flex items-center rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90">
                Humanize {m.short} text <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>

            <h2>Guides for other AI models</h2>
            <p>
              {guides.map((g, i) => (
                <span key={g.href}>
                  <Link to={g.href}>Humanize {g.name}</Link>
                  {i < guides.length - 1 ? " · " : ""}
                </span>
              ))}
            </p>

            <FAQSection faqs={m.faq.map((f) => ({ question: f.q, answer: f.a }))} title={`${m.short} humanizer FAQ`} />
          </article>

          <InternalLinks currentPage={path} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HumanizeModelTemplate;
