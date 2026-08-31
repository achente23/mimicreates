/**
 * ─────────────────────────────────────────────────────────────────
 *  MIMI CREATES — SITE SETTINGS
 *  This is the ONE file to edit when something about the shop
 *  changes (domain, Etsy link, socials, form key, email).
 * ─────────────────────────────────────────────────────────────────
 */

/** The final domain of this website. Update this after you connect
 *  your real domain (it is used for canonical URLs, sitemap, RSS,
 *  and structured data — important for SEO). */
export const SITE_URL = "https://mimicreates.pages.dev";

export const SITE_NAME = "Mimi Creates";

export const SITE_TAGLINE = "Learn • Play • Create";

export const SITE_DESCRIPTION =
  "Mimi Creates makes printable activities, busy books, worksheets, flashcards and coloring books for little learners — instant digital downloads, made with love.";

/** Where every "Buy Now" button falls back to, and where the
 *  "Visit our Etsy shop" links point. */
export const ETSY_SHOP_URL = "https://mimicreatesid.etsy.com";

/** Shown in the footer and on the contact/custom-art page.
 *  ⚠️ Replace with the real shop email. */
export const CONTACT_EMAIL = "hello@mimicreates.example";

/**
 * Web3Forms access key for the Custom Art Request form.
 * How to get one (takes ~2 minutes, free):
 *   1. Go to https://web3forms.com
 *   2. Enter the email address that should RECEIVE the requests
 *      (the artist's email) and click "Create Access Key".
 *   3. The key arrives by email — paste it here.
 * Submissions will then be delivered straight to that inbox.
 */
export const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY_HERE";

/** Social profiles — add real URLs (or leave "" to hide the icon). */
export const SOCIALS = {
  instagram: "",
  tiktok: "",
  pinterest: "",
  etsy: ETSY_SHOP_URL,
};

/** The artist's public name, used in blog bylines and schema. */
export const AUTHOR_NAME = "Mimi";
