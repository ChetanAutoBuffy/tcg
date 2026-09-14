// gen-sitemap.mjs
// Generates public/sitemap.xml for The Chadha Group site.
// No external deps — node: builtins only. Runs at build time (via prebuild) or manually.

import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const ORIGIN = 'https://thechadhagroup.com';
const LASTMOD = process.env.SITEMAP_LASTMOD || new Date().toISOString().split('T')[0];

// Static routes that mirror the real app routes.
// Omits /admin and any redirect-only routes.
const STATIC_ROUTES = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/about', changefreq: 'monthly', priority: '0.7' },
  { path: '/custom-software', changefreq: 'monthly', priority: '0.7' },
  { path: '/chetan', changefreq: 'monthly', priority: '0.7' },
  { path: '/blog', changefreq: 'weekly', priority: '0.7' },
  { path: '/solutions', changefreq: 'weekly', priority: '0.9' },
  { path: '/terms', changefreq: 'yearly', priority: '0.7' },
];

// Fallback slug list, used if src/data/solutions.js can't be imported yet.
const FALLBACK_SLUGS = [
  'repair-shops',
  'parts-distributors',
  'catalog-data',
  'category-management',
  'manufacturers',
  'marketplace-sellers',
  'rep-agencies',
  'edi-integrations',
];

async function getSolutionSlugs() {
  try {
    const mod = await import('../src/data/solutions.js');
    const solutions = mod.solutions;
    if (!Array.isArray(solutions) || solutions.length === 0) {
      throw new Error('solutions export missing or empty');
    }
    const slugs = solutions.map((s) => s.slug).filter(Boolean);
    if (slugs.length === 0) throw new Error('no slugs found on solutions');
    return slugs;
  } catch (err) {
    console.warn(`[gen-sitemap] Could not import solutions.js (${err.message}). Using fallback slug list.`);
    return FALLBACK_SLUGS;
  }
}

function urlXml({ path, changefreq, priority }) {
  const loc = `${ORIGIN}${path}`;
  return [
    '  <url>',
    `    <loc>${loc}</loc>`,
    `    <lastmod>${LASTMOD}</lastmod>`,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
    '  </url>',
  ].join('\n');
}

async function getBlogSlugs() {
  try {
    const mod = await import('../src/data/blog.js');
    const posts = mod.blogPosts;
    if (!Array.isArray(posts)) throw new Error('blogPosts export missing');
    return posts.map((p) => p.slug).filter(Boolean);
  } catch (err) {
    console.warn(`[gen-sitemap] Could not import blog.js (${err.message}). Skipping blog posts.`);
    return [];
  }
}

async function main() {
  const slugs = await getSolutionSlugs();
  const blogSlugs = await getBlogSlugs();

  const solutionRoutes = slugs.map((slug) => ({
    path: `/solutions/${slug}`,
    changefreq: 'monthly',
    priority: '0.8',
  }));

  const blogRoutes = blogSlugs.map((slug) => ({
    path: `/blog/${slug}`,
    changefreq: 'monthly',
    priority: '0.6',
  }));

  const routes = [...STATIC_ROUTES, ...solutionRoutes, ...blogRoutes];

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...routes.map(urlXml),
    '</urlset>',
    '',
  ].join('\n');

  const outPath = resolve(__dirname, '../public/sitemap.xml');
  await writeFile(outPath, xml, 'utf8');

  console.log(`[gen-sitemap] Wrote ${routes.length} URLs to ${outPath}`);
}

main().catch((err) => {
  console.error('[gen-sitemap] Failed:', err);
  process.exit(1);
});
