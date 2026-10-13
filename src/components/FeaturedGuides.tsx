import { Link } from "react-router-dom";

/**
 * Sitewide "featured guides" link block. Surfaces the least internally linked
 * blog posts from high-authority pages so Google recrawls and indexes them.
 */
const guides = [
  { href: "/blog/ai-humanizer-for-indian-students", title: "AI Humanizer for Indian Students" },
  { href: "/blog/ai-detector-for-students-2026", title: "AI Detector for Students" },
  { href: "/blog/ai-writing-checker", title: "AI Writing Checker Guide" },
  { href: "/blog/free-ai-detector", title: "Free AI Detector Guide" },
  { href: "/blog/paraphrasing-tool", title: "Best Paraphrasing Tool" },
  { href: "/blog/ai-text-converter", title: "AI Text Converter" },
  { href: "/blog/check-my-essay-for-ai", title: "Check My Essay for AI" },
  { href: "/blog/ai-humanizer-for-essays", title: "AI Humanizer for Essays" },
  { href: "/blog/ai-content-google-ai-overviews", title: "AI Content and Google AI Overviews" },
  { href: "/blog/ai-detector-employers", title: "AI Detectors for Employers" },
  { href: "/blog/ai-homework-helper-undetectable", title: "AI Homework Helper" },
  { href: "/blog/ai-legal-writing-law-school", title: "AI Legal Writing for Law School" },
  { href: "/blog/ai-press-releases", title: "AI Press Releases" },
  { href: "/blog/ai-twitter-thread-generator", title: "AI Twitter Thread Generator" },
  { href: "/blog/ai-writing-non-native-english-speakers", title: "AI Writing for Non-Native Speakers" },
  { href: "/blog/ai-writing-nursing-healthcare-students", title: "AI Writing for Nursing Students" },
  { href: "/blog/ai-writing-upwork-fiverr-freelancers", title: "AI Writing on Upwork and Fiverr" },
  { href: "/blog/chatgpt-plus-detection", title: "Is ChatGPT Plus Detectable?" },
  { href: "/blog/humanize-deepseek-output", title: "Humanize DeepSeek Output" },
  { href: "/blog/category/humanizer", title: "All Humanizer Guides" },
  { href: "/blog/category/detection", title: "All Detection Guides" },
  { href: "/blog/category/comparison", title: "All Tool Comparisons" },
  { href: "/blog/category/bypass", title: "All Detector Guides" },
  { href: "/blog/category/use-cases", title: "All Use-Case Guides" },
];

export const FeaturedGuides = ({ currentPage }: { currentPage?: string }) => (
  <section className="not-prose my-12 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-secondary/10 p-6 md:p-8">
    <h2 className="text-2xl font-bold mb-2">Featured Guides</h2>
    <p className="text-muted-foreground mb-6">In-depth guides readers ask about most, by use case and tool.</p>
    <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
      {guides.filter((g) => g.href !== currentPage).map((g) => (
        <li key={g.href}>
          <Link to={g.href} className="text-primary hover:underline font-medium">{g.title}</Link>
        </li>
      ))}
    </ul>
  </section>
);

export default FeaturedGuides;
