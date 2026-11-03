// Pages of the API documentation, in reading order. The sidebar, the
// previous/next links and the breadcrumbs all come from this list.

export interface DocPage {
  path: string;
  label: string;
  group: "Get started" | "Endpoints" | "Using the API" | "More";
}

export const DOC_PAGES: DocPage[] = [
  { path: "/api/docs", label: "Overview", group: "Get started" },
  { path: "/api/docs/quickstart", label: "Quickstart", group: "Get started" },
  { path: "/api/docs/authentication", label: "Authentication", group: "Get started" },
  { path: "/api/docs/humanize", label: "POST /v1/humanize", group: "Endpoints" },
  { path: "/api/docs/detect", label: "POST /v1/detect", group: "Endpoints" },
  { path: "/api/docs/errors", label: "Errors", group: "Using the API" },
  { path: "/api/docs/rate-limits", label: "Rate limits and sizes", group: "Using the API" },
  { path: "/api/docs/pricing", label: "Pricing and billing", group: "Using the API" },
  { path: "/api/docs/best-practices", label: "Best practices", group: "Using the API" },
  { path: "/api/docs/examples", label: "Code examples", group: "Using the API" },
  { path: "/api/mcp", label: "MCP for Claude and ChatGPT", group: "More" },
  { path: "/api/docs/changelog", label: "Changelog", group: "More" },
];

export const DOC_GROUPS = ["Get started", "Endpoints", "Using the API", "More"] as const;
