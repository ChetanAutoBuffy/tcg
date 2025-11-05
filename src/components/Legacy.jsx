import { Link } from "react-router-dom";
import grandfatherImg from "../assets/grandfather.webp";

const generations = [
  {
    name: "Santokh Chadha",
    era: "1920s-1950s",
    role: "Foundation",
    accent: {
      dotClass: "bg-blue-500",
      glow: "rgba(59,130,246,0.55)",
      halo: "rgba(96,165,250,0.2)",
    },
  },
  {
    name: "Kuldip Chadha",
    era: "1950s-1990s",
    role: "Manufacturing",
    accent: {
      dotClass: "bg-purple-500",
      glow: "rgba(168,85,247,0.55)",
      halo: "rgba(196,181,253,0.2)",
    },
  },
  {
    name: "Hardeep Chadha",
    era: "1970s-Present",
    role: "Distribution",
    accent: {
      dotClass: "bg-orange-500",
      glow: "rgba(249,115,22,0.55)",
      halo: "rgba(253,186,116,0.22)",
    },
  },
  {
    name: "Chetan Chadha",
    era: "2011-Present",
    role: "AI & Technology",
    accent: {
      dotClass: "bg-green-500",
      glow: "rgba(34,197,94,0.55)",
      halo: "rgba(134,239,172,0.2)",
    },
  },
];

export default function Legacy() {
  return (
    <section className="relative bg-black text-white py-16 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08)_0%,transparent_60%)]" />
      
      <div className="container-bleed relative z-10">
        {/* Header */}
        <div className="max-w-5xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-wider text-gray-400 mb-6">
            Not a Team. A Family.
          </div>
          <h2 className="text-3xl sm:text-6xl font-extrabold mb-4 sm:mb-6">Who We Are</h2>
          <p className="text-base sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Four generations. One unwavering commitment to quality, trust, and innovation.
          </p>
        </div>

        {/* Image + Timeline Section */}
        <div className="max-w-7xl mx-auto">
          {/* Grandfather Image Hero */}
          <div className="relative mb-16 sm:mb-20 group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative rounded-3xl overflow-hidden border border-white/10 max-w-5xl mx-auto">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
              
              {/* B&W Image */}
              <img
                src={grandfatherImg}
                alt="Santokh Chadha - Founder"
                className="w-full h-[420px] sm:h-[600px] object-cover grayscale"
              />
              
              {/* Text Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-16 z-20">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-2 text-xs uppercase tracking-wider text-white mb-6">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    The Foundation
                  </div>
                  <h3 className="text-3xl sm:text-5xl font-extrabold mb-3 sm:mb-4">Santokh Chadha</h3>
                  <p className="text-base sm:text-lg text-gray-300 mb-5 sm:mb-6 leading-relaxed">
                    Where it all began. The foundation of a legacy built on precision, integrity, and relentless pursuit of excellence.
                  </p>
                  <Link 
                    to="/about" 
                    className="inline-flex items-center gap-2 text-white font-semibold hover:text-gray-300 transition group/link"
                  >
                    Read More About Santokh Chadha
                    <svg className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Horizontal Timeline - Clean Modern */}
          <div className="relative pt-10 md:pt-16">
            {/* Timeline Line */}
            <div className="pointer-events-none absolute left-[5%] right-[5%] top-10 hidden h-px rounded-full bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-green-500/30 md:block" />
            
            {/* Generation Cards */}
            <div className="relative grid gap-6 md:grid-cols-4">
              {generations.map((gen, idx) => (
                <div key={idx} className="relative group pt-6 md:pt-20">
                  {/* Timeline Dot - Hidden */}
                  <div className="hidden">
                  </div>

                  {/* Card */}
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:bg-white/10">
                    {/* Accent edge */}
                    <div
                      className="pointer-events-none absolute inset-y-0 left-0 w-[3px]"
                      style={{ background: `linear-gradient(180deg, ${gen.accent.glow} 0%, transparent 85%)` }}
                    />
                    {/* Floating accent halo */}
                    <div
                      className="pointer-events-none absolute -right-12 -top-16 h-40 w-40 rounded-full blur-3xl opacity-70"
                      style={{ background: `radial-gradient(circle, ${gen.accent.glow} 0%, transparent 70%)` }}
                    />
                    {/* Micro star */}
                    <div
                      className="pointer-events-none absolute right-12 top-10 h-3 w-3 rounded-full"
                      style={{ background: gen.accent.glow, boxShadow: `0 0 12px ${gen.accent.glow}, 0 0 24px ${gen.accent.glow}` }}
                    />
                    {/* Mobile halo */}
                    <div
                      className="pointer-events-none absolute -left-16 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full blur-3xl opacity-50 md:hidden"
                      style={{ background: `radial-gradient(circle, ${gen.accent.halo} 0%, transparent 75%)` }}
                    />

                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-2 sm:mb-3">{gen.era}</div>
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">{gen.name}</h4>
                    <div className="text-sm text-gray-400">{gen.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Text + CTA */}
          <div className="mt-16 sm:mt-24 text-center">
            <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed">
              From precision manufacturing to AI-powered commerce. Each generation pushed boundaries, built systems, and set new standards.
            </p>
            <Link 
              to="/about" 
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-black font-semibold px-6 py-3 text-base sm:px-10 sm:py-4 sm:text-lg transition-all hover:bg-gray-200 hover:scale-105 group"
            >
              Read the Full Story
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="mt-24 h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>
    </section>
  );
}
