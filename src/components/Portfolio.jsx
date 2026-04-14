import buffy360Logo from "../assets/software/Buffy360-Logo.svg";

const projects = [
  {
    name: "AutoBuffy",
    tagline: "AI-Powered Auto Parts Platform",
    description: "Revolutionary auto parts marketplace powered by AI. Instant part fitment verification, smart search, and automated inventory management across millions of parts.",
    url: "https://autobuffy.com",
    stats: [
      { value: "1M+", label: "Parts Listed" },
      { value: "AI", label: "Fitment Check" },
      { value: "24/7", label: "Live Platform" },
    ],
    tags: ["Next.js", "AI", "E-commerce", "Automation"],
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    featured: true,
  },
  {
    name: "Buffy360",
    tagline: "Commerce Operating System",
    description: "Complete e-commerce platform managing 300K+ SKUs across multiple channels. Automated order routing, inventory sync, and smart pricing.",
    url: "https://buffy360.com",
    stats: [
      { value: "300K+", label: "SKUs Managed" },
      { value: "5", label: "Sales Channels" },
      { value: "$10M+", label: "Annual GMV" },
    ],
    tags: ["React", "Python", "AWS", "AI"],
    gradient: "from-purple-500 via-pink-500 to-rose-500",
    featured: false,
    logo: buffy360Logo,
  },
  {
    name: "Westar Auto",
    tagline: "OE-Quality Auto Parts Since 1986",
    description: "B2B and D2C automotive parts distributor specializing in engine & transmission mounts. Full e-commerce with vehicle fitment, 24-month warranty.",
    url: "https://westarauto.com",
    stats: [
      { value: "Since 1986", label: "Est." },
      { value: "B2B + D2C", label: "Channels" },
      { value: "Free Ship", label: "Ground" },
    ],
    tags: ["Next.js", "E-commerce", "B2B", "SEO"],
    gradient: "from-amber-500 via-orange-500 to-red-500",
    featured: false,
  },
];

const capabilities = [
  "E-commerce Platforms",
  "AI Agents & Copilots",
  "API Development",
  "Real-time Systems",
  "Data Pipelines",
  "Mobile Apps",
  "Admin Dashboards",
  "Automation Tools",
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative bg-black/50 backdrop-blur-sm text-white py-24 sm:py-32 overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-bl from-blue-500/5 via-transparent to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-purple-500/5 via-transparent to-transparent blur-3xl" />
      </div>

      {/* Diagonal Lines Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `repeating-linear-gradient(
          -45deg,
          transparent,
          transparent 50px,
          white 50px,
          white 51px
        )`
      }} />

      <div className="container-bleed relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-wider text-gray-400 mb-6">
            Our Work
          </div>
          <h2 className="text-4xl sm:text-6xl font-black mb-6 leading-tight">
            Built by Us,
            <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#2563EB,#9333EA,#EC4899)] animate-flow-synced"> Powered by AI</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Real products. Real results. These are the platforms we've built and operate daily—the same quality we bring to every client project.
          </p>
        </div>

        {/* Featured Project */}
        <div className="max-w-6xl mx-auto mb-16">
          {projects.filter(p => p.featured).map((project) => (
            <div key={project.name} className="relative group">
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity duration-500`} />

              <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 overflow-hidden">
                {/* Floating Elements */}
                <div className="absolute top-8 right-8 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl" />

                <div className="grid lg:grid-cols-2 gap-10 items-center">
                  {/* Left - Content */}
                  <div>
                    {/* Logo */}
                    {project.logo && (
                      <img
                        src={project.logo}
                        alt={project.name}
                        className="h-12 w-auto mb-6"
                        style={{ filter: "brightness(0) invert(1)" }}
                      />
                    )}

                    <div className="inline-flex items-center gap-2 mb-4">
                      <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${project.gradient} text-xs font-bold text-white`}>
                        Featured
                      </span>
                      <span className="text-sm text-gray-400">{project.tagline}</span>
                    </div>

                    <p className="text-lg text-gray-300 leading-relaxed mb-8">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4">
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition group/link"
                        >
                          Visit Live Site
                          <svg className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 text-white font-semibold hover:text-gray-300 transition group/link"
                      >
                        Build something like this
                        <svg className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Right - Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    {project.stats.map((stat, idx) => (
                      <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center group-hover:bg-white/10 transition-all">
                        <div className={`text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r ${project.gradient}`}>
                          {stat.value}
                        </div>
                        <div className="text-xs text-gray-500 mt-2 uppercase tracking-wider">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid sm:grid-cols-2 gap-6">
            {projects.filter(p => !p.featured).map((project) => (
              <div key={project.name} className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all">
                {/* Gradient accent */}
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${project.gradient} rounded-t-2xl`} />

                <div className="flex items-start justify-between mt-2 mb-1">
                  <h3 className="text-xl font-bold">{project.name}</h3>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition"
                      aria-label={`Visit ${project.name}`}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
                <div className="text-sm text-gray-500 mb-3">{project.tagline}</div>
                <p className="text-sm text-gray-400 mb-4">{project.description}</p>

                {/* Stats Row */}
                <div className="flex gap-6 mb-4">
                  {project.stats.slice(0, 2).map((stat, idx) => (
                    <div key={idx}>
                      <div className="text-lg font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-full bg-white/5 text-xs text-gray-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What We Can Build */}
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6">What Can We Build for You?</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {capabilities.map((cap) => (
              <div
                key={cap}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:bg-white/10 hover:border-white/20 transition-all"
              >
                {cap}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-24 h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </section>
  );
}
