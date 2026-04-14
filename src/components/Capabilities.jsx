import { useState, useEffect } from "react";

const categories = [
  {
    id: "design",
    name: "Design",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    gradient: "from-pink-500 to-rose-500",
    services: [
      { name: "AI Image Generation", desc: "Custom AI-generated images—product mockups, social graphics, hero banners, thumbnails", turnaround: "Same day", price: "$25–$150" },
      { name: "Logo Design & Branding", desc: "AI-assisted logo creation with multiple concepts, color palettes, brand guidelines", turnaround: "1–2 days", price: "$75–$300" },
      { name: "Social Media Graphics", desc: "Branded templates for Instagram, Facebook, LinkedIn, Twitter. Consistent style.", turnaround: "1–2 days", price: "$50–$200" },
      { name: "Product Mockups", desc: "Photorealistic mockups for e-commerce: T-shirts, mugs, packaging, device screens", turnaround: "Same day", price: "$30–$100" },
      { name: "Infographics", desc: "Data-driven visual infographics for presentations, reports, marketing", turnaround: "1 day", price: "$50–$150" },
      { name: "Image Editing", desc: "Background removal, color correction, compositing, batch editing", turnaround: "Same day", price: "$15–$75" },
    ],
  },
  {
    id: "web",
    name: "Web Dev",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    gradient: "from-blue-500 to-cyan-500",
    services: [
      { name: "Landing Pages", desc: "High-converting single-page sites. Responsive, fast, SEO-optimized", turnaround: "1–2 days", price: "$100–$500" },
      { name: "React / Next.js Apps", desc: "Full interactive web apps with routing, state management, API integration, auth", turnaround: "3–7 days", price: "$500–$3K" },
      { name: "Portfolio Sites", desc: "Clean, modern portfolio sites for freelancers, photographers, developers", turnaround: "1–3 days", price: "$150–$500" },
      { name: "E-Commerce Stores", desc: "Shopify, WooCommerce, or custom Next.js + Stripe. Full store setup", turnaround: "5–10 days", price: "$1K–$5K" },
      { name: "WordPress Sites", desc: "Custom themes, plugin config, SEO setup, speed optimization", turnaround: "3–5 days", price: "$300–$1.5K" },
      { name: "Dashboards", desc: "Data dashboards with charts, tables, filters. React + Tailwind", turnaround: "3–7 days", price: "$500–$2.5K" },
      { name: "Bug Fixes", desc: "Debug HTML/CSS/JS issues, fix responsive breakpoints, resolve errors", turnaround: "Same day", price: "$25–$100/hr" },
      { name: "API Integration", desc: "Connect any frontend to REST/GraphQL APIs. Stripe, Twilio, SendGrid", turnaround: "1–3 days", price: "$100–$500" },
    ],
  },
  {
    id: "automation",
    name: "Automation",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    gradient: "from-green-500 to-emerald-500",
    services: [
      { name: "Python Scripts", desc: "Data processing, web scraping, file manipulation, API scripts, ETL pipelines", turnaround: "Same day", price: "$50–$300" },
      { name: "Web Scraping", desc: "Scrape any website: products, prices, reviews, contacts. Any scale", turnaround: "1–2 days", price: "$75–$400" },
      { name: "Browser Automation", desc: "Automate repetitive tasks: form filling, data entry, screenshot capture", turnaround: "1–2 days", price: "$100–$500" },
      { name: "Cron Jobs & Schedulers", desc: "Scheduled tasks: daily reports, auto-emails, data syncs, health checks", turnaround: "1 day", price: "$50–$200" },
      { name: "Email Automation", desc: "Automated sequences, drip campaigns, transactional emails", turnaround: "1–3 days", price: "$100–$500" },
      { name: "File Processing", desc: "Batch rename, convert, merge, split files. PDF, Excel, CSV, images", turnaround: "Same day", price: "$30–$150" },
      { name: "Slack / Discord Bots", desc: "Custom bots for notifications, commands, integrations, monitoring", turnaround: "2–4 days", price: "$200–$800" },
    ],
  },
  {
    id: "docs",
    name: "Documents",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    gradient: "from-amber-500 to-orange-500",
    services: [
      { name: "Excel / Google Sheets", desc: "Financial models, dashboards, automated reports, pivot tables, VBA macros", turnaround: "Same day", price: "$50–$300" },
      { name: "Word Documents", desc: "Professional reports, proposals, SOPs, contracts with proper formatting", turnaround: "Same day", price: "$30–$150" },
      { name: "PowerPoint Decks", desc: "Slide decks for pitches, board meetings, sales, training", turnaround: "1–2 days", price: "$75–$400" },
      { name: "PDF Creation & Editing", desc: "Generate PDFs, fill forms, merge/split, watermarks, extract tables", turnaround: "Same day", price: "$25–$100" },
      { name: "Data Entry & Cleanup", desc: "Clean messy datasets, deduplicate, validate, transform", turnaround: "Same day", price: "$20–$80/hr" },
      { name: "Resume Formatting", desc: "Professional ATS-optimized resumes in multiple formats", turnaround: "Same day", price: "$30–$75" },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    gradient: "from-violet-500 to-purple-500",
    services: [
      { name: "FastAPI / Flask", desc: "REST APIs, authentication, database models, background tasks, WebSocket", turnaround: "3–7 days", price: "$500–$3K" },
      { name: "Node.js / Express", desc: "Server-side APIs, middleware, auth, real-time features", turnaround: "3–7 days", price: "$500–$3K" },
      { name: "Database Design", desc: "Schema design, optimization, complex queries. MySQL, PostgreSQL, SQLite", turnaround: "1–3 days", price: "$100–$500" },
      { name: "Server Deployment", desc: "AWS EC2/RDS setup, Nginx config, SSL certs, CI/CD pipelines", turnaround: "1–3 days", price: "$200–$800" },
      { name: "Docker", desc: "Dockerfiles, docker-compose, multi-service setups, registry config", turnaround: "1–2 days", price: "$100–$400" },
      { name: "Monitoring & Alerts", desc: "Health checks, uptime monitoring, Slack/email alerts, log analysis", turnaround: "1–2 days", price: "$100–$400" },
      { name: "Bug Fixing", desc: "Trace and fix backend bugs, memory leaks, performance issues", turnaround: "Same day", price: "$50–$150/hr" },
    ],
  },
  {
    id: "ai",
    name: "AI & Data",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    gradient: "from-cyan-500 to-blue-500",
    services: [
      { name: "Data Analysis", desc: "Analyze datasets, generate insights, create charts and dashboards", turnaround: "1–3 days", price: "$100–$500" },
      { name: "AI Chatbot Development", desc: "Custom chatbots with knowledge bases, RAG, conversation flows", turnaround: "3–7 days", price: "$500–$2K" },
      { name: "Prompt Engineering", desc: "Optimized prompts and system instructions for any AI model", turnaround: "1–2 days", price: "$75–$300" },
      { name: "Data Transformation", desc: "Convert formats, reshape data, aggregate, filter, enrich datasets", turnaround: "Same day", price: "$30–$150" },
      { name: "Report Generation", desc: "Automated reports from databases or APIs. Scheduled, branded", turnaround: "2–5 days", price: "$200–$800" },
    ],
  },
  {
    id: "products",
    name: "Products",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    gradient: "from-fuchsia-500 to-pink-500",
    services: [
      { name: "Digital Templates", desc: "Sellable template packs: social media, presentations, planners", turnaround: "2–3 days", price: "$100–$400" },
      { name: "Printable Designs", desc: "Planners, trackers, journals, wall art for Etsy or Gumroad", turnaround: "1–2 days", price: "$50–$200" },
      { name: "Stock Image Packs", desc: "AI-generated stock image collections. Commercial license ready", turnaround: "2–3 days", price: "$100–$300" },
      { name: "SaaS Micro-Tools", desc: "Small web apps: invoice generators, calculators, converters", turnaround: "5–10 days", price: "$1K–$3K" },
      { name: "Notion Templates", desc: "Productivity templates, CRM systems, project trackers", turnaround: "1–2 days", price: "$50–$200" },
      { name: "E-Books & Guides", desc: "Write, format, design e-books. Cover design + interior layout", turnaround: "3–5 days", price: "$150–$600" },
      { name: "Course Materials", desc: "Slide decks, worksheets, quizzes for online courses", turnaround: "5–10 days", price: "$500–$2K" },
    ],
  },
];

// Animated counter component
function AnimatedNumber({ value, suffix = "" }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const duration = 1500;
    const start = Date.now();
    const end = start + duration;

    const tick = () => {
      const now = Date.now();
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));

      if (now < end) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, [value]);

  return <span>{display}{suffix}</span>;
}

export default function Capabilities() {
  const [activeCategory, setActiveCategory] = useState("design");
  const [hoveredService, setHoveredService] = useState(null);

  const active = categories.find((c) => c.id === activeCategory);
  const totalServices = categories.reduce((sum, cat) => sum + cat.services.length, 0);

  return (
    <section id="capabilities" className="relative bg-black text-white py-24 sm:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-600/10 via-pink-500/5 to-transparent blur-3xl animate-pulse" style={{ animationDuration: "8s" }} />
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-blue-600/10 via-cyan-500/5 to-transparent blur-3xl animate-pulse" style={{ animationDuration: "10s", animationDelay: "2s" }} />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* Noise texture */}
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }} />
      </div>

      <div className="container-bleed relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-wider text-gray-400 mb-6 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Full-Service AI Studio
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="block">Everything You Need.</span>
            <span className="block text-transparent bg-clip-text bg-[linear-gradient(90deg,#2563EB,#9333EA,#EC4899,#F59E0B,#10B981,#2563EB)] animate-flow-synced">
              Delivered Fast.
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            46 services. 8 categories. From same-day delivery to full product builds.
            AI-accelerated execution that traditional agencies can't match.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
          {[
            { value: 46, suffix: "+", label: "Services" },
            { value: 8, suffix: "", label: "Categories" },
            { value: 24, suffix: "hr", label: "Avg Delivery" },
            { value: 10, suffix: "x", label: "Faster" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="relative group p-4 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/10 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="text-3xl sm:text-4xl font-black text-white">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs sm:text-sm text-gray-500 mt-1 uppercase tracking-wider">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Category Tabs - Horizontal Scroll on Mobile */}
        <div className="relative mb-12">
          {/* Gradient fades */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none sm:hidden" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none sm:hidden" />

          <div className="flex gap-2 overflow-x-auto pb-2 px-2 sm:justify-center sm:flex-wrap scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`group relative flex items-center gap-2 px-4 sm:px-5 py-3 rounded-xl font-semibold text-sm whitespace-nowrap transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-white text-black shadow-lg shadow-white/10"
                    : "bg-white/[0.03] border border-white/[0.05] text-white/70 hover:text-white hover:bg-white/[0.06] hover:border-white/10"
                }`}
              >
                <span className={`transition-colors ${activeCategory === cat.id ? "text-black" : "text-white/50 group-hover:text-white/70"}`}>
                  {cat.icon}
                </span>
                <span>{cat.name}</span>
                <span className={`text-xs px-1.5 py-0.5 rounded-md ${
                  activeCategory === cat.id
                    ? "bg-black/10 text-black/60"
                    : "bg-white/[0.05] text-white/40"
                }`}>
                  {cat.services.length}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="relative">
          {/* Background glow for active category */}
          <div className={`absolute inset-0 bg-gradient-to-br ${active.gradient} opacity-[0.03] blur-3xl transition-all duration-500`} />

          <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {active.services.map((service, idx) => (
              <div
                key={service.name}
                className="group relative p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/15 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                onMouseEnter={() => setHoveredService(service.name)}
                onMouseLeave={() => setHoveredService(null)}
                style={{
                  animationDelay: `${idx * 50}ms`,
                }}
              >
                {/* Hover glow */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${active.gradient} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-300`} />

                {/* Content */}
                <div className="relative">
                  {/* Turnaround Badge */}
                  <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium mb-4 ${
                    service.turnaround === "Same day"
                      ? "bg-green-500/10 text-green-400 border border-green-500/20"
                      : "bg-white/[0.05] text-gray-400 border border-white/[0.05]"
                  }`}>
                    {service.turnaround === "Same day" && (
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                      </svg>
                    )}
                    {service.turnaround}
                  </div>

                  {/* Service Name */}
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/80 transition-all">
                    {service.name}
                  </h4>

                  {/* Description */}
                  <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2 group-hover:text-gray-400 transition-colors">
                    {service.desc}
                  </p>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-semibold bg-gradient-to-r ${active.gradient} bg-clip-text text-transparent`}>
                      {service.price}
                    </span>
                    <svg
                      className="w-5 h-5 text-white/20 group-hover:text-white/50 group-hover:translate-x-1 transition-all"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 sm:mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-white/[0.03] to-white/[0.01] border border-white/[0.05]">
            <div className="text-left">
              <h3 className="text-xl sm:text-2xl font-bold mb-1">Don't see what you need?</h3>
              <p className="text-gray-500 text-sm sm:text-base">If you can describe it, we can build it. Custom projects welcome.</p>
            </div>
            <a
              href="#contact"
              className="flex-shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-white text-black font-bold px-6 py-3 transition-all hover:scale-105 active:scale-95"
            >
              Get Custom Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="mt-24 h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </section>
  );
}
