export default function HeroMobile() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[85vh] overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-black"></div>
      
      {/* Content */}
      <div className="relative z-10 container-bleed text-center px-4">
        <div className="text-xs font-semibold text-gray-400 mb-3 uppercase tracking-wider">
          Privately Owned • Family Operated
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-4">
          Built by Legacy.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            Designed for the Future.
          </span>
        </h1>

        <p className="text-sm sm:text-base text-gray-300 max-w-md mx-auto mb-6 leading-relaxed">
          Reshaping automotive commerce through four generations of expertise.
        </p>

        <a 
          href="#contact" 
          className="inline-flex items-center justify-center rounded-xl bg-white text-black font-semibold px-6 py-3 text-sm hover:bg-gray-200 transition"
        >
          Contact the Group
        </a>

        {/* Compact Stats */}
        <div className="mt-10 flex justify-center gap-6 text-center">
          <div className="flex-1 max-w-[100px]">
            <div className="text-2xl font-bold text-white">100+</div>
            <div className="text-xs text-gray-400">Years</div>
          </div>
          <div className="flex-1 max-w-[100px]">
            <div className="text-2xl font-bold text-white">4</div>
            <div className="text-xs text-gray-400">Generations</div>
          </div>
          <div className="flex-1 max-w-[100px]">
            <div className="text-2xl font-bold text-white">Global</div>
            <div className="text-xs text-gray-400">Trade</div>
          </div>
        </div>
      </div>
    </section>
  );
}