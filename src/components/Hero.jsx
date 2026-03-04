import { useState, useEffect } from "react";

const codeSnippets = [
  "const ai = await claude.init();",
  "deploy({ target: 'production' });",
  "ship.fast({ quality: 'max' });",
  "automate.everything();",
];

const floatingWords = [
  { text: "BUILD", x: 15, y: 20, size: "text-6xl", opacity: 0.03 },
  { text: "SHIP", x: 70, y: 35, size: "text-5xl", opacity: 0.04 },
  { text: "SCALE", x: 25, y: 65, size: "text-7xl", opacity: 0.025 },
  { text: "AUTOMATE", x: 60, y: 80, size: "text-4xl", opacity: 0.035 },
  { text: "AI", x: 85, y: 15, size: "text-8xl", opacity: 0.04 },
  { text: "FAST", x: 10, y: 85, size: "text-5xl", opacity: 0.03 },
];

export default function Hero() {
  const [currentSnippet, setCurrentSnippet] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const snippet = codeSnippets[currentSnippet];
    let index = 0;
    setIsTyping(true);
    setDisplayText("");

    const typeInterval = setInterval(() => {
      if (index <= snippet.length) {
        setDisplayText(snippet.slice(0, index));
        index++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
        setTimeout(() => {
          setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length);
        }, 2000);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, [currentSnippet]);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[100vh] overflow-hidden bg-transparent text-white">
      {/* Abstract Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:20px_20px]" />
      </div>

      {/* Floating Abstract Words */}
      {floatingWords.map((word, idx) => (
        <div
          key={idx}
          className={`absolute font-black ${word.size} text-white select-none pointer-events-none`}
          style={{
            left: `${word.x}%`,
            top: `${word.y}%`,
            opacity: word.opacity,
            transform: "translate(-50%, -50%)",
          }}
        >
          {word.text}
        </div>
      ))}

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-transparent blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-pink-600/15 via-orange-500/10 to-transparent blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-green-500/5 via-cyan-500/5 to-blue-500/5 blur-3xl" />

      {/* Floating Code Terminal */}
      <div className="absolute top-20 right-10 sm:right-20 hidden lg:block">
        <div className="bg-black/80 border border-white/10 rounded-xl p-4 backdrop-blur-xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
          <div className="flex gap-1.5 mb-3">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          </div>
          <div className="font-mono text-sm text-green-400">
            <span className="text-gray-500">$</span> {displayText}
            <span className={`${isTyping ? 'opacity-100' : 'opacity-0'} transition-opacity`}>▊</span>
          </div>
        </div>
      </div>

      {/* Floating Stats */}
      <div className="absolute bottom-32 left-10 sm:left-20 hidden lg:block">
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
          <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">10x</div>
          <div className="text-xs text-gray-400 uppercase tracking-wider">Faster Delivery</div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-bleed text-center px-4 sm:px-6 py-20">
        {/* Pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-wider text-gray-400 mb-8 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          AI-Native Software Studio
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight mb-8">
          <span className="block">We Build</span>
          <span className="block text-transparent bg-clip-text bg-[linear-gradient(90deg,#2563EB,#9333EA,#EC4899,#F59E0B,#10B981,#2563EB)] animate-flow-synced">
            The Future
          </span>
        </h1>

        {/* Subhead */}
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-6">
          Custom software, AI integration, and automation—built at the speed of thought.
          We leverage Claude, GPT, and cutting-edge AI to ship what others can't.
        </p>

        <p className="text-base text-gray-500 max-w-xl mx-auto mb-12">
          From MVPs to enterprise platforms. Consulting to full implementation.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <a
            href="#services"
            className="group relative inline-flex items-center justify-center rounded-xl bg-white text-black font-bold px-8 py-4 text-base sm:text-lg transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              See What We Build
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl border border-white/20 px-8 py-4 text-base sm:text-lg font-semibold text-white hover:bg-white/10 transition-all duration-300"
          >
            Start a Project
          </a>
        </div>

        {/* Service Pills */}
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {["Custom Software", "AI Agents", "Consulting", "Training", "Automation", "Full-Stack"].map((service) => (
            <div
              key={service}
              className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
            >
              {service}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="text-xs text-gray-500 uppercase tracking-widest">Scroll</div>
        <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 rounded-full bg-white/40 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
