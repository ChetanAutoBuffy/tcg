import buffy360Logo from "../assets/software/Buffy360-Logo.svg";
import ab7Logo from "../assets/software/ab7.svg";
import imageIqLogo from "../assets/software/IMAGEiq-Logo.svg";
import partsIqLogo from "../assets/software/PARTSiq-Logo.svg";
import { useState, useEffect } from "react";

function Modal({ open, onClose, title, children }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <div className="relative z-10 w-full max-w-2xl bg-black border border-white/10 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-xl font-bold">{title}</h4>
          <button className="text-gray-500 hover:text-gray-300" onClick={onClose}>
            ✕
          </button>
        </div>
        <div className="text-sm text-gray-300 space-y-4">{children}</div>
      </div>
    </div>
  );
}

export default function Technologies() {
  const [expandedTech, setExpandedTech] = useState(null);
  const [modal, setModal] = useState(null);
  const [typedCode, setTypedCode] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const fullCode = `const product = await tcg.search({
  query: "engine mount",
  year: 2024,
  make: "Toyota"
});

// Returns instant results
console.log(product.fitment);
// → { compatible: true, confidence: 0.98 }`;

  useEffect(() => {
    if (!isTyping) return;
    
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullCode.length) {
        setTypedCode(fullCode.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setTypedCode("");
          setIsTyping(false);
          setTimeout(() => setIsTyping(true), 500);
        }, 3000);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isTyping, fullCode]);

  useEffect(() => {
    setIsTyping(true);
  }, []);

  const technologies = [
    {
      name: "Buffy360",
      logo: buffy360Logo,
      description:
        "Run your entire product catalog from one system. Sync inventory, manage pricing rules, and publish to every channel — marketplaces, storefronts, wholesalers. Eliminates chaos and speeds up launches.",
      status: "Live",
      colorClass: "hover:brightness-100 hover:saturate-100",
      hoverColor: "hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]",
      details: (
        <>
          <p>
            <strong>What it does:</strong> Centralizes product master data, inventory sync, and pricing logic across web, marketplaces, and wholesale feeds.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-gray-300">
            <li>Feed builder for Google, Amazon, eBay, and custom channels</li>
            <li>Rule-based pricing & promotions with guardrails</li>
            <li>Delta inventory sync with conflict resolution</li>
            <li>Audit trails, rollbacks, and health dashboards</li>
          </ul>
          <p>
            <strong>Tech Stack:</strong> FastAPI + PostgreSQL + AWS Lambda + React
          </p>
          <p>
            <strong>Why it matters:</strong> Eliminates fragmentation and speeds up launches while protecting margins.
          </p>
        </>
      ),
    },
    {
      name: "ab7",
      logo: ab7Logo,
      description:
        "Automate marketing content that actually converts. Generate SEO-optimized descriptions, validate feeds before launch, and eliminate manual content work. Your team focuses on strategy, not data entry.",
      status: "Live",
      colorClass: "hover:brightness-100 hover:saturate-100",
      hoverColor: "hover:drop-shadow-[0_0_15px_rgba(20,184,166,0.6)]",
      details: (
        <>
          <p>
            <strong>Capabilities:</strong> Channel templating, schema-rich content generation, and KPI reporting across campaigns.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-gray-300">
            <li>Feed linting and validation before deployment</li>
            <li>Metadata + faceted copy generation for PDPs</li>
            <li>Automated search term harvesting and routing</li>
            <li>Campaign QA and anomaly alerts</li>
          </ul>
        </>
      ),
    },
    {
      name: "Image IQ",
      logo: imageIqLogo,
      description:
        "Transform product photos into professional, consistent images at scale. Auto-normalize backgrounds, enforce angle coverage, and tag components — so your catalog looks premium without the manual work.",
      colorClass: "hover:brightness-100 hover:saturate-100",
      hoverColor: "hover:drop-shadow-[0_0_15px_rgba(249,115,22,0.6)]",
      details: (
        <>
          <p>
            <strong>Pipeline:</strong> Intake → Quality checks → Angle coverage → Background normalization → Component tagging.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-gray-300">
            <li>Angle set enforcement (3+, 5+, or 8+ views)</li>
            <li>Auto-masking and shadow synthesis</li>
            <li>Kit bundle montage with callouts</li>
            <li>Variant detection to prevent image reuse errors</li>
          </ul>
        </>
      ),
    },
    {
      name: "Parts IQ",
      logo: partsIqLogo,
      description:
        "Verify fitment instantly and eliminate costly returns. Process ACES/PIES data, resolve conflicts, and guarantee customers get the right part — every single time.",
      status: "Live",
      colorClass: "hover:brightness-100 hover:saturate-100",
      hoverColor: "hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.6)]",
      details: (
        <>
          <p>
            <strong>Core:</strong> Normalizes vendor catalogs, resolves conflicts, and enriches with kit-level rules.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-gray-300">
            <li>ACES mapping with VIN pattern fallbacks</li>
            <li>PIES spec merge + dedupe across suppliers</li>
            <li>Return-reason feedback loop for rule updates</li>
            <li>Exporters for storefronts, WMS, and marketplaces</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <section className="relative bg-black text-white py-16 sm:py-20 overflow-hidden">
      <div className="container-bleed relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-10">
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-4">
            Ready-to-Use Technology
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            License the same platforms that power our brands — or build on our APIs. Proven in production, ready for your business.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-6">
          {technologies.map((tech, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all cursor-pointer"
              onClick={() =>
                setExpandedTech(expandedTech === idx ? null : idx)
              }
            >
              <div className="flex flex-col sm:flex-row items-center gap-8">
                <div className="flex-shrink-0 w-48 h-32 flex items-center justify-center">
                  <img
                    src={tech.logo}
                    alt={`${tech.name} logo`}
                    className={`w-full h-full object-contain transition-all duration-300 ${tech.colorClass} ${tech.hoverColor}`}
                    style={{ filter: "brightness(0) invert(1)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.filter = "none")}
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.filter = "brightness(0) invert(1)")
                    }
                  />
                </div>

                <div className="flex-1 text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between gap-3 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">{tech.name}</h3>
                    <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs text-green-400 whitespace-nowrap">
                      <span className="relative flex h-2 w-2">
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                      {tech.status}
                    </span>
                  </div>

                  {expandedTech === idx ? (
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {tech.description}
                    </p>
                  ) : (
                    <p className="text-sm text-gray-400 leading-relaxed line-clamp-2">
                      {tech.description}
                    </p>
                  )}

                  <div className="mt-3 flex items-center gap-4">
                    <button
                      className="text-xs text-gray-500 hover:text-gray-300 transition"
                      onClick={() =>
                        setExpandedTech(expandedTech === idx ? null : idx)
                      }
                    >
                      {expandedTech === idx ? "Show less ↑" : "Learn more ↓"}
                    </button>
                    <button
                      className="text-xs text-white underline decoration-white/30 hover:decoration-white"
                      onClick={() => setModal(tech)}
                    >
                      Open details ↗
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ride360 Coming Soon */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <h3 className="text-2xl sm:text-4xl font-bold">Ride360</h3>
              <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-1 text-xs text-yellow-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                </span>
                Coming Soon
              </span>
            </div>
            <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">
              AI Commerce Platform
            </p>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-lg">
              Ride360 will combine AI-powered search, intelligent recommendations, automated fitment verification, and predictive inventory into a seamless buying experience.
            </p>
          </div>
        </div>
        

        {/* Live Code Demo */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-3xl font-bold mb-3">See Our API in Action</h3>
            <p className="text-gray-400 text-xs sm:text-base">Real-time fitment verification. Lightning fast.</p>
          </div>
          
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-black border border-white/10 rounded-2xl overflow-hidden">
              {/* Terminal Header */}
              <div className="bg-white/5 border-b border-white/10 px-6 py-3 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <span className="ml-4 text-sm text-gray-500 font-mono">tcg-api-demo.js</span>
              </div>
              
              {/* Code Content */}
              <div className="p-6 font-mono text-sm">
                <pre className="text-green-400">
                  <code>{typedCode}</code>
                  <span className="animate-pulse">▊</span>
                </pre>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <a
              href="/api"
              className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 font-semibold transition"
            >
              Explore Full API Documentation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-24 h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black opacity-80"></div>

      <Modal open={!!modal} onClose={() => setModal(null)} title={modal?.name}>
        {modal?.details}
      </Modal>
    </section>
  );
}
