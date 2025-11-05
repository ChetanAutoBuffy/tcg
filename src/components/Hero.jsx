import bgImage from "../assets/bg.jpg";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[92vh] overflow-hidden bg-black text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="Background"
          className="w-full h-full object-cover opacity-50 brightness-125"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(147,51,234,0.1)_0%,transparent_40%)] animate-pulse" style={{ animationDuration: '8s' }} />
      </div>

      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/90" />

      {/* Content */}
      <div className="relative z-10 container-bleed text-center px-4 sm:px-6">
        <div className="uppercase tracking-wider text-xs font-semibold text-gray-400 mb-4">
          Privately Owned • Family Operated
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
          Built by Legacy.
          <br className="hidden sm:block" />
          <span className="relative inline-block text-transparent bg-clip-text bg-[linear-gradient(90deg,#2563EB,#9333EA,#EC4899,#F59E0B,#10B981,#2563EB)] animate-flow-synced px-1 pb-[4px]">
            Designed for the Future.
          </span>
        </h1>

        <p className="mt-5 text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Reshaping automotive commerce and technology — drawing upon four generations of industry expertise.
        </p>

        <div className="mt-10">
          <a href="#contact" className="cta px-6 py-3">
            Contact the Group
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { label: "Family Experience", value: "100+ yrs" },
            { label: "Generations", value: "4" },
            { label: "Global Trade", value: "Worldwide" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-white/5 border border-white/10 py-6 px-4 backdrop-blur-sm hover:bg-white/10 transition-all"
            >
              <div className="text-2xl sm:text-3xl font-semibold text-white">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-400 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}