const built = [
  {
    name: "AutoBuffy",
    url: "https://autobuffy.com",
    desc: "AI search across 1M+ auto parts with real-time inventory and checkout. Built from scratch.",
    tags: ["AI Search", "Commerce", "1M+ SKUs"],
  },
  {
    name: "Westar Auto",
    url: "https://westarauto.com",
    desc: "Full B2B + D2C site with product catalog for a supplier established in 1986.",
    tags: ["B2B", "Catalog", "5-day build"],
  },
  {
    name: "AI Category Intelligence",
    url: null,
    desc: "Agent pipelines that normalize catalogs, write titles/descriptions, and fix fitment at scale.",
    tags: ["Agents", "ACES/PIES", "Automation"],
  },
];

const howIWork = [
  {
    title: "I build with Claude Code",
    detail: "Every project I ship runs on AI-assisted development. It's not a gimmick—it's how I deliver a working version in days instead of a quarter.",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  },
  {
    title: "I move fast on purpose",
    detail: "You see real, clickable software early and often. Fast loops beat long specs. We course-correct with the product in front of us, not a document.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "I know automotive commerce",
    detail: "Catalogs, fitment, marketplaces, supplier feeds, margins. I've lived these problems in my own businesses—I'm not learning your industry on your dime.",
    icon: "M3 13l1-3h16l1 3M5 13h14v5a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1H8v1a1 1 0 01-1 1H6a1 1 0 01-1-1v-5z",
  },
  {
    title: "I use AI where it pays off",
    detail: "Not AI for its own sake—AI where it removes real cost: category management, data cleanup, support, and the busywork eating your team's hours.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
];

const stack = [
  "Claude Code", "React / Next.js", "Python", "Node.js", "PostgreSQL", "AWS",
  "AI Agents", "ACES / PIES", "eBay / Amazon APIs", "Shopify", "n8n", "Stripe",
];

export default function Founder() {
  return (
    <div className="relative bg-black/50 backdrop-blur-sm text-white min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.12)_0%,transparent_55%)]" />

      <div className="relative z-10 container-bleed py-16 sm:py-28">
        {/* Hero */}
        <div className="max-w-5xl mx-auto mb-20 sm:mb-24">
          <div className="grid lg:grid-cols-3 gap-10 items-center">
            <div className="lg:col-span-1 flex justify-center">
              <div className="w-48 h-48 rounded-3xl bg-gradient-to-br from-blue-500/30 to-purple-500/30 border border-white/20 flex items-center justify-center">
                <svg className="w-20 h-20 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            <div className="lg:col-span-2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-wider text-gray-400 mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                Founder & Builder
              </div>
              <h1 className="text-4xl sm:text-6xl font-black mb-5 leading-tight">
                Chetan
                <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#2563EB,#9333EA,#EC4899)] animate-flow-synced"> Chadha</span>
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Mechanical engineer turned AI builder. I run automotive commerce businesses of my own,
                and I build the software they run on—end to end, with Claude Code. Everything you see
                here, I built from scratch. Now I do the same for other parts companies.
              </p>
              <a
                href="https://www.linkedin.com/in/chetan-chadha-80241465/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0077B5]/10 border border-[#0077B5]/30 text-[#0077B5] hover:bg-[#0077B5]/20 transition text-sm font-semibold"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* How I work */}
        <div className="max-w-6xl mx-auto mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-3">How I Work</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Why the software ships fast—and actually fits.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {howIWork.map((item) => (
              <div key={item.title} className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Built from scratch */}
        <div className="max-w-6xl mx-auto mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-3">Built From Scratch</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Not case studies from a portfolio—businesses and tools I've actually built and run.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {built.map((b) => (
              <div key={b.name} className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-white/20 hover:bg-white/[0.04] transition-all flex flex-col">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-xl font-bold">{b.name}</h3>
                  {b.url && (
                    <a href={b.url} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium text-white transition-all">
                      Visit
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
                <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-grow">{b.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {b.tags.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-gray-400">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stack */}
        <div className="max-w-4xl mx-auto mb-24 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">The Stack I Build On</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {stack.map((item) => (
              <div key={item} className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:bg-white/10 hover:border-white/20 transition-all">
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl" />
            <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 text-center">
              <h2 className="text-2xl sm:text-4xl font-bold mb-4">Want to build something together?</h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Book a consultation and tell me about your parts business. I'll tell you where AI and
                custom software can move the needle—and what it'd take.
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
