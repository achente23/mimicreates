import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { AUTHOR_NAME } from "./config";

/**
 * The blog lives in src/content/blog — one Markdown file per post.
 * To write a new post, copy an existing file and edit the
 * frontmatter (the bit between the --- lines) and the body.
 * Set `draft: true` to keep a post unpublished.
 */
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default(AUTHOR_NAME),
    tags: z.array(z.string()).default([]),
    /** Optional hero image path inside /public, e.g. /images/blog/my-post.jpg */
    heroImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
