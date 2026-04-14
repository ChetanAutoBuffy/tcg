import { useState } from "react";

const catalogData = [
  {
    id: "build",
    title: "BUILD",
    description: "Websites, apps, APIs, and platforms",
    gradient: "from-blue-500 to-cyan-400",
    bgGlow: "bg-blue-500/20",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    services: [
      {
        title: "Websites & Landing Pages",
        priceRange: "$1,500 - $7,000",
        shortDesc: "Fast, modern, conversion-optimized sites",
        longDesc: "Responsive websites built with React, Next.js, and Tailwind CSS. Optimized for SEO, performance, and conversions. Includes hosting setup, analytics, and CMS integration.",
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
        ),
      },
      {
        title: "Web Applications",
        priceRange: "$5,000 - $25,000",
        shortDesc: "Full-stack SaaS and custom apps",
        longDesc: "Production-ready web applications with modern authentication, databases, APIs, and real-time features. Built on React, Node.js, PostgreSQL, and deployed to AWS or Vercel.",
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
          </svg>
        ),
      },
      {
        title: "Mobile Apps",
        priceRange: "$10,000 - $50,000",
        shortDesc: "iOS and Android native or cross-platform",
        longDesc: "Cross-platform mobile apps with React Native or Flutter. Native iOS/Android apps with Swift/Kotlin. Includes app store deployment, push notifications, and backend integration.",
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        ),
      },
      {
        title: "APIs & Integrations",
        priceRange: "$2,000 - $10,000",
        shortDesc: "Connect your tools and systems",
        longDesc: "RESTful and GraphQL APIs, third-party integrations (Stripe, Shopify, HubSpot), webhooks, and custom middleware. Secure, scalable, and documented.",
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        ),
      },
      {
        title: "E-commerce Stores",
        priceRange: "$5,000 - $20,000",
        shortDesc: "Shopify, WooCommerce, or custom stores",
        longDesc: "Complete e-commerce solutions with product management, payment processing, inventory tracking, and order fulfillment. Integrates with Stripe, Shopify, or custom checkout.",
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        ),
      },
    ],
  },
  {
    id: "automate",
    title: "AUTOMATE",
    description: "AI agents, workflows, and integrations",
    gradient: "from-purple-500 to-pink-400",
    bgGlow: "bg-purple-500/20",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    services: [
      {
        title: "AI Chatbots",
        priceRange: "$2,000 - $5,000",
        shortDesc: "Smart customer support and sales bots",
        longDesc: "Custom chatbots powered by GPT-4 or Claude. Integrate with your website, Slack, or WhatsApp. Handles FAQs, lead qualification, and customer support 24/7.",
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        ),
      },
      {
        title: "n8n/Zapier Workflows",
        priceRange: "$1,000 - $3,000",
        shortDesc: "No-code automation between apps",
        longDesc: "Automated workflows connecting your favorite tools. Sync data, send notifications, process leads, and more. Built on n8n, Zapier, or Make (Integromat).",
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        ),
      },
      {
        title: "CRM Integrations",
        priceRange: "$1,500 - $5,000",
        shortDesc: "HubSpot, Salesforce, Pipedrive sync",
        longDesc: "Seamless CRM integrations and custom workflows. Automate lead routing, data enrichment, and follow-ups. Connects with HubSpot, Salesforce, Pipedrive, and more.",
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        ),
      },
      {
        title: "Email Automation",
        priceRange: "$1,000 - $3,000",
        shortDesc: "Campaigns, sequences, and triggers",
        longDesc: "Automated email campaigns and drip sequences. Trigger emails based on user behavior, integrate with your CRM, and track performance. Works with SendGrid, Mailgun, or Brevo.",
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        ),
      },
      {
        title: "Custom AI Agents",
        priceRange: "$5,000 - $15,000",
        shortDesc: "Autonomous agents for complex tasks",
        longDesc: "Advanced AI agents that perform multi-step tasks autonomously. Data analysis, content generation, research, code review, and more. Powered by GPT-4, Claude, or custom models.",
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        ),
      },
    ],
  },
  {
    id: "fix",
    title: "FIX",
    description: "Cleanup, audits, and optimization",
    gradient: "from-orange-500 to-yellow-400",
    bgGlow: "bg-orange-500/20",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    services: [
      {
        title: "Data Cleanup",
        priceRange: "$500 - $2,000",
        shortDesc: "Dedupe, normalize, and enrich data",
        longDesc: "Clean up messy databases and spreadsheets. Remove duplicates, fix formatting, merge records, and enrich with external data sources. Works with SQL, CSV, or APIs.",
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        ),
      },
      {
        title: "Code Audits",
        priceRange: "$1,000 - $3,000",
        shortDesc: "Security, performance, best practices",
        longDesc: "Comprehensive code review covering security vulnerabilities, performance bottlenecks, code quality, and architecture. Includes detailed report and actionable recommendations.",
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
        ),
      },
      {
        title: "Bug Fixes",
        priceRange: "$500 - $2,000",
        shortDesc: "Debug and resolve issues fast",
        longDesc: "Quick turnaround on bug fixes and issues. We diagnose the problem, patch the code, and deploy the fix. Includes testing to ensure no regressions.",
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
      },
      {
        title: "Database Migrations",
        priceRange: "$1,500 - $5,000",
        shortDesc: "Move data between systems safely",
        longDesc: "Migrate data from legacy systems to modern databases. MySQL to PostgreSQL, MongoDB to SQL, on-premise to cloud. Zero downtime migrations with rollback plans.",
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
          </svg>
        ),
      },
      {
        title: "Performance Optimization",
        priceRange: "$1,000 - $4,000",
        shortDesc: "Speed up slow apps and sites",
        longDesc: "Optimize load times, reduce bundle sizes, fix N+1 queries, add caching, and improve server response. Includes before/after performance reports and monitoring setup.",
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        ),
      },
    ],
  },
];

export default function ServicesCatalog() {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [expandedServices, setExpandedServices] = useState({});

  const toggleCategory = (categoryId) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
    // Reset expanded services when closing category
    if (expandedCategory === categoryId) {
      setExpandedServices({});
    }
  };

  const toggleService = (categoryId, serviceIndex) => {
    const key = `${categoryId}-${serviceIndex}`;
    setExpandedServices((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <section className="relative bg-black/50 backdrop-blur-sm text-white py-24 sm:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container-bleed relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-wider text-gray-400 mb-6">
            Services Catalog
          </div>
          <h2 className="text-4xl sm:text-6xl font-black mb-6 leading-tight">
            What We Can
            <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#2563EB,#9333EA,#EC4899)] animate-flow-synced"> Build For You</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Transparent pricing and detailed service offerings. Click any category to explore specific services and pricing.
          </p>
        </div>

        {/* Categories */}
        <div className="max-w-5xl mx-auto space-y-4">
          {catalogData.map((category) => {
            const isExpanded = expandedCategory === category.id;

            return (
              <div key={category.id} className="relative">
                {/* Category Header Button */}
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full text-left group focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black rounded-2xl transition-all duration-200"
                  aria-expanded={isExpanded}
                  aria-controls={`category-${category.id}`}
                >
                  <div
                    className={`relative bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 transition-all duration-300 ${
                      isExpanded
                        ? "bg-white/10 border-white/20"
                        : "hover:bg-white/8 hover:border-white/15"
                    }`}
                  >
                    {/* Background Glow */}
                    {isExpanded && (
                      <div className={`absolute inset-0 ${category.bgGlow} blur-2xl opacity-20 transition-opacity duration-300`} />
                    )}

                    <div className="relative flex items-center justify-between gap-4">
                      {/* Left: Icon + Title + Description */}
                      <div className="flex items-center gap-4 sm:gap-6 flex-1 min-w-0">
                        {/* Icon */}
                        <div
                          className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center transition-transform duration-300 ${
                            isExpanded ? "scale-110" : "group-hover:scale-105"
                          }`}
                        >
                          <div className="text-white">{category.icon}</div>
                        </div>

                        {/* Title + Description */}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl sm:text-2xl font-bold mb-1 tracking-wide">
                            {category.title}
                          </h3>
                          <p className="text-sm sm:text-base text-gray-400 truncate sm:whitespace-normal">
                            {category.description}
                          </p>
                        </div>
                      </div>

                      {/* Right: Expand Icon */}
                      <div className="flex-shrink-0">
                        <div
                          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/5 flex items-center justify-center transition-transform duration-300 ${
                            isExpanded ? "rotate-180" : "group-hover:bg-white/10"
                          }`}
                        >
                          <svg
                            className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>

                {/* Expanded Services */}
                {isExpanded && (
                  <div
                    id={`category-${category.id}`}
                    className="mt-4 space-y-3 animate-fadeIn"
                  >
                    {category.services.map((service, idx) => {
                      const serviceKey = `${category.id}-${idx}`;
                      const isServiceExpanded = expandedServices[serviceKey];

                      return (
                        <div
                          key={idx}
                          className="bg-white/5 border border-white/10 rounded-xl overflow-hidden transition-all duration-200 hover:bg-white/8 hover:border-white/15"
                        >
                          {/* Service Card */}
                          <div className="p-4 sm:p-6">
                            <div className="flex items-start gap-4">
                              {/* Icon */}
                              <div
                                className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${category.gradient} flex items-center justify-center`}
                              >
                                <div className="text-white">{service.icon}</div>
                              </div>

                              {/* Content */}
                              <div className="flex-1 min-w-0">
                                {/* Title + Price */}
                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                                  <h4 className="text-lg sm:text-xl font-bold">
                                    {service.title}
                                  </h4>
                                  <div
                                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r ${category.gradient} text-white text-xs sm:text-sm font-bold whitespace-nowrap`}
                                  >
                                    {service.priceRange}
                                  </div>
                                </div>

                                {/* Short Description */}
                                <p className="text-sm sm:text-base text-gray-400 mb-3">
                                  {service.shortDesc}
                                </p>

                                {/* Expanded Long Description */}
                                {isServiceExpanded && (
                                  <div className="mb-4 p-4 rounded-lg bg-white/5 border border-white/5 animate-fadeIn">
                                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                                      {service.longDesc}
                                    </p>
                                  </div>
                                )}

                                {/* Learn More Button */}
                                <button
                                  onClick={() => toggleService(category.id, idx)}
                                  className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black/50 rounded-lg px-3 py-2 -ml-3 min-h-[44px]"
                                  aria-expanded={isServiceExpanded}
                                >
                                  {isServiceExpanded ? "Show Less" : "Learn More"}
                                  <svg
                                    className={`w-4 h-4 transition-transform duration-200 ${
                                      isServiceExpanded ? "rotate-180" : ""
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M19 9l-7 7-7-7"
                                    />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="max-w-3xl mx-auto text-center mt-16">
          <p className="text-gray-400 mb-6">
            Don't see what you need? We build custom solutions too.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold px-8 py-4 min-h-[52px] transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
          >
            Get a Custom Quote
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-24 h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      {/* Inline Animation Styles */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}
