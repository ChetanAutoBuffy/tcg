import { useState } from "react";

// Renders a monochrome brand logo from the simple-icons CDN.
// Falls back to a clean text badge if the slug 404s, so the wall never breaks.
function Logo({ slug, name }) {
  const [failed, setFailed] = useState(false);

  if (failed || !slug) {
    return (
      <span className="text-xs sm:text-sm font-semibold text-gray-300 whitespace-nowrap">
        {name}
      </span>
    );
  }

  return (
    <img
      src={`https://cdn.simpleicons.org/${slug}/ffffff`}
      alt={name}
      loading="lazy"
      onError={() => setFailed(true)}
      className="h-6 sm:h-7 w-auto max-w-[110px] object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
    />
  );
}

// Marquee rows — the "shit ton of integrations" wall
const marqueeRowA = [
  { slug: "amazon", name: "Amazon" },
  { slug: "ebay", name: "eBay" },
  { slug: "shopify", name: "Shopify" },
  { slug: "woocommerce", name: "WooCommerce" },
  { slug: "walmart", name: "Walmart" },
  { slug: "magento", name: "Magento" },
  { slug: "bigcommerce", name: "BigCommerce" },
  { slug: "wix", name: "Wix" },
  { slug: "squarespace", name: "Squarespace" },
  { slug: "etsy", name: "Etsy" },
  { slug: "stripe", name: "Stripe" },
  { slug: "paypal", name: "PayPal" },
  { slug: "square", name: "Square" },
];

const marqueeRowB = [
  { slug: "openai", name: "OpenAI" },
  { slug: "anthropic", name: "Anthropic" },
  { slug: "n8n", name: "n8n" },
  { slug: "zapier", name: "Zapier" },
  { slug: "postgresql", name: "PostgreSQL" },
  { slug: "mysql", name: "MySQL" },
  { slug: "mongodb", name: "MongoDB" },
  { slug: "redis", name: "Redis" },
  { slug: "snowflake", name: "Snowflake" },
  { slug: "amazonwebservices", name: "AWS" },
  { slug: "cloudflare", name: "Cloudflare" },
  { slug: "vercel", name: "Vercel" },
  { slug: "github", name: "GitHub" },
  { slug: "docker", name: "Docker" },
];

const categories = [
  {
    title: "Marketplaces & Storefronts",
    blurb: "List once, sell everywhere. We push your catalog to every channel that matters.",
    gradient: "from-blue-500 to-cyan-400",
    items: [
      { slug: "amazon", name: "Amazon" },
      { slug: "ebay", name: "eBay" },
      { slug: "shopify", name: "Shopify" },
      { slug: "woocommerce", name: "WooCommerce" },
      { slug: "walmart", name: "Walmart" },
      { slug: "magento", name: "Magento" },
      { slug: "bigcommerce", name: "BigCommerce" },
      { slug: "etsy", name: "Etsy" },
    ],
  },
  {
    title: "Catalog, Fitment & Data",
    blurb: "The automotive backbone — industry data standards and the databases that hold your parts.",
    gradient: "from-emerald-500 to-teal-400",
    items: [
      { name: "ACES / PIES" },
      { name: "ShowMeTheParts" },
      { name: "PartsTech" },
      { name: "SEMA Data" },
      { slug: "postgresql", name: "PostgreSQL" },
      { slug: "mysql", name: "MySQL" },
      { slug: "googlesheets", name: "Google Sheets" },
      { slug: "airtable", name: "Airtable" },
    ],
  },
  {
    title: "Payments & Checkout",
    blurb: "Take money cleanly — cards, wallets, and B2B terms, wired into your store.",
    gradient: "from-violet-500 to-purple-400",
    items: [
      { slug: "stripe", name: "Stripe" },
      { slug: "paypal", name: "PayPal" },
      { slug: "square", name: "Square" },
      { slug: "visa", name: "Visa" },
      { slug: "mastercard", name: "Mastercard" },
      { slug: "klarna", name: "Klarna" },
    ],
  },
  {
    title: "AI & Agents",
    blurb: "The models and orchestration we build your agents and category management on.",
    gradient: "from-pink-500 to-rose-400",
    items: [
      { slug: "anthropic", name: "Claude" },
      { slug: "openai", name: "OpenAI" },
      { slug: "googlegemini", name: "Gemini" },
      { slug: "huggingface", name: "Hugging Face" },
      { slug: "n8n", name: "n8n" },
      { slug: "zapier", name: "Zapier" },
    ],
  },
  {
    title: "Infrastructure & Cloud",
    blurb: "Fast, reliable hosting and pipelines so your store never blinks.",
    gradient: "from-orange-500 to-amber-400",
    items: [
      { slug: "amazonwebservices", name: "AWS" },
      { slug: "vercel", name: "Vercel" },
      { slug: "cloudflare", name: "Cloudflare" },
      { slug: "docker", name: "Docker" },
      { slug: "github", name: "GitHub" },
      { slug: "redis", name: "Redis" },
    ],
  },
  {
    title: "Comms & CRM",
    blurb: "Route leads, fire notifications, and keep customers in the loop automatically.",
    gradient: "from-sky-500 to-indigo-400",
    items: [
      { slug: "slack", name: "Slack" },
      { slug: "hubspot", name: "HubSpot" },
      { slug: "salesforce", name: "Salesforce" },
      { slug: "twilio", name: "Twilio" },
      { slug: "klaviyo", name: "Klaviyo" },
      { slug: "whatsapp", name: "WhatsApp" },
    ],
  },
];

function MarqueeRow({ items, reverse = false }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden py-2">
      <div
        className="flex w-max gap-4"
        style={{
          animation: `tcg-marquee 40s linear infinite${reverse ? " reverse" : ""}`,
        }}
      >
        {doubled.map((item, idx) => (
          <div
            key={`${item.name}-${idx}`}
            className="group flex h-16 w-40 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.07] hover:border-white/20 transition-all"
          >
            <Logo slug={item.slug} name={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Integrations() {
  return (
    <section
      id="integrations"
      className="relative bg-black/50 backdrop-blur-sm text-white py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container-bleed relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-wider text-gray-400 mb-6">
            Integrations
          </div>
          <h2 className="text-4xl sm:text-6xl font-black mb-6 leading-tight">
            Plugs Into
            <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#2563EB,#9333EA,#EC4899)] animate-flow-synced">
              {" "}Everything You Sell On
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Marketplaces, payments, supplier feeds, industry data standards, AI models—if your
            parts business touches it, we can wire it together. No partnerships required.
          </p>
        </div>
      </div>

      {/* Marquee wall — full bleed */}
      <div className="relative z-10 mb-20 space-y-4">
        {/* Edge fades */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />
          <MarqueeRow items={marqueeRowA} />
          <MarqueeRow items={marqueeRowB} reverse />
        </div>
      </div>

      {/* Categorized grid */}
      <div className="container-bleed relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-white/20 hover:bg-white/[0.04] transition-all"
            >
              <div className={`absolute inset-x-0 top-0 h-0.5 rounded-t-2xl bg-gradient-to-r ${cat.gradient} opacity-60`} />
              <h3 className="text-lg font-bold mb-2">{cat.title}</h3>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed">{cat.blurb}</p>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-4">
                {cat.items.map((item) => (
                  <div key={item.name} className="group flex items-center">
                    <Logo slug={item.slug} name={item.name} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Don't see it CTA */}
        <div className="max-w-3xl mx-auto text-center mt-14">
          <p className="text-gray-400 mb-6">
            Running something custom or homegrown? If it has an API—or even just a spreadsheet—we can connect it.
          </p>
          <a
            href="#intake-form"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold px-8 py-4 transition-all hover:scale-105 active:scale-95"
          >
            Ask About Your Integration
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      <div className="mt-24 h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <style>{`
        @keyframes tcg-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
