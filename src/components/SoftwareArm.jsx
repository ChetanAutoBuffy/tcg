export default function SoftwareArm() {
  const capabilities = [
    {
      title: "Full-Stack Development",
      items: [
        "React, Next.js, TypeScript",
        "Python, FastAPI, Node.js",
        "PostgreSQL, MongoDB, AWS",
        "End-to-end SaaS platforms",
      ],
    },
    {
      title: "AI & Automation",
      items: [
        "Custom AI agents & copilots",
        "Prompt engineering pipelines",
        "LLM integration (OpenAI, Anthropic, xAI)",
        "Image & data processing at scale",
      ],
    },
    {
      title: "API & Integration",
      items: [
        "REST & GraphQL design",
        "Third-party API connections",
        "Real-time data sync",
        "Webhook & event systems",
      ],
    },
  ];

  const techStack = [
    "Python",
    "FastAPI",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "AWS Lambda",
    "Docker",
    "OpenAI",
    "Anthropic",
    "Git",
  ];

  return (
    <div className="relative bg-black text-white min-h-screen overflow-hidden">
      {/* Gradient background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.1)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(147,51,234,0.08)_0%,transparent_50%)]" />
      
      <div className="relative z-10 container-bleed py-16 sm:py-28">
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-20 sm:mb-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-wider text-gray-400 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-pulse relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            TCG Software
          </div>
          
          <h1 className="text-3xl sm:text-6xl font-extrabold mb-5 sm:mb-6 leading-tight">
            We build the infrastructure
            <br />
            <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#2563EB,#9333EA,#EC4899)] animate-flow-synced">
              for what comes next
            </span>
          </h1>
          
          <p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            The same team that built Buffy360, ab7, and Ride360 can build your next platform. From concept to production in weeks, not months.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="max-w-7xl mx-auto mb-24 sm:mb-32">
          <h2 className="text-2xl sm:text-4xl font-bold text-center mb-10 sm:mb-16">What We Build</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
                <div className="relative">
                  <h3 className="text-xl sm:text-2xl font-bold mb-5">{cap.title}</h3>
                  <ul className="space-y-2.5 sm:space-y-3">
                    {cap.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="max-w-6xl mx-auto mb-24 sm:mb-32">
          <h2 className="text-2xl sm:text-4xl font-bold text-center mb-10 sm:mb-16">Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, idx) => (
              <div
                key={idx}
                className="group relative bg-white/5 border border-white/10 rounded-full px-6 py-3 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <span className="text-sm font-semibold">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Prompt Engineering Demo */}
        <div className="max-w-6xl mx-auto mb-24 sm:mb-32">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold mb-4">See Prompt Engineering in Action</h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
              Watch how we turn natural language into production-ready code. This is the future of development.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl" />
            <div className="relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
              {/* Terminal Header */}
              <div className="bg-white/5 border-b border-white/10 px-6 py-3 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <span className="ml-4 text-sm text-gray-500 font-mono">prompt-to-code.js</span>
              </div>

              {/* Prompt Input */}
              <div className="p-6 border-b border-white/10 bg-blue-500/5">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 text-xs font-bold">
                    AI
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-blue-400 font-semibold mb-2">PROMPT</div>
                    <p className="text-sm text-gray-300 font-mono">
                      "Create a React component that fetches user data from an API and displays it in a card with error handling"
                    </p>
                  </div>
                </div>
              </div>

              {/* Code Output with typing animation */}
              <div className="p-6 bg-black/40">
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-green-500/20 border border-green-500/30 flex items-center justify-center text-green-400 text-xs font-bold">
                    →
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-green-400 font-semibold mb-3">OUTPUT (Generated in 2.3s)</div>
                    <pre className="text-xs sm:text-sm text-gray-300 font-mono overflow-x-auto">
                      <code className="typing-animation">
{`import { useState, useEffect } from 'react';

export default function UserCard({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(\`/api/users/\${userId}\`)
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="card">
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}`}
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Prompt Engineering */}
          <div className="mt-16 grid sm:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">10x</div>
              <div className="text-sm text-gray-400">Faster Development</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">90%</div>
              <div className="text-sm text-gray-400">Less Boilerplate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">100%</div>
              <div className="text-sm text-gray-400">Production Ready</div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-6">
              Want to leverage prompt engineering for your team?
            </p>
            
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 px-8 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              Book a Consultation
            </a>
          </div>
        </div>

        {/* Why Us */}
        <div className="max-w-5xl mx-auto mb-24 sm:mb-32">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">Why TCG Software</h2>
            <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Lightning Fast</h3>
                <p className="text-sm text-gray-400">Prompt-driven development. Ship in weeks, not quarters.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Battle-Tested</h3>
                <p className="text-sm text-gray-400">Same infrastructure powering $10M+ in annual revenue.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Fully Scalable</h3>
                <p className="text-sm text-gray-400">Cloud-native from day one. Built for growth.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl" />
            <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12">
              <h2 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4">Ready to build?</h2>
              <p className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Get a custom quote based on your project scope. From MVPs to enterprise platforms.
              </p>
              
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-white text-black font-semibold px-6 py-3 text-base sm:px-10 sm:py-4 sm:text-lg transition-all duration-300 hover:bg-gray-200 hover:scale-105 active:scale-95"
              >
                Request a Quote
              </a>
              <p className="text-sm text-gray-500 mt-6">
                Typical response time: 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
