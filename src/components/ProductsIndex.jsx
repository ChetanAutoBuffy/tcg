import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { products } from "../data/products.js";

export default function ProductsIndex() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products.map((p, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      url: `https://thechadhagroup.com/products/${p.slug}`,
      name: p.name,
    })),
  };

  return (
    <>
      <Helmet>
        <title>AI Productized Services — Order in Minutes | TCG</title>
        <meta
          name="description"
          content="Pre-built AI services from TCG: AI website builder, AI landing pages, AI pitch decks, AI PDFs, AI logos, AI chatbots. Fixed pricing, fast delivery, no agency overhead."
        />
        <meta name="keywords" content="ai services, ai website builder, ai landing page, ai pitch deck, ai pdf, ai chatbot, productized services" />
        <link rel="canonical" href="https://thechadhagroup.com/products" />
        <meta property="og:title" content="AI Productized Services — Order in Minutes | TCG" />
        <meta property="og:description" content="Pre-built AI services with fixed pricing and fast delivery." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thechadhagroup.com/products" />
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
      </Helmet>

      {/* HERO */}
      <section className="relative pt-16 pb-12 sm:pt-24 sm:pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-600/15 via-pink-600/5 to-transparent blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-blue-600/10 via-cyan-600/5 to-transparent blur-3xl" />
        </div>

        <div className="container-bleed relative z-10">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300 mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Productized AI Services
            </div>
            <h1 className="text-4xl sm:text-6xl font-black mb-5 leading-tight text-white">
              AI services you can{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">
                order in 2 minutes
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Fixed pricing. Fast delivery. No discovery calls, no scope creep, no agency markup.
              You fill the form, AI does the heavy lifting, we polish and ship.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="relative pb-24">
        <div className="container-bleed">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((p) => (
                <Link
                  key={p.slug}
                  to={`/products/${p.slug}`}
                  className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] hover:border-white/20 transition-all hover:scale-[1.02]"
                >
                  <div className={`text-xs font-bold uppercase tracking-wider bg-gradient-to-r ${p.gradient} bg-clip-text text-transparent mb-3`}>
                    {p.category}
                  </div>

                  <h2 className="text-xl font-bold text-white mb-2 group-hover:text-white">
                    {p.name}
                  </h2>

                  <p className="text-gray-400 text-sm leading-relaxed mb-5 min-h-[60px]">
                    {p.tagline}
                  </p>

                  <div className="flex items-end justify-between mb-3">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <div className={`text-3xl font-black bg-gradient-to-r ${p.gradient} bg-clip-text text-transparent`}>
                          {p.priceLabel}
                        </div>
                        {p.compareAtLabel && (
                          <div className="text-base text-gray-500 line-through font-semibold">
                            {p.compareAtLabel}
                          </div>
                        )}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">one-time</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Delivery</div>
                      <div className="text-sm text-white font-semibold">{p.delivery}</div>
                    </div>
                  </div>
                  {p.saveLabel && (
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-1 text-[11px] font-bold text-emerald-300 mb-4">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {p.saveLabel}
                    </div>
                  )}

                  <div className="space-y-2 mb-6">
                    {p.deliverables.slice(0, 3).map((d, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-gray-400">
                        <svg className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{d.title}</span>
                      </div>
                    ))}
                    {p.deliverables.length > 3 && (
                      <div className="text-xs text-gray-500 pl-5">+ {p.deliverables.length - 3} more</div>
                    )}
                  </div>

                  <div className={`inline-flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r ${p.gradient} text-white font-bold px-4 py-3 text-sm group-hover:scale-[1.02] transition`}>
                    View & Order
                    <svg className="w-3 h-3 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>

            {/* Custom CTA */}
            <div className="mt-16 max-w-3xl mx-auto bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">Need something custom?</h3>
              <p className="text-gray-300 mb-6">
                If your project doesn't fit one of the boxes above, we still build it. Tell us what you need.
              </p>
              <Link
                to="/#intake-form"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-black font-bold px-6 py-3 text-base hover:bg-gray-100 transition-all hover:scale-[1.02] min-h-[48px]"
              >
                Tell us about your project
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
