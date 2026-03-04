import { useState, useEffect } from "react";

const codeSnippets = [
  "const ai = await claude.init();",
  "deploy({ target: 'prod' });",
  "ship.fast({ quality: 'max' });",
];

export default function HeroMobile() {
  const [currentSnippet, setCurrentSnippet] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const snippet = codeSnippets[currentSnippet];
    let index = 0;
    setDisplayText("");

    const typeInterval = setInterval(() => {
      if (index <= snippet.length) {
        setDisplayText(snippet.slice(0, index));
        index++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length);
        }, 2000);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, [currentSnippet]);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[100vh] overflow-hidden bg-transparent text-white px-4 py-16">
      {/* Abstract Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-0 w-[300px] h-[300px] rounded-full bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-transparent blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-[250px] h-[250px] rounded-full bg-gradient-to-tl from-pink-600/15 via-orange-500/10 to-transparent blur-3xl" />

      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs uppercase tracking-wider text-gray-400 mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          AI-Native Software Studio
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl font-black leading-[1.1] tracking-tight mb-6">
          <span className="block">We Build</span>
          <span className="block text-transparent bg-clip-text bg-[linear-gradient(90deg,#2563EB,#9333EA,#EC4899,#F59E0B,#10B981,#2563EB)] animate-flow-synced">
            The Future
          </span>
        </h1>

        {/* Code Terminal */}
        <div className="mb-6 mx-auto max-w-xs">
          <div className="bg-black/80 border border-white/10 rounded-xl p-3 backdrop-blur-xl">
            <div className="flex gap-1.5 mb-2">
              <div className="w-2 h-2 rounded-full bg-red-500/60" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
              <div className="w-2 h-2 rounded-full bg-green-500/60" />
            </div>
            <div className="font-mono text-xs text-green-400 text-left">
              <span className="text-gray-500">$</span> {displayText}
              <span className="animate-pulse">▊</span>
            </div>
          </div>
        </div>

        {/* Subhead */}
        <p className="text-base text-gray-400 max-w-sm mx-auto leading-relaxed mb-8">
          Custom software, AI integration, and automation—built at the speed of thought.
        </p>

        {/* CTAs */}
        <div className="flex flex-col gap-3">
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-black font-bold px-6 py-3.5 text-sm"
          >
            See What We Build
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white"
          >
            Start a Project
          </a>
        </div>

        {/* Service Pills */}
        <div className="flex flex-wrap justify-center gap-2 mt-10 max-w-xs mx-auto">
          {["Custom Software", "AI Agents", "Consulting", "Training"].map((service) => (
            <div
              key={service}
              className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400"
            >
              {service}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
        <div className="text-[10px] text-gray-500 uppercase tracking-widest">Scroll</div>
        <div className="w-4 h-6 rounded-full border border-white/20 flex items-start justify-center p-1">
          <div className="w-0.5 h-1.5 rounded-full bg-white/40 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
