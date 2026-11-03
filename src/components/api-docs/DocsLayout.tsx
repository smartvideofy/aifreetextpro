import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { DEVELOPER_CONSOLE } from "@/lib/developerApi";
import { DOC_GROUPS, DOC_PAGES } from "./docsNav";

const ORIGIN = "https://aifreetextpro.com";

interface DocsLayoutProps {
  /** The <title>: specific, with the main search term first. */
  metaTitle: string;
  description: string;
  /** The page's H1. */
  title: string;
  /** One-line summary under the H1. */
  lead?: React.ReactNode;
  children: React.ReactNode;
}

/** Sidebar, breadcrumbs, previous/next links and SEO tags for every docs page. */
export function DocsLayout({ metaTitle, description, title, lead, children }: DocsLayoutProps) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const path = pathname.replace(/\/+$/, "") || "/";
  const index = DOC_PAGES.findIndex((p) => p.path === path);
  const page = DOC_PAGES[index];
  const prev = index > 0 ? DOC_PAGES[index - 1] : null;
  const next = index >= 0 && index < DOC_PAGES.length - 1 ? DOC_PAGES[index + 1] : null;
  const url = `${ORIGIN}${path}`;

  const crumbs = [{ label: "Home", href: "/" }, { label: "API", href: "/api" }, { label: "Docs", href: "/api/docs" }];
  if (path !== "/api/docs" && page) crumbs.push({ label: page.label, href: path });

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={description} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "headline": title,
            "description": description,
            "url": url,
            "inLanguage": "en",
            "isPartOf": { "@type": "WebSite", "name": "AI Free Text Pro", "url": ORIGIN },
            "publisher": { "@type": "Organization", "name": "AI Free Text Pro", "url": ORIGIN },
          })}
        </script>
      </Helmet>

      <Navbar />
      <main className="min-h-screen">
        <div className="container mx-auto px-4 pt-4">
          <Breadcrumbs items={crumbs} />
        </div>

        <div className="container mx-auto flex gap-10 px-4 py-8 lg:py-12">
          <aside className="hidden w-56 shrink-0 lg:block" aria-label="API documentation">
            <nav className="sticky top-24 space-y-5">
              {DOC_GROUPS.map((group) => (
                <div key={group}>
                  <p className="mb-1.5 px-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">{group}</p>
                  {DOC_PAGES.filter((p) => p.group === group).map((p) => (
                    <Link
                      key={p.path}
                      to={p.path}
                      className={cn(
                        "block rounded-md px-3 py-1.5 text-sm transition-colors",
                        p.path === path ? "bg-primary/10 font-medium text-primary" : "text-muted-foreground hover:bg-muted hover:text-foreground",
                      )}
                    >
                      {p.label}
                    </Link>
                  ))}
                </div>
              ))}
              <div className="space-y-2 border-t border-border pt-4">
                <a href={`${DEVELOPER_CONSOLE}/signup`} className="block">
                  <Button size="sm" className="w-full bg-gradient-to-r from-primary to-secondary">Get an API key</Button>
                </a>
                <a href={`${DEVELOPER_CONSOLE}/playground`} className="block">
                  <Button size="sm" variant="outline" className="w-full">Open the Playground</Button>
                </a>
              </div>
            </nav>
          </aside>

          <article className="min-w-0 max-w-3xl flex-1">
            {/* Page picker on small screens, where the sidebar is hidden. */}
            <label className="mb-6 block lg:hidden">
              <span className="mb-1 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">API docs</span>
              <select
                value={path}
                onChange={(e) => navigate(e.target.value)}
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
              >
                {DOC_GROUPS.map((group) => (
                  <optgroup key={group} label={group}>
                    {DOC_PAGES.filter((p) => p.group === group).map((p) => <option key={p.path} value={p.path}>{p.label}</option>)}
                  </optgroup>
                ))}
              </select>
            </label>

            <header className="mb-8">
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h1>
              {lead && <p className="mt-3 text-lg leading-relaxed text-muted-foreground">{lead}</p>}
            </header>

            <div className="space-y-5">{children}</div>

            <nav className="mt-12 grid gap-3 border-t border-border pt-6 sm:grid-cols-2" aria-label="Previous and next page">
              {prev ? (
                <Link to={prev.path} className="rounded-lg border border-border p-4 transition-colors hover:border-primary/40">
                  <span className="flex items-center gap-1 text-xs text-muted-foreground"><ArrowLeft className="h-3 w-3" /> Previous</span>
                  <span className="mt-1 block font-medium">{prev.label}</span>
                </Link>
              ) : <span />}
              {next && (
                <Link to={next.path} className="rounded-lg border border-border p-4 text-right transition-colors hover:border-primary/40">
                  <span className="flex items-center justify-end gap-1 text-xs text-muted-foreground">Next <ArrowRight className="h-3 w-3" /></span>
                  <span className="mt-1 block font-medium">{next.label}</span>
                </Link>
              )}
            </nav>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
