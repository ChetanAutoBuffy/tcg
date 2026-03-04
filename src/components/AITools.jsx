const tools = [
  {
    name: "Claude",
    by: "Anthropic",
    description: "Advanced reasoning, code generation, and complex problem solving. Our primary AI partner.",
    category: "Primary",
    gradient: "from-orange-500 to-amber-400",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
  },
  {
    name: "Claude Code",
    by: "Anthropic",
    description: "AI-powered CLI for autonomous coding. We build entire features with natural language.",
    category: "Dev Tool",
    gradient: "from-amber-500 to-yellow-400",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/20",
  },
  {
    name: "Cursor",
    by: "Cursor Inc",
    description: "AI-first IDE that supercharges development speed with intelligent code completion.",
    category: "Dev Tool",
    gradient: "from-purple-500 to-violet-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
  },
  {
    name: "GPT-4",
    by: "OpenAI",
    description: "Powerful language model for diverse tasks. Used for specific use cases and integrations.",
    category: "LLM",
    gradient: "from-green-500 to-emerald-400",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
  },
  {
    name: "Perplexity",
    by: "Perplexity AI",
    description: "Real-time research and fact-checking. Keeps our solutions grounded in current data.",
    category: "Research",
    gradient: "from-blue-500 to-cyan-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
  },
  {
    name: "Lovable",
    by: "Lovable",
    description: "Rapid UI prototyping and design-to-code. Accelerates front-end development.",
    category: "Dev Tool",
    gradient: "from-pink-500 to-rose-400",
    bgColor: "bg-pink-500/10",
    borderColor: "border-pink-500/20",
  },
];

const whyItMatters = [
  {
    title: "10x Development Speed",
    description: "AI tools let us ship features that used to take weeks in just days.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Higher Quality Code",
    description: "AI catches bugs, suggests optimizations, and ensures best practices.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Cost Efficiency",
    description: "Faster delivery means lower costs. You get more value for every dollar.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

export default function AITools() {
  return (
    <section className="relative bg-black/50 backdrop-blur-sm text-white py-24 sm:py-32 overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0">
        {/* Animated gradient mesh */}
        <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-gradient-to-br from-orange-500/10 via-transparent to-transparent blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-purple-500/10 via-transparent to-transparent blur-3xl" />
      </div>

      {/* Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="container-bleed relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-wider text-gray-400 mb-6">
            Our AI Stack
          </div>
          <h2 className="text-4xl sm:text-6xl font-black mb-6 leading-tight">
            Powered by the
            <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#F59E0B,#EC4899,#8B5CF6)] animate-flow-synced"> Best AI</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We don't just use AI—we've mastered it. Every tool in our stack is chosen for maximum impact and seamless integration.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map((tool, idx) => (
              <div
                key={idx}
                className={`group relative ${tool.bgColor} border ${tool.borderColor} rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 cursor-default`}
              >
                {/* Hover glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />

                <div className="relative">
                  {/* Category Badge */}
                  <div className={`inline-flex items-center px-2.5 py-1 rounded-full bg-gradient-to-r ${tool.gradient} text-xs font-bold text-white mb-4`}>
                    {tool.category}
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-bold mb-1">{tool.name}</h3>
                  <div className="text-xs text-gray-500 mb-3">by {tool.by}</div>

                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {tool.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why It Matters */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Why This Matters for You</h3>
            <p className="text-gray-400">Using cutting-edge AI isn't just cool—it directly benefits your project.</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {whyItMatters.map((item, idx) => (
              <div
                key={idx}
                className="relative group bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto mt-16 text-center">
          <div className="bg-gradient-to-r from-white/5 via-white/10 to-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-3">Want to see our AI stack in action?</h3>
            <p className="text-gray-400 mb-6">
              Let's discuss how we can apply these tools to your specific project.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-black font-bold px-6 py-3 hover:scale-105 transition-all"
            >
              Book a Demo
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-24 h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </section>
  );
}
