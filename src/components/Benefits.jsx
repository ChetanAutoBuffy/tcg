export default function Benefits() {
  const benefits = [
    {
      title: "Manufacturing Excellence",
      description: "Decades of production expertise with modern automation and quality control systems.",
    },
    {
      title: "Global Distribution & Wholesale",
      description: "Established logistics networks spanning international markets with proven reliability and wholesale partnerships.",
    },
    {
      title: "Direct-to-Consumer Retail",
      description: "Owned retail channels eliminating middlemen and capturing full margin value.",
    },
    {
      title: "Full-Stack Software Development",
      description: "In-house engineering team building proprietary platforms for inventory, pricing, marketing, and commerce automation.",
    },
    {
      title: "AI & Data Mining",
      description: "Cutting-edge AI technology for predictive analytics, automotive data enhancement, and market intelligence.",
    },
    {
      title: "Kit Innovation & Leadership",
      description: "Pioneering the kit-building revolution — solving complex fitment challenges and creating complete solutions for customers.",
    },
  ];

  return (
    <section className="relative bg-black text-white py-16 sm:py-20 overflow-hidden">
      <div className="container-bleed relative z-10">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-center mb-4">
          Competitive Advantages
        </h2>
        <p className="text-gray-400 text-sm sm:text-base text-center max-w-2xl mx-auto mb-12">
          Manufacturing. Distribution. Retail. AI. All under one roof.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
            >
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-24 h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>

      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black opacity-80"></div>
    </section>
  );
}