/**
 * ─────────────────────────────────────────────────────────────────
 *  PRODUCT LISTINGS
 *  ⚠️ THESE ARE PLACEHOLDERS — replace them with the real listings
 *  from https://mimicreatesid.etsy.com
 *
 *  For each product:
 *   1. Open the listing on Etsy and copy its URL into `etsyUrl`
 *      (that's where the "Buy Now" button sends visitors).
 *   2. Copy the exact listing title into `title` and price into
 *      `price` (+ set `currency` if not USD).
 *   3. Save the listing's main photo into /public/images/products/
 *      (e.g. abc-busy-book.jpg) and point `image` at it. The
 *      colorful SVGs currently used are just stand-ins.
 *   4. Write a short `description` (1–2 sentences) and `alt` text
 *      describing the photo — both help SEO.
 *
 *  Add as many products as you like — the shop page, category
 *  filters, and structured data all update automatically.
 * ─────────────────────────────────────────────────────────────────
 */

export type Category =
  | "Busy Books"
  | "Worksheets"
  | "Coloring Pages"
  | "Flashcards";

export interface Product {
  /** Unique id used for anchors — lowercase-with-dashes */
  slug: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  category: Category;
  /** Path to the product photo inside /public */
  image: string;
  /** Alt text for the photo (describe what's in the picture) */
  alt: string;
  /** Full Etsy listing URL — the Buy Now button opens this */
  etsyUrl: string;
  /** Featured products appear on the home page */
  featured?: boolean;
  /** Optional ribbon on the card, e.g. "Bestseller" or "New" */
  badge?: string;
}

export const CATEGORIES: Category[] = [
  "Busy Books",
  "Worksheets",
  "Coloring Pages",
  "Flashcards",
];

export const products: Product[] = [
  {
    slug: "toddler-busy-book-first-words",
    title: "Toddler Busy Book — My First Words (Printable, Ages 2–4)",
    description:
      "A 30-page printable busy book that keeps little hands busy while they learn first words, colors, and shapes.",
    price: 5.99,
    currency: "USD",
    category: "Busy Books",
    image: "/images/products/busy-book-1.svg",
    alt: "Printable toddler busy book cover with colorful first-words activities",
    etsyUrl: "https://mimicreatesid.etsy.com", // TODO: paste the real listing URL
    featured: true,
    badge: "Bestseller",
  },
  {
    slug: "animals-busy-book",
    title: "Animal Friends Busy Book — Matching & Sorting (Printable)",
    description:
      "Cut-and-play animal matching, shadow sorting, and pattern pages — a screen-free quiet-time favorite.",
    price: 5.49,
    currency: "USD",
    category: "Busy Books",
    image: "/images/products/busy-book-2.svg",
    alt: "Printable animal-themed busy book with matching and sorting activities",
    etsyUrl: "https://mimicreatesid.etsy.com", // TODO: paste the real listing URL
    featured: true,
  },
  {
    slug: "alphabet-tracing-worksheets",
    title: "Alphabet Tracing Worksheets A–Z (Printable, Preschool)",
    description:
      "26 uppercase & lowercase letter tracing pages with picture cues — perfect first handwriting practice.",
    price: 3.99,
    currency: "USD",
    category: "Worksheets",
    image: "/images/products/worksheets-1.svg",
    alt: "Alphabet tracing worksheet pages showing dotted letters to trace",
    etsyUrl: "https://mimicreatesid.etsy.com", // TODO: paste the real listing URL
    featured: true,
  },
  {
    slug: "numbers-counting-worksheets",
    title: "Numbers 1–20 Counting Worksheets (Printable Math Practice)",
    description:
      "Count, color, and circle! Playful number-recognition and counting practice for preschool and kindergarten.",
    price: 3.99,
    currency: "USD",
    category: "Worksheets",
    image: "/images/products/worksheets-2.svg",
    alt: "Counting worksheets with numbers and objects to count and color",
    etsyUrl: "https://mimicreatesid.etsy.com", // TODO: paste the real listing URL
  },
  {
    slug: "cute-animals-coloring-book",
    title: "Cute Animals Coloring Book — 25 Pages (Printable PDF)",
    description:
      "25 hand-drawn kawaii animal coloring pages with thick, toddler-friendly outlines. Print again and again!",
    price: 4.49,
    currency: "USD",
    category: "Coloring Pages",
    image: "/images/products/coloring-1.svg",
    alt: "Coloring book pages featuring cute hand-drawn animals with bold outlines",
    etsyUrl: "https://mimicreatesid.etsy.com", // TODO: paste the real listing URL
    featured: true,
    badge: "New",
  },
  {
    slug: "seasons-coloring-pages",
    title: "Four Seasons Coloring Pages Bundle (Printable PDF)",
    description:
      "Spring, summer, autumn, and winter scenes to color — a lovely way to talk about the seasons together.",
    price: 4.49,
    currency: "USD",
    category: "Coloring Pages",
    image: "/images/products/coloring-2.svg",
    alt: "Seasonal coloring pages showing spring, summer, autumn and winter scenes",
    etsyUrl: "https://mimicreatesid.etsy.com", // TODO: paste the real listing URL
  },
  {
    slug: "first-words-flashcards",
    title: "First Words Flashcards — 40 Cards (Printable, Montessori)",
    description:
      "40 illustrated word cards in a soft pastel palette — ideal for early vocabulary and quiet play.",
    price: 3.49,
    currency: "USD",
    category: "Flashcards",
    image: "/images/products/flashcards-1.svg",
    alt: "Printable first-words flashcards with cute illustrations",
    etsyUrl: "https://mimicreatesid.etsy.com", // TODO: paste the real listing URL
  },
  {
    slug: "abc-animal-flashcards",
    title: "ABC Animal Flashcards A–Z (Printable Alphabet Cards)",
    description:
      "An animal for every letter! Bright A–Z flashcards that make learning the alphabet a little adventure.",
    price: 3.49,
    currency: "USD",
    category: "Flashcards",
    image: "/images/products/flashcards-2.svg",
    alt: "Alphabet animal flashcards from A to Z with colorful illustrations",
    etsyUrl: "https://mimicreatesid.etsy.com", // TODO: paste the real listing URL
    featured: true,
  },
];

export const featuredProducts = products.filter((p) => p.featured);
