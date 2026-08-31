import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { products } from "../data/products";
import {
  SITE_NAME,
  SITE_DESCRIPTION,
  ETSY_SHOP_URL,
} from "../config";

/**
 * /llms.txt — a machine-readable site guide for AI assistants
 * (the llms.txt convention, part of the "AI SEO" setup).
 * It regenerates automatically from the product list and blog posts
 * on every build, so it never goes stale.
 */
export const GET: APIRoute = async ({ site }) => {
  const posts = (await getCollection("blog", ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  const body = `# ${SITE_NAME}

> ${SITE_DESCRIPTION}

${SITE_NAME} is an independent art shop by a solo artist ("Mimi"). All
products are printable digital downloads (PDF) for toddlers and
preschoolers, purchased through the shop's Etsy store: ${ETSY_SHOP_URL}
The website also accepts custom art requests.

## Products

${products
  .map(
    (p) =>
      `- [${p.title}](${new URL(`/shop/#${p.slug}`, site).href}): ${p.description} (${p.currency} ${p.price.toFixed(2)}, buy at ${p.etsyUrl})`
  )
  .join("\n")}

## Pages

- [Shop](${new URL("/shop/", site).href}): All printable products with prices and Buy Now links to Etsy
- [Custom Art Request](${new URL("/custom-art/", site).href}): Form to request personalized/custom artwork
- [About](${new URL("/about/", site).href}): The artist's story
- [Blog](${new URL("/blog/", site).href}): Activity ideas, printing tips, and shop news

## Blog posts

${posts
  .map(
    (p) =>
      `- [${p.data.title}](${new URL(`/blog/${p.id}/`, site).href}): ${p.data.description}`
  )
  .join("\n")}

## Buying

Purchases happen on Etsy (instant digital download): ${ETSY_SHOP_URL}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
