export default function Packages() {
  const packages = [
    {
      id: "sprint",
      name: "SPRINT",
      price: "Contact Us",
      tagline: "One focused build, fast",
      description: "A single high-impact piece—a storefront, a catalog tool, or an AI agent—shipped in days.",
      whatYouGet: [
        {
          title: "One Focused Deliverable",
          detail: "A landing page, product tool, or single AI automation",
        },
        {
          title: "AI-Written Copy & Data",
          detail: "Claude generates titles, descriptions, and product content",
        },
        {
          title: "Marketplace-Ready",
          detail: "Built to feed eBay, Amazon, or your own store",
        },
        {
          title: "SEO Setup",
          detail: "Meta tags, Open Graph, sitemap — ready for Google",
        },
        {
          title: "Live on Your Domain",
          detail: "We handle hosting, SSL, DNS — you just approve",
        },
      ],
      example: "A parts seller needed a clean fitment lookup on their homepage. Built with AI-written copy and live inventory. Live in 2 days.",
      exampleUrl: null,
      exampleStats: null,
      delivery: "1-3 days",
      cta: "Book a Consultation",
      ctaLink: "#intake-form",
      gradient: "from-blue-500 to-cyan-400",
      popular: false,
    },
    {
      id: "overhaul",
      name: "OVERHAUL",
      price: "Contact Us",
      tagline: "Full web + catalog overhaul",
      description: "A complete storefront or B2B portal with your catalog, fitment, and content cleaned up and AI-accelerated.",
      whatYouGet: [
        {
          title: "Full Custom Site",
          detail: "Storefront or B2B portal — designed around how you sell",
        },
        {
          title: "AI Category Management",
          detail: "We clean, normalize, and enrich your catalog with AI",
        },
        {
          title: "Mobile-First Design",
          detail: "Looks perfect on iPhone, Android, tablet, desktop",
        },
        {
          title: "Analytics Dashboard",
          detail: "Track visitors, conversions, and product performance",
        },
        {
          title: "CMS (Optional)",
          detail: "Edit your own content via simple admin panel",
        },
        {
          title: "Revisions Until Right",
          detail: "We refine until you're 100% satisfied",
        },
      ],
      example: "Westar Auto needed a full B2B site with product catalog and contact forms. Delivered in 5 days.",
      exampleUrl: "https://westarauto.com",
      exampleStats: [
        { value: "Since 1986", label: "Established" },
        { value: "B2B + D2C", label: "Channels" },
        { value: "5 days", label: "Delivered" },
      ],
      delivery: "3-7 days",
      cta: "Book a Consultation",
      ctaLink: "#intake-form",
      gradient: "from-purple-500 to-pink-400",
      popular: true,
    },
    {
      id: "platform",
      name: "PLATFORM",
      price: "Contact Us",
      tagline: "Custom platform + AI agents",
      description: "A full commerce platform with AI search, real-time inventory, marketplace sync, and agents built in.",
      whatYouGet: [
        {
          title: "Everything in Overhaul",
          detail: "Storefront, AI catalog, mobile-first, analytics, CMS",
        },
        {
          title: "AI Search + Agents + Sync",
          detail: "Claude-powered search, autonomous agents, and eBay/Amazon/Shopify sync",
        },
        {
          title: "Custom Integrations",
          detail: "Connect your CRM, ERP, suppliers, Slack, n8n — whatever you run",
        },
        {
          title: "Performance Optimization",
          detail: "Sub-2s load times, Core Web Vitals green across the board",
        },
        {
          title: "Ongoing Iteration",
          detail: "We keep shipping until it's exactly right",
        },
      ],
      example: "AutoBuffy — AI search across 1M+ auto parts, real-time inventory, checkout. Built in 2 weeks.",
      exampleUrl: "https://autobuffy.com",
      exampleStats: [
        { value: "1M+", label: "Parts" },
        { value: "AI", label: "Search" },
        { value: "2 wks", label: "Built" },
      ],
      delivery: "2+ weeks",
      cta: "Book a Consultation",
      ctaLink: "#intake-form",
      gradient: "from-orange-500 to-amber-400",
      popular: false,
    },
  ];

  const addons = [
    {
      name: "Ongoing Partner",
      price: "Retainer",
      detail: "Continuous updates, monitoring, and new features"
    },
    {
      name: "AI Support Agent",
      price: "Add-on",
      detail: "Claude-powered parts & customer support"
    },
    {
      name: "Marketplace Sync",
      price: "Add-on",
      detail: "eBay, Amazon, Shopify listing automation"
    },
    {
      name: "Catalog Cleanup",
      price: "Add-on",
      detail: "Normalize fitment, de-dupe, enrich data"
    },
    {
      name: "AI Consulting",
      price: "$500 / hr",
      detail: "Savings analysis, strategy, roadmapping"
    },
  ];

  return (
    <section id="packages" className="relative bg-black/50 backdrop-blur-sm text-white py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container-bleed relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300 mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            AI-Accelerated Delivery
          </div>
          <h2 className="text-4xl sm:text-6xl font-black mb-6 leading-tight">
            Ship in Days,
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400"> Not Months</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We scope it, build it with AI, and ship it. Every engagement is custom—so the price is too.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-6 lg:gap-8 mb-20 px-4">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-3xl p-1 ${
                pkg.popular
                  ? "bg-gradient-to-b from-purple-500 via-pink-500 to-orange-500"
                  : "bg-white/10"
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Card Inner */}
              <div className="bg-black/90 backdrop-blur-sm rounded-[22px] p-6 sm:p-8 h-full flex flex-col">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500">{pkg.name}</span>
                    <span className="text-xs font-medium text-gray-400 bg-white/5 px-2 py-1 rounded">{pkg.delivery}</span>
                  </div>
                  <div className="text-3xl font-black text-white mb-1">{pkg.price}</div>
                  <div className="text-[11px] text-gray-500 mb-2">Custom-scoped and quoted for your business</div>
                  <div className={`text-sm font-semibold bg-gradient-to-r ${pkg.gradient} bg-clip-text text-transparent`}>
                    {pkg.tagline}
                  </div>
                  <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                {/* What You Get */}
                <div className="flex-grow mb-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">What You Get</div>
                  <ul className="space-y-4">
                    {pkg.whatYouGet.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${pkg.gradient} flex items-center justify-center mt-0.5`}>
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-white text-sm font-semibold">{item.title}</div>
                          <div className="text-gray-500 text-xs mt-0.5">{item.detail}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Real Example with Link */}
                <div className="mb-6 p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="text-xs text-purple-400 font-semibold mb-1">Real Project</div>
                      <div className="text-sm text-gray-300 leading-relaxed">
                        {pkg.example.replace("Example: ", "")}
                      </div>
                    </div>
                    {pkg.exampleUrl && (
                      <a
                        href={pkg.exampleUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium text-white transition-all"
                      >
                        See Live
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                  {pkg.exampleStats && (
                    <div className="flex gap-4 mt-3 pt-3 border-t border-white/10">
                      {pkg.exampleStats.map((stat, i) => (
                        <div key={i} className="text-center">
                          <div className="text-sm font-bold text-white">{stat.value}</div>
                          <div className="text-[10px] text-gray-500 uppercase">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* CTA */}
                <a
                  href={pkg.ctaLink}
                  className={`inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r ${pkg.gradient} text-white font-bold px-6 py-4 text-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]`}
                >
                  {pkg.cta}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Need More?</h3>
            <p className="text-gray-400 text-sm">Add these to any package</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {addons.map((addon, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <div className="text-white font-semibold text-sm mb-1">{addon.name}</div>
                <div className="text-purple-400 font-bold text-lg mb-1">{addon.price}</div>
                <div className="text-gray-500 text-xs">{addon.detail}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-xs text-gray-500 max-w-xl mx-auto mb-6">
              Every engagement is custom-scoped and quoted. We don't take on projects under $500. Advisory &amp; consulting from $500/hr.
            </p>
            <a
              href="#intake-form"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm font-medium transition-colors"
            >
              Not sure what you need? Tell us about your project
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-24 h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </section>
  );
}
