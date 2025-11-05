export default function ApiPlatform() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Fitment Verification",
      description: "Instant compatibility checks across year, make, model, and trim levels.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
        </svg>
      ),
      title: "Product Data Access",
      description: "Clean ACES/PIES datasets and enriched automotive catalogs.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "AI Recommendations",
      description: "Intelligent product suggestions powered by machine learning.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: "Real-Time Inventory",
      description: "Live stock levels across warehouses and supplier networks.",
    },
  ];

  return (
    <div className="relative bg-black text-white min-h-screen overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.15)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(236,72,153,0.1)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.08)_0%,transparent_60%)] animate-pulse" style={{ animationDuration: '8s' }} />
      
      <div className="relative z-10 container-bleed py-16 sm:py-28">
        {/* Hero */}
        <div className="max-w-5xl mx-auto text-center mb-20 sm:mb-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-xs uppercase tracking-wider text-yellow-400 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
            </span>
            Coming Q2 2026
          </div>
          
          <h1 className="text-3xl sm:text-7xl font-extrabold mb-6 sm:mb-8 leading-tight">
            TCG API
          </h1>
          
          <p className="text-xl sm:text-3xl text-gray-300 mb-5 sm:mb-6 font-light">
            The automotive data layer
            <br />
            <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#2563EB,#9333EA,#EC4899)] font-semibold">
              you've been waiting for
            </span>
          </p>
          
          <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Access TCG's proprietary fitment intelligence, ACES/PIES data, and AI-powered product recommendations. Built by the team that powers millions in automotive eCommerce.
          </p>
        </div>

        {/* Features Grid */}
        <div className="max-w-7xl mx-auto mb-24 sm:mb-32">
          <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group relative bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 hover:bg-white/8 hover:border-white/20 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-300" />
                <div className="relative">
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:border-white/20 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Code Preview Teaser */}
        <div className="max-w-5xl mx-auto mb-24 sm:mb-32">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl" />
            <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 overflow-hidden">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                <span className="ml-4 text-sm text-gray-500 font-mono">tcg-api-example.js</span>
              </div>
              <pre className="text-sm sm:text-base text-gray-300 overflow-x-auto">
                <code className="font-mono">
{`// Simple, powerful, fast
const response = await tcg.fitment.verify({
  year: 2024,
  make: "Toyota",
  model: "Camry",
  partNumber: "EM-5085"
});

// Returns instant compatibility
// → { compatible: true, confidence: 0.98 }`}
                </code>
              </pre>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="max-w-6xl mx-auto mb-24 sm:mb-32">
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="text-4xl sm:text-6xl font-extrabold mb-2 text-transparent bg-clip-text bg-[linear-gradient(90deg,#2563EB,#9333EA)]">
                10M+
              </div>
              <div className="text-sm text-gray-400">Parts in Database</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-6xl font-extrabold mb-2 text-transparent bg-clip-text bg-[linear-gradient(90deg,#9333EA,#EC4899)]">
                50ms
              </div>
              <div className="text-sm text-gray-400">Average Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-6xl font-extrabold mb-2 text-transparent bg-clip-text bg-[linear-gradient(90deg,#EC4899,#F59E0B)]">
                99.9%
              </div>
              <div className="text-sm text-gray-400">Uptime Guarantee</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl" />
            <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12">
              <h2 className="text-2xl sm:text-5xl font-extrabold mb-4 sm:mb-6">Get Early Access</h2>
              <p className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Join the waitlist and be the first to integrate TCG API when we launch in Q2 2026.
              </p>
              
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-white text-black font-semibold px-6 py-3 text-base sm:px-10 sm:py-4 sm:text-lg transition-all duration-300 hover:bg-gray-200 hover:scale-105 active:scale-95"
              >
                Request Early Access
              </a>
              <p className="text-sm text-gray-500 mt-6">
                Priority access for early partners
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
