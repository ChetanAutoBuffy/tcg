import grandfatherImg from "../assets/grandfather.webp";

export default function About() {
  const generations = [
    {
      name: "Santokh Chadha",
      era: "1920s - 1950s",
      generation: "1st Generation",
      title: "The Foundation",
      story: "Santokh Chadha laid the foundation for what would become a multi-generational enterprise. His commitment to precision, quality, and integrity became the DNA of every venture that followed.",
      achievements: [
        "Established the family's first manufacturing operations",
        "Built reputation for uncompromising quality standards",
        "Created the foundation for decades of growth",
      ],
      image: grandfatherImg,
    },
    {
      name: "Kuldip Chadha",
      era: "1950s - 1990s",
      generation: "2nd Generation",
      title: "Manufacturing Expansion",
      story: "Kuldip Chadha took the enterprise to new heights with Sigma and Beta Industries LLC, specializing in rubber and metal manufacturing. He scaled operations while maintaining the founding principles of quality and precision.",
      achievements: [
        "Launched Sigma and Beta Industries LLC",
        "Expanded into rubber and metal component manufacturing",
        "Built partnerships with global OEMs",
        "Achieved ISO certifications and quality standards",
      ],
    },
    {
      name: "Hardeep Chadha",
      era: "1970s - Present",
      generation: "3rd Generation",
      title: "Distribution & Brand Building",
      story: "Hardeep Chadha launched Westar in the 1980s, establishing North American distribution and building the engine and transmission mount brand known worldwide today. He bridged manufacturing excellence with market reach.",
      achievements: [
        "Founded Westar in 1986",
        "Built Westar into a leading engine mount brand",
        "Established North American distribution networks",
        "Grew catalog to 3,200+ SKUs with ISO certifications",
      ],
    },
    {
      name: "Chetan Chadha",
      era: "2011 - Present",
      generation: "4th Generation",
      title: "AI & Technology Leadership",
      linkedin: "https://www.linkedin.com/in/chetan-chadha-80241465/",
      story: "Chetan Chadha is the tech leader of this generation, bridging the AI boom with automotive commerce. A mechanical engineer turned prompt engineer and AI innovator, he's leading the digital transformation of the family enterprise.",
      achievements: [
        "Launched Auto Buffy, RC Automotive, Premium Shocks",
        "Introduced Westar's new Bush brand",
        "Developed proprietary AI platforms (Buffy360, ab7, ImageIQ, PartsIQ)",
        "Leading Ride360 AI commerce platform development",
        "Established TCG Software arm for custom development",
      ],
    },
  ];

  return (
    <div className="relative bg-black text-white min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.1)_0%,transparent_50%)]" />
      
      <div className="relative z-10 container-bleed py-16 sm:py-28">
        {/* Hero */}
        <div className="max-w-5xl mx-auto text-center mb-20 sm:mb-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-wider text-gray-400 mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            Our Story
          </div>
          <h1 className="text-3xl sm:text-6xl font-extrabold mb-6 sm:mb-8 leading-tight">
            Legacy. Trust. Quality.
          </h1>
          <p className="text-base sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            For over a century, the Chadha family has been building enterprises on a foundation of excellence, integrity, and relentless innovation. From precision manufacturing to AI-powered platforms, each generation has pushed boundaries while staying true to core values.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto space-y-20">
          {generations.map((gen, idx) => (
            <div key={idx} className="relative">
              {/* Timeline Line */}
              {idx !== generations.length - 1 && (
                <div className="hidden lg:block absolute left-10 top-32 w-0.5 h-full bg-gradient-to-b from-blue-500/50 to-transparent" />
              )}

              <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-start">
                {/* Generation Badge */}
                <div className="lg:col-span-2 flex lg:flex-col items-center lg:items-start gap-4">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold">{idx + 1}st</span>
                  </div>
                  <div className="text-left lg:text-left">
                    <div className="text-xs text-gray-500 uppercase tracking-wider">{gen.generation}</div>
                    <div className="text-sm text-gray-400 font-mono">{gen.era}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-10">
                  <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-10 hover:bg-white/8 transition-all">
                    {gen.image && (
                      <div className="mb-8 rounded-2xl overflow-hidden border border-white/10">
                        <img src={gen.image} alt={gen.name} className="w-full h-64 object-cover" />
                      </div>
                    )}
                    
                    <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs text-blue-400 mb-4">
                      {gen.title}
                    </div>
                    
                    <h2 className="text-2xl sm:text-4xl font-bold mb-2">{gen.name}</h2>
                    
                    {gen.linkedin && (
                      <a
                        href={gen.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0077B5]/10 border border-[#0077B5]/20 text-[#0077B5] hover:bg-[#0077B5]/20 transition text-sm font-semibold mb-4"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        Connect on LinkedIn
                      </a>
                    )}
                    
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">{gen.story}</p>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">Key Achievements</h4>
                      <ul className="space-y-2">
                        {gen.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                            <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* TCG Today */}
        <div className="mt-24 sm:mt-32 max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl" />
            <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 text-center">
              <h2 className="text-2xl sm:text-5xl font-extrabold mb-4 sm:mb-6">TCG Today</h2>
              <p className="text-base sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-6 sm:mb-8">
                The Chadha Group stands at the intersection of legacy and innovation. We combine a century of manufacturing excellence with cutting-edge AI, automation, and software engineering. Our mission remains unchanged: deliver uncompromising quality, build lasting relationships, and push the boundaries of what's possible.
              </p>
              <a href="/" className="inline-flex items-center justify-center rounded-xl bg-white text-black font-semibold px-6 py-3 text-base sm:px-8 sm:py-3 transition-all hover:bg-gray-200 hover:scale-105">
                Explore TCG
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
