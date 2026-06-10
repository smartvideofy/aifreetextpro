import { Helmet } from "react-helmet-async";

interface ItemListSchemaProps {
  name: string;
  items: { name: string; url: string }[];
  baseUrl?: string;
}

/**
 * Emits an ItemList JSON-LD block to help crawlers (Googlebot, GPTBot, PerplexityBot)
 * see every link on hub pages as a structured collection. Improves crawl reach
 * for spoke pages and surfaces them in AI search results.
 */
export const ItemListSchema = ({ name, items, baseUrl = "https://aifreetextpro.com" }: ItemListSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": name,
    "numberOfItems": items.length,
    "itemListElement": items.map((it, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": it.name,
      "url": it.url.startsWith("http") ? it.url : `${baseUrl}${it.url}`,
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default ItemListSchema;
