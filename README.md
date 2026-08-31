# Mimi Creates — Website

The official website for [Mimi Creates](https://mimicreatesid.etsy.com) —
printable activities, busy books, worksheets & coloring books for little
learners. Built with [Astro](https://astro.build) as a fully static site:
fast, SEO-friendly, and free to host almost anywhere.

**Learn · Play · Create** 🐥

## What's inside

| Page | What it does |
| --- | --- |
| `/` | Home — hero, categories, featured products, latest blog posts |
| `/shop/` | All product listings with category filters and **Buy Now** buttons that open the Etsy listing |
| `/blog/` | SEO-ready blog (per-post structured data, RSS, sitemap) |
| `/custom-art/` | Custom art request form — submissions are emailed to the artist |
| `/about/` | The artist's story |

Built-in SEO & "AI SEO": meta/OpenGraph/Twitter tags, canonical URLs,
JSON-LD structured data (OnlineStore, Product list, BlogPosting, FAQPage,
breadcrumbs), `sitemap-index.xml`, `rss.xml`, a crawler-welcoming
`robots.txt` (Googlebot *and* GPTBot/ClaudeBot/PerplexityBot etc.), and an
auto-generated [`/llms.txt`](https://llmstxt.org/) site guide for AI
assistants.

## Quick start

```bash
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## ✅ Set-up checklist (do these once)

### 1. Put in the real Etsy products

Edit **`src/data/products.ts`**. The products currently in there are
placeholders. For each real listing:

1. Copy the Etsy listing URL into `etsyUrl` — the **Buy Now** button opens
   exactly this link.
2. Copy the listing title, price, and a short description.
3. Save the listing's main photo into `public/images/products/` and point
   `image` at it (e.g. `/images/products/my-busy-book.jpg`).

Add or remove as many products as you like — the shop grid, category
filters, home page, structured data, and `llms.txt` all update
automatically on the next build.

### 2. Activate the Custom Art Request form (~2 minutes, free)

The form uses [Web3Forms](https://web3forms.com) to deliver submissions by
email — no server needed.

1. Go to <https://web3forms.com>, enter the email address that should
   **receive** the requests (the artist's email), and click *Create Access
   Key*.
2. The key arrives by email. Paste it into `WEB3FORMS_ACCESS_KEY` in
   **`src/config.ts`**.
3. Also set `CONTACT_EMAIL` in the same file (shown in the footer).

Until the key is set, the form shows a small "not activated yet" warning.

### 3. Site URL (only if you add a custom domain)

The site is deployed at **<https://mimicreates.netlify.app>** and
`SITE_URL` in `src/config.ts` already points there. If you later connect a
custom domain (e.g. mimicreates.com) in Netlify, update `SITE_URL` to
match — it feeds canonical URLs, the sitemap, RSS, and structured data, so
it matters for SEO.

### 4. (Optional) Use the original branding images

The logo, duckling mascot, favicon, and product thumbnails are all
recreated as SVG/code so the site works out of the box. To use the original
artwork instead, drop the PNGs into `public/images/` and swap them in:

- Logo → `src/components/Logo.astro`
- Mascot → `src/components/DuckMascot.astro`
- Social share image → replace `public/images/og-default.png` (1200×630)
- Favicon → `public/favicon.svg`

## ✍️ Writing a blog post

Create a new `.md` file in **`src/content/blog/`** (copy an existing post).
The frontmatter looks like this:

```markdown
---
title: "My New Post Title"
description: "One or two sentences — this becomes the meta description and matters a lot for SEO."
pubDate: 2026-09-15
tags: ["activities", "printables"]
draft: false          # set true to keep it unpublished
---

Write the post here in Markdown…
```

That's it — the blog index, home page, RSS feed, sitemap, `llms.txt`, and
all structured data pick it up automatically. Posts with `draft: true`
stay hidden.

**SEO tips baked into the setup:** write a keyword-rich `title`, a
~150-character `description`, use `##` headings, and link to `/shop/` and
`/custom-art/` where it feels natural.

## 🚀 Deployment

The site is live on Netlify: **<https://mimicreates.netlify.app>**
(Netlify project `mimicreates`, config in `netlify.toml` — build command
`npm run build`, publish directory `dist`).

**Auto-deploy is on**: the GitHub repo is linked to the Netlify project,
so every push to the production branch is built and published
automatically (build settings come from `netlify.toml`). Watch builds at
the [Netlify deploys page](https://app.netlify.com/projects/mimicreates/deploys).

## Project layout

```
src/
  config.ts            ← ⭐ site settings: URLs, email, form key
  data/products.ts     ← ⭐ product listings (Buy Now → Etsy)
  content/blog/        ← ⭐ blog posts (one .md file each)
  components/          ← header, footer, logo, mascot, product card
  layouts/             ← BaseLayout (all SEO meta + JSON-LD)
  pages/               ← the actual pages & robots/llms/rss endpoints
  styles/global.css    ← brand colors & design tokens
public/
  images/              ← product photos, share image
```
