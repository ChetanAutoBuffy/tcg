import { useState } from "react";

const services = [
  {
    id: "build",
    title: "Build",
    tagline: "Ship 10x faster",
    description: "We build production-ready software using AI-accelerated development. From MVPs to enterprise platforms—delivered in weeks, not months.",
    features: [
      "Full-stack web & mobile apps",
      "AI-powered features & agents",
      "API design & integrations",
      "Cloud infrastructure (AWS, Vercel)",
      "Real-time systems & automation",
    ],
    gradient: "from-blue-500 to-cyan-400",
    bgGlow: "bg-blue-500/20",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    id: "consult",
    title: "Consult",
    tagline: "AI strategy & integration",
    description: "Not sure how to leverage AI? We help you understand the landscape, choose the right tools, and create a roadmap for AI adoption.",
    features: [
      "AI readiness assessment",
      "Tool selection (Claude, GPT, etc.)",
      "Workflow automation strategy",
      "Integration architecture",
      "ROI analysis & planning",
    ],
    gradient: "from-purple-500 to-pink-400",
    bgGlow: "bg-purple-500/20",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    id: "train",
    title: "Train",
    tagline: "Level up your team",
    description: "Hands-on training for Claude Code, Cursor, and AI-assisted development. Get your team shipping faster with modern AI tools.",
    features: [
      "Claude Code mastery",
      "Cursor & AI IDE training",
      "Prompt engineering workshops",
      "Best practices & workflows",
      "Custom training programs",
    ],
    gradient: "from-orange-500 to-yellow-400",
    bgGlow: "bg-orange-500/20",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState("build");
  const active = services.find((s) => s.id === activeService);

  return (
    <section id="services" className="relative bg-black/50 backdrop-blur-sm text-white py-24 sm:py-32 overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container-bleed relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-wider text-gray-400 mb-6">
            How We Work
          </div>
          <h2 className="text-4xl sm:text-6xl font-black mb-6 leading-tight">
            Three Ways to
            <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#2563EB,#9333EA,#EC4899)] animate-flow-synced"> Work Together</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Whether you need us to build it, help you plan it, or train your team to do it—we've got you covered.
          </p>
        </div>

        {/* Service Tabs */}
        <div className="max-w-5xl mx-auto">
          {/* Tab Buttons */}
          <div className="flex justify-center gap-2 sm:gap-4 mb-12">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`relative group px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 ${
                  activeService === service.id
                    ? "bg-white text-black"
                    : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
                }`}
              >
                <span className="relative z-10">{service.title}</span>
                {activeService === service.id && (
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity`} />
                )}
              </button>
            ))}
          </div>

          {/* Active Service Card */}
          <div className="relative">
            {/* Background Glow */}
            <div className={`absolute inset-0 ${active.bgGlow} blur-3xl opacity-30 transition-all duration-500`} />

            <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 backdrop-blur-sm">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                {/* Left - Content */}
                <div>
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${active.gradient} mb-6`}>
                    <div className="text-white">{active.icon}</div>
                  </div>

                  <div className="text-sm text-gray-400 uppercase tracking-wider mb-2">
                    {active.tagline}
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-bold mb-4">{active.title}</h3>

                  <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    {active.description}
                  </p>

                  <a
                    href="#contact"
                    className={`inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r ${active.gradient} text-white font-bold px-6 py-3 transition-all hover:scale-105 active:scale-95`}
                  >
                    Get Started
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>

                {/* Right - Features */}
                <div className="relative">
                  {/* Decorative Elements */}
                  <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br ${active.gradient} rounded-full blur-2xl opacity-20`} />

                  <div className="relative space-y-3">
                    {active.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all group"
                        style={{ animationDelay: `${idx * 100}ms` }}
                      >
                        <div className={`flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br ${active.gradient} flex items-center justify-center`}>
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-300 group-hover:text-white transition-colors">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto">
            {[
              { value: "50+", label: "Projects Shipped" },
              { value: "10x", label: "Faster with AI" },
              { value: "24hr", label: "Response Time" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-24 h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </section>
  );
}
