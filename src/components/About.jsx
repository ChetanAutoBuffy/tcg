export default function About() {
  const values = [
    {
      title: "Ship Fast",
      description: "We leverage AI tools to deliver in weeks what others take months to build. Speed without compromise.",
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
    },
    {
      title: "Quality First",
      description: "Every line of code is production-ready. We build systems that scale, not prototypes that break.",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    },
    {
      title: "AI-Native",
      description: "We don't just use AI—we've mastered it. Claude, GPT, and cutting-edge tools are core to everything we build.",
      icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    },
    {
      title: "Real Partnership",
      description: "We're not an agency that disappears after launch. We're partners in your success, for the long term.",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    },
  ];

  const expertise = [
    "Full-Stack Development",
    "AI Agent Development",
    "Claude & GPT Integration",
    "API Design & Architecture",
    "E-commerce Platforms",
    "Real-time Systems",
    "Cloud Infrastructure",
    "Process Automation",
  ];

  return (
    <div className="relative bg-black/50 backdrop-blur-sm text-white min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.1)_0%,transparent_50%)]" />

      <div className="relative z-10 container-bleed py-16 sm:py-28">
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-20 sm:mb-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-wider text-gray-400 mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            About TCG
          </div>
          <h1 className="text-4xl sm:text-6xl font-black mb-6 leading-tight">
            AI-Native
            <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#2563EB,#9333EA,#EC4899)] animate-flow-synced"> Software Studio</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            We're a small, focused team that builds production-ready software at the speed of AI.
            No bureaucracy. No endless meetings. Just exceptional software, shipped fast.
          </p>
        </div>

        {/* Values Grid */}
        <div className="max-w-6xl mx-auto mb-24">
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={value.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Meet the Founder */}
        <div className="max-w-5xl mx-auto mb-24">
          <div className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-white/10 rounded-3xl p-8 sm:p-12">
            <div className="grid lg:grid-cols-3 gap-10 items-center">
              {/* Photo Placeholder */}
              <div className="lg:col-span-1 flex justify-center">
                <div className="w-48 h-48 rounded-3xl bg-gradient-to-br from-blue-500/30 to-purple-500/30 border border-white/20 flex items-center justify-center">
                  <svg className="w-20 h-20 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>

              {/* Bio */}
              <div className="lg:col-span-2">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-wider text-gray-400 mb-4">
                  Founder
                </div>
                <h2 className="text-3xl font-bold mb-2">Chetan Chadha</h2>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Mechanical engineer turned prompt engineer. I've spent years mastering AI-assisted development
                  with Claude Code, Cursor, and the latest AI tools. I've built enterprise platforms, commerce systems,
                  and AI agents that power real businesses. Now I help others do the same.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
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
                <div className="flex flex-wrap gap-2">
                  {["Claude Code", "Cursor", "React", "Python", "AI Agents"].map((skill) => (
                    <span key={skill} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Expertise */}
        <div className="max-w-4xl mx-auto mb-24 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">What We're Great At</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {expertise.map((item) => (
              <div
                key={item}
                className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:bg-white/10 hover:border-white/20 transition-all"
              >
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
              <h2 className="text-2xl sm:text-4xl font-bold mb-4">Ready to build something?</h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Let's talk about your project. Whether you need a full product built, AI integration help,
                or training for your team—we're here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-black font-bold px-8 py-4 transition-all hover:bg-gray-200 hover:scale-105"
                >
                  Start a Project
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="/#services"
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all"
                >
                  View Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
