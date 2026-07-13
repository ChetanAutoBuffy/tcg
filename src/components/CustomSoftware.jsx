const buildExamples = [
  {
    title: "Catalog Normalizer",
    problem: "Supplier feeds arrive as messy, mismatched spreadsheets.",
    solution: "A tool that ingests any feed, maps it to ACES/PIES, de-dupes SKUs, and outputs clean, marketplace-ready data.",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    title: "AI Category Manager",
    problem: "Titles, descriptions, and fitment take a team weeks to write.",
    solution: "AI agents that write titles, descriptions, and bullet points across thousands of SKUs—on brand, on spec, in hours.",
    gradient: "from-purple-500 to-pink-400",
  },
  {
    title: "Fitment Lookup",
    problem: "Customers can't tell if a part fits their vehicle.",
    solution: "A year/make/model search wired to your catalog so buyers only see parts that actually fit theirs.",
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    title: "Marketplace Sync Engine",
    problem: "Inventory and prices drift out of sync across channels.",
    solution: "One source of truth that pushes stock, pricing, and listings to eBay, Amazon, and Shopify in real time.",
    gradient: "from-orange-500 to-amber-400",
  },
  {
    title: "Kit & Bundle Builder",
    problem: "Selling assemblies means manually grouping parts every time.",
    solution: "A builder that composes kits from your catalog, prices them automatically, and lists them as single SKUs.",
    gradient: "from-fuchsia-500 to-pink-400",
  },
  {
    title: "Dealer / B2B Portal",
    problem: "Wholesale accounts need pricing, terms, and ordering you can't offer on a retail store.",
    solution: "A private portal with account-based pricing, bulk ordering, and order history—built around how you actually sell B2B.",
    gradient: "from-sky-500 to-indigo-400",
  },
];

const process = [
  {
    step: "01",
    title: "We scope it on a call",
    detail: "Tell us the bottleneck. We map exactly what to build and what it should do—no 40-page spec, no discovery retainer.",
  },
  {
    step: "02",
    title: "You see a working version in days",
    detail: "Because we build with Claude Code, you get a real, clickable version fast—not wireframes, working software.",
  },
  {
    step: "03",
    title: "We iterate until it's right",
    detail: "You use it, we refine it. Fast loops, honest feedback, no change-order games.",
  },
  {
    step: "04",
    title: "It ships and keeps improving",
    detail: "We deploy it, connect your integrations, and stay on to add what you need next.",
  },
];

export default function CustomSoftware() {
  return (
    <div className="relative bg-black/50 backdrop-blur-sm text-white min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(147,51,234,0.12)_0%,transparent_55%)]" />

      <div className="relative z-10 container-bleed py-16 sm:py-28">
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-20 sm:mb-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-wider text-gray-400 mb-8">
            <span className="w-2 h-2 rounded-full bg-purple-500"></span>
            Custom Software
          </div>
          <h1 className="text-4xl sm:text-6xl font-black mb-6 leading-tight">
            We Build The Tool
            <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#2563EB,#9333EA,#EC4899)] animate-flow-synced"> Your Business Actually Needs</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Off-the-shelf software forces your business to bend around it. We do the opposite—we
            study how your parts business actually runs, then build software shaped to it. One tool
            or a whole platform, with AI where it earns its keep.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#intake-form"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-black font-bold px-8 py-4 transition-all hover:bg-gray-200 hover:scale-105"
            >
              Book a Consultation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/#integrations"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all"
            >
              See Integrations
            </a>
          </div>
        </div>

        {/* What we build */}
        <div className="max-w-6xl mx-auto mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-3">Tools We've Built For Parts Businesses</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Real problems, real software. Yours will be built for your workflow—these are the shapes it tends to take.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {buildExamples.map((ex) => (
              <div
                key={ex.title}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-white/20 hover:bg-white/[0.04] transition-all"
              >
                <div className={`absolute inset-x-0 top-0 h-0.5 rounded-t-2xl bg-gradient-to-r ${ex.gradient}`} />
                <h3 className={`text-xl font-bold mb-3 bg-gradient-to-r ${ex.gradient} bg-clip-text text-transparent`}>
                  {ex.title}
                </h3>
                <div className="mb-3">
                  <div className="text-[11px] uppercase tracking-wider text-gray-600 mb-1">The problem</div>
                  <p className="text-sm text-gray-400">{ex.problem}</p>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-gray-600 mb-1">What we build</div>
                  <p className="text-sm text-gray-300 leading-relaxed">{ex.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="max-w-5xl mx-auto mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-3">How It Works</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Fast because we vibe-code with Claude Code—working software in days, not a quarter-long project.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {process.map((p) => (
              <div key={p.step} className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-8">
                <div className="text-5xl font-black text-white/10 mb-3">{p.step}</div>
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-gray-400 leading-relaxed">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl" />
            <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 text-center">
              <h2 className="text-2xl sm:text-4xl font-bold mb-4">Have a bottleneck in mind?</h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Tell us the thing that eats your team's time. We'll tell you—free—whether software
                can fix it, roughly what it takes, and what it saves you.
              </p>
              <a
                href="/#intake-form"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-black font-bold px-8 py-4 transition-all hover:bg-gray-200 hover:scale-105"
              >
                Book a Consultation
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
