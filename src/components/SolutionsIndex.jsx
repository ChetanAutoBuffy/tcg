import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { solutions } from "../data/solutions.js";

const cardGradients = [
  "from-blue-500 to-cyan-400",
  "from-purple-500 to-pink-400",
  "from-emerald-500 to-teal-400",
  "from-orange-500 to-amber-400",
  "from-fuchsia-500 to-pink-400",
  "from-sky-500 to-indigo-400",
  "from-rose-500 to-orange-400",
  "from-teal-500 to-emerald-400",
];

export default function SolutionsIndex() {
  return (
    <div className="relative bg-black/50 backdrop-blur-sm text-white min-h-screen overflow-x-hidden">
      <Helmet>
        <title>Automotive Software & AI Solutions | The Chadha Group</title>
        <meta
          name="description"
          content="Custom software and AI for the automotive aftermarket: repair shops, parts distributors, manufacturers, marketplace sellers, ACES/PIES catalog data, EDI, and more."
        />
        <link rel="canonical" href="https://thechadhagroup.com/solutions" />
        <meta property="og:title" content="Automotive Software & AI Solutions | The Chadha Group" />
        <meta property="og:description" content="Custom software and AI for the automotive aftermarket. Tell us the problem, we'll figure out the technology." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thechadhagroup.com/solutions" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Automotive Software & AI Solutions | The Chadha Group" />
        <meta name="twitter:description" content="Custom software and AI for the automotive aftermarket. Tell us the problem, we'll figure out the technology." />
      </Helmet>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(147,51,234,0.12)_0%,transparent_55%)]" />

      <div className="relative z-10 container-bleed py-16 sm:py-24">
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-wider text-gray-400 mb-8">
            <span className="w-2 h-2 rounded-full bg-purple-500"></span>
            Solutions
          </div>
          <h1 className="text-4xl sm:text-6xl font-black mb-6 leading-tight">
            Software & AI for the
            <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#2563EB,#9333EA,#EC4899)] animate-flow-synced"> Automotive Aftermarket</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            We build custom software and AI for the businesses that keep cars on the road — shops,
            distributors, manufacturers, and sellers. Pick where you fit, or just tell us the
            problem and we'll figure out the technology.
          </p>
        </div>

        {/* Cards */}
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, i) => (
              <Link
                key={solution.slug}
                to={`/solutions/${solution.slug}`}
                className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 min-h-[44px] hover:border-white/20 hover:bg-white/[0.04] transition-all hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-purple-500/60"
              >
                <div className={`absolute inset-x-0 top-0 h-0.5 rounded-t-2xl bg-gradient-to-r ${cardGradients[i % cardGradients.length]}`} />
                <div className="text-[11px] uppercase tracking-wider text-gray-500 mb-3">
                  {solution.eyebrow}
                </div>
                <h2 className={`text-xl font-bold mb-3 leading-snug bg-gradient-to-r ${cardGradients[i % cardGradients.length]} bg-clip-text text-transparent`}>
                  {solution.title}
                </h2>
                <p className="text-sm text-gray-400 leading-relaxed mb-6 flex-grow">
                  {solution.intro.split(". ")[0]}.
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:gap-3 transition-all">
                  Learn more
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Closing CTA */}
        <div className="max-w-4xl mx-auto mt-20">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl" />
            <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 text-center">
              <h2 className="text-2xl sm:text-4xl font-bold mb-4">Don't see your exact situation?</h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                These are the shapes our work usually takes — but the best projects start with a
                problem we haven't listed. Tell us yours and we'll figure out the technology.
              </p>
              <a
                href="/#intake-form"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-black font-bold px-8 py-4 min-h-[48px] transition-all hover:bg-gray-200 hover:scale-105"
              >
                Tell us the problem
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
