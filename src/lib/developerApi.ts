// Facts about the developer API shown on /api, /api/docs and /api/mcp.
// What is actually charged lives in the app's backend
// (supabase/functions/_shared/api-tokens.ts); keep these in step with it.

/** The developer console: sign-up, API keys, Playground, usage and billing. */
export const DEVELOPER_CONSOLE = "https://developer.aifreetextpro.com";
export const API_BASE_URL = "https://api.aifreetextpro.com/v1";
export const MCP_URL = "https://uvprbzcxajreafjwbvrs.supabase.co/functions/v1/mcp";

export interface TokenPack {
  name: string;
  priceUsd: number;
  tokens: number;
  popular?: boolean;
}

export const TOKEN_PACKS: TokenPack[] = [
  { name: "Starter", priceUsd: 9.99, tokens: 15_000 },
  { name: "Builder", priceUsd: 24.99, tokens: 45_000, popular: true },
  { name: "Growth", priceUsd: 49.99, tokens: 100_000 },
  { name: "Scale", priceUsd: 99.99, tokens: 225_000 },
];

export const FREE_TRIAL_TOKENS = 500;
export const DETECT_WORDS_PER_TOKEN = 5;
export const MAX_HUMANIZE_WORDS = 5000;
export const MAX_DETECT_CHARACTERS = 50_000;

export const formatNumber = (n: number) => n.toLocaleString("en-US");
export const pricePer1kWords = (pack: TokenPack) => `$${((pack.priceUsd / pack.tokens) * 1000).toFixed(2)}`;
