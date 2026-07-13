import { useState } from "react";

const BRAND = "ProfitLens";
const CALENDLY_URL = "#book"; // Replace with real Calendly link
const STRIPE_LITE_URL = "#"; // Replace with Stripe Payment Link for $497 tier

export default function ProfitLensLanding() {
  const [faqOpen, setFaqOpen] = useState(null);

  return (
    <div className="min-h-screen bg-stone-50 text-slate-900 antialiased">
      {/* ===== Top Bar ===== */}
      <header className="sticky top-0 z-50 bg-stone-50/90 backdrop-blur-md border-b border-slate-200">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
          <a href="#top" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.5l7-7 4 4 7-7m0 0v6m0-6h-6" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight">{BRAND}</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#what" className="text-sm font-semibold text-slate-700 hover:text-slate-900 transition">What We Do</a>
            <a href="#how" className="text-sm font-semibold text-slate-700 hover:text-slate-900 transition">How It Works</a>
            <a href="#pricing" className="text-sm font-semibold text-slate-700 hover:text-slate-900 transition">Pricing</a>
            <a href="#about" className="text-sm font-semibold text-slate-700 hover:text-slate-900 transition">About</a>
            <a
              href={CALENDLY_URL}
              className="inline-flex items-center justify-center min-h-[44px] rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm px-5 py-2.5 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              Book Free Audit
            </a>
          </div>
          <a
            href={CALENDLY_URL}
            className="md:hidden inline-flex items-center justify-center min-h-[44px] rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm px-4 py-2 transition-all"
          >
            Book Audit
          </a>
        </nav>
      </header>

      {/* ===== Hero ===== */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.08),_transparent_50%)]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">Now Accepting 5 New Clients</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6">
              Your business should be{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">profitable.</span>
              <br />
              We make sure of it.
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl">
              <span className="font-bold text-slate-900">AI + a real financial analyst.</span> We read your numbers, find the leaks, build the dashboards, and tell you exactly what to fix — every single month. Fast, clear, and built for owners who want answers, not spreadsheets.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href={CALENDLY_URL}
                className="inline-flex items-center justify-center gap-2 min-h-[56px] rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-base px-7 py-4 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 shadow-lg shadow-slate-900/10"
              >
                Book Your Free Profit Audit
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center min-h-[56px] rounded-xl bg-white hover:bg-stone-100 text-slate-900 font-bold text-base px-7 py-4 border-2 border-slate-300 hover:border-slate-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
              >
                See Pricing
              </a>
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <span className="font-medium">No CPA needed</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <span className="font-medium">Cancel anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <span className="font-medium">Reports in 7 days</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <span className="font-medium">Backed by an MBA-credentialed analyst</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Problem Strip ===== */}
      <section className="bg-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-400 mb-3">The Problem</p>
            <h2 className="text-3xl sm:text-5xl font-black leading-tight">
              You're working hard. But you don't actually know if you're making money.
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { q: "Am I actually profitable?", a: "QuickBooks says yes. Your bank account says maybe. Nobody's telling you the truth." },
              { q: "Where's my money going?", a: "Expenses creep up. Subscriptions stack. You haven't audited your spend in 18 months." },
              { q: "Should I hire? Cut? Raise prices?", a: "Big decisions. Zero data. Just gut feel and stress." },
            ].map((item, i) => (
              <div key={i} className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6">
                <div className="text-emerald-400 text-2xl font-black mb-3">"{item.q}"</div>
                <p className="text-slate-300 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== What We Do ===== */}
      <section id="what" className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700 mb-3">What We Do</p>
            <h2 className="text-3xl sm:text-5xl font-black leading-tight tracking-tight mb-4">
              Everything a fractional CFO does. <span className="text-slate-500">At a fraction of the cost.</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Six core deliverables. Every month. Built with AI. Refined by a real analyst. Sent to your inbox before the 5th.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "P&L Creation & Analysis",
                desc: "We build your monthly Profit & Loss statement, line-by-line, and tell you what's healthy and what's bleeding.",
                icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              },
              {
                title: "Custom KPI Dashboards",
                desc: "Live dashboard with your numbers updated weekly. Revenue, margin, cash, runway — the metrics that actually matter for your business.",
                icon: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
              },
              {
                title: "QuickBooks Management",
                desc: "We clean up your books, fix categorization errors, reconcile accounts, and make sure the data feeding your reports is actually accurate.",
                icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              },
              {
                title: "Profit Leak Detection",
                desc: "Every month we identify the top 3 places you're losing money — overpriced vendors, unprofitable clients, hidden fees. With dollar amounts.",
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              },
              {
                title: "Cash Flow Forecasting",
                desc: "12-week rolling forecast so you know if you can hire, invest, or need to raise. No more 'how much cash do I have?' panic on the 28th.",
                icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              },
              {
                title: "Financial Presentations",
                desc: "Board-ready decks for investors, banks, or partners. We turn your numbers into a story you can confidently tell anyone.",
                icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white border border-slate-200 rounded-2xl p-6 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-100/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 group-hover:bg-emerald-100 flex items-center justify-center mb-4 transition-colors duration-300">
                  <svg className="w-6 h-6 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 tracking-tight">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Add-ons strip */}
          <div className="mt-10 p-6 sm:p-8 bg-gradient-to-br from-amber-50 to-emerald-50 border border-amber-200 rounded-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-amber-800 mb-1">Also Available On Request</div>
                <p className="text-slate-800 font-semibold">
                  Tax planning · Pricing audits · Vendor negotiations · Financial modeling · Pre-fundraise prep
                </p>
              </div>
              <a href={CALENDLY_URL} className="inline-flex items-center justify-center min-h-[44px] rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm px-5 py-2.5 transition-all whitespace-nowrap">
                Get Custom Quote →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== AI + Real Analyst (the differentiator) ===== */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-emerald-900 via-emerald-800 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-300 mb-3">Why Us</p>
            <h2 className="text-3xl sm:text-5xl font-black leading-tight tracking-tight mb-4">
              AI + a real analyst.<br />
              <span className="text-emerald-300">Not one or the other.</span>
            </h2>
            <p className="text-lg text-emerald-50/80 leading-relaxed">
              Software gets you data. People get you insight. We give you both — at the speed software charges and the quality humans deliver.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="text-5xl font-black text-emerald-300 mb-3">80%</div>
              <div className="font-bold mb-2">AI-powered analysis</div>
              <p className="text-sm text-emerald-50/70 leading-relaxed">
                Claude reads your data, calculates margins, spots anomalies, and drafts the report — in minutes, not days.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="text-5xl font-black text-emerald-300 mb-3">20%</div>
              <div className="font-bold mb-2">Human judgment</div>
              <p className="text-sm text-emerald-50/70 leading-relaxed">
                Your dedicated analyst reviews everything, catches what AI misses, and translates numbers into action you can actually take.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="text-5xl font-black text-emerald-300 mb-3">100%</div>
              <div className="font-bold mb-2">Faster than agencies</div>
              <p className="text-sm text-emerald-50/70 leading-relaxed">
                Pilot takes 30+ days to onboard. Bookkeeper360 starts at $2K/mo. We deliver in 7 days, starting at $497.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== How It Works ===== */}
      <section id="how" className="py-20 sm:py-28 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700 mb-3">How It Works</p>
            <h2 className="text-3xl sm:text-5xl font-black leading-tight tracking-tight mb-4">
              From "I don't know my numbers" to "Here's exactly what to fix" — in 3 steps.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Connect or Upload",
                desc: "Drop your P&L, bank statements, Stripe export, or QuickBooks file in your private portal. Or link Shopify, Stripe, or QBO directly. Whatever's easiest.",
                time: "Day 1 · 10 minutes"
              },
              {
                num: "02",
                title: "AI Analyzes, We Refine",
                desc: "Claude reads everything overnight. Builds your P&L, dashboard, cash forecast. Your analyst reviews, fixes anything off, and adds the human insight AI can't.",
                time: "Days 2-6"
              },
              {
                num: "03",
                title: "You Get Clarity",
                desc: "By Day 7 you have a PDF report, live dashboard link, and a 5-minute Loom from your analyst walking you through the top 3 things to act on this month.",
                time: "Day 7 · Delivered"
              },
            ].map((s, i) => (
              <div key={i} className="relative">
                <div className="bg-white border border-slate-200 rounded-2xl p-7 h-full hover:border-emerald-300 hover:shadow-lg transition-all duration-300">
                  <div className="text-6xl font-black text-emerald-200 mb-4 leading-none">{s.num}</div>
                  <h3 className="text-xl font-bold mb-3 tracking-tight">{s.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">{s.desc}</p>
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    {s.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Pricing ===== */}
      <section id="pricing" className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700 mb-3">Pricing</p>
            <h2 className="text-3xl sm:text-5xl font-black leading-tight tracking-tight mb-4">
              Pick a plan. Cancel anytime.
            </h2>
            <p className="text-lg text-slate-600">
              No long contracts. No setup fees. Month-to-month, full transparency.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* LITE */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col">
              <div className="flex-1">
                <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Lite</div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-5xl font-black tracking-tight">$497</span>
                  <span className="text-slate-500 font-medium">/mo</span>
                </div>
                <p className="text-sm text-slate-600 mb-6">For solo operators who just want monthly clarity.</p>

                <div className="space-y-3 mb-8">
                  {[
                    "Monthly P&L analysis",
                    "Profit leak report (top 3 fixes)",
                    "5-min Loom walkthrough",
                    "PDF report delivered by 7th of month",
                    "Email support",
                  ].map((f, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                      <span className="text-sm text-slate-700">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <a
                href={STRIPE_LITE_URL}
                className="inline-flex items-center justify-center min-h-[52px] rounded-xl bg-white hover:bg-stone-100 text-slate-900 font-bold text-base px-6 py-3.5 border-2 border-slate-300 hover:border-slate-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
              >
                Start Now
              </a>
            </div>

            {/* STANDARD - featured */}
            <div className="relative bg-slate-900 text-white border-2 border-emerald-500 rounded-3xl p-8 flex flex-col shadow-2xl shadow-emerald-500/10 md:scale-[1.02]">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                  Most Popular
                </div>
              </div>
              <div className="flex-1">
                <div className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-2">Standard</div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-5xl font-black tracking-tight">$1,497</span>
                  <span className="text-slate-400 font-medium">/mo</span>
                </div>
                <p className="text-sm text-slate-300 mb-6">For growing businesses ready for real financial discipline.</p>

                <div className="space-y-3 mb-8">
                  {[
                    "Everything in Lite",
                    "Live custom KPI dashboard",
                    "12-week cash flow forecast",
                    "QuickBooks cleanup & management",
                    "Monthly 30-min strategy call",
                    "Slack/email support (24-hr response)",
                  ].map((f, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                      <span className="text-sm text-slate-200">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <a
                href={CALENDLY_URL}
                className="inline-flex items-center justify-center min-h-[52px] rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold text-base px-6 py-3.5 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                Book a Call →
              </a>
            </div>

            {/* PREMIUM */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col">
              <div className="flex-1">
                <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Premium</div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-5xl font-black tracking-tight">$3,997</span>
                  <span className="text-slate-500 font-medium">/mo</span>
                </div>
                <p className="text-sm text-slate-600 mb-6">For owners who want a true financial partner.</p>

                <div className="space-y-3 mb-8">
                  {[
                    "Everything in Standard",
                    "Weekly 30-min check-ins",
                    "Board/investor-ready monthly deck",
                    "Full financial model build & maintenance",
                    "Vendor & spend optimization audits",
                    "Pre-fundraise / loan-ready financials",
                    "On-demand WhatsApp Q&A",
                  ].map((f, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                      <span className="text-sm text-slate-700">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <a
                href={CALENDLY_URL}
                className="inline-flex items-center justify-center min-h-[52px] rounded-xl bg-white hover:bg-stone-100 text-slate-900 font-bold text-base px-6 py-3.5 border-2 border-slate-300 hover:border-slate-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
              >
                Talk to Us →
              </a>
            </div>
          </div>

          {/* Custom quote */}
          <div className="mt-10 max-w-3xl mx-auto p-7 bg-slate-900 text-white rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-1">Need something different?</div>
              <p className="text-lg font-semibold">
                Custom quotes for one-time projects, audits, or larger businesses ($5M+ revenue).
              </p>
            </div>
            <a href={CALENDLY_URL} className="inline-flex items-center justify-center min-h-[48px] rounded-xl bg-white hover:bg-stone-100 text-slate-900 font-bold text-sm px-6 py-3 transition-all whitespace-nowrap">
              Get Custom Quote
            </a>
          </div>
        </div>
      </section>

      {/* ===== About / Credibility ===== */}
      <section id="about" className="py-20 sm:py-28 bg-stone-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-square max-w-md mx-auto lg:mx-0 bg-gradient-to-br from-emerald-200 via-emerald-100 to-stone-200 rounded-3xl flex items-center justify-center">
              {/* Replace with real photo */}
              <div className="text-center px-8">
                <div className="w-32 h-32 rounded-full bg-emerald-700 mx-auto mb-4 flex items-center justify-center text-white text-5xl font-black">
                  R
                </div>
                <p className="text-sm text-emerald-900/60 font-medium">Photo of Rasnain goes here</p>
              </div>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-emerald-700 mb-3">Meet Your Analyst</p>
              <h2 className="text-3xl sm:text-5xl font-black leading-tight tracking-tight mb-6">
                Hi, I'm Rasnain. I'll be the one reading your numbers.
              </h2>
              <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
                <p>
                  I'm an MBA-credentialed financial operator with years of experience finding profit gaps, cleaning up books, and translating spreadsheets into decisions business owners can actually act on.
                </p>
                <p>
                  Most "fractional CFO" services take 30+ days to onboard you and charge $2,000+/month for the privilege of waiting. I built {BRAND} to fix that.
                </p>
                <p className="font-semibold text-slate-900">
                  Every report I send has my name on it. I review every number. AI is the engine — I'm the driver.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-300">
                <div>
                  <div className="text-3xl font-black text-emerald-700">MBA</div>
                  <div className="text-xs text-slate-600 mt-1 font-medium">Credentialed</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-emerald-700">7 days</div>
                  <div className="text-xs text-slate-600 mt-1 font-medium">First report</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-emerald-700">100%</div>
                  <div className="text-xs text-slate-600 mt-1 font-medium">Refund if unhappy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700 mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-5xl font-black leading-tight tracking-tight">
              Common questions
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "Do I need to be on QuickBooks?",
                a: "No. We work with QuickBooks, Xero, Wave, FreshBooks, or even messy Excel sheets. If you have numbers, we can analyze them."
              },
              {
                q: "Is this a replacement for my bookkeeper / accountant?",
                a: "No — and that's a feature. Your bookkeeper records transactions. We tell you what those transactions mean, where you're leaking money, and what to do about it. We work alongside your existing finance team, not against them."
              },
              {
                q: "How is this different from Pilot, Bookkeeper360, or Bench?",
                a: "Three things: (1) Faster — first report in 7 days, not 30. (2) Cheaper — Pilot's CFO tier starts at $1,750/mo, ours at $497. (3) Personal — you get a real analyst's Loom every month, not a generic dashboard."
              },
              {
                q: "What if I don't have organized data yet?",
                a: "That's fine — most clients don't. As part of onboarding, we clean up and organize whatever you have. By month 2, your books are clean and reports become routine."
              },
              {
                q: "Can I cancel anytime?",
                a: "Yes. Month-to-month, no contracts. Cancel from your Stripe portal in 2 clicks. We also offer a 30-day money-back guarantee on your first month if you're not happy."
              },
              {
                q: "Is my financial data safe?",
                a: "Absolutely. All data lives in your private encrypted Google Drive folder. We sign NDAs on request. We never share, sell, or train AI on your data."
              },
              {
                q: "Who is this for?",
                a: "Service businesses, agencies, consultants, e-commerce brands, and SaaS founders doing $20K–$1M/month in revenue who want financial clarity without hiring a full-time CFO."
              },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left min-h-[64px] hover:bg-stone-50 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-inset"
                  aria-expanded={faqOpen === i}
                >
                  <span className="font-bold text-slate-900 text-base">{item.q}</span>
                  <svg
                    className={`w-5 h-5 text-slate-500 flex-shrink-0 transition-transform duration-200 ${faqOpen === i ? "rotate-180" : ""}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {faqOpen === i && (
                  <div className="px-5 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Final CTA ===== */}
      <section id="book" className="py-20 sm:py-28 bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(16,185,129,0.15),_transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-6xl font-black leading-tight tracking-tight mb-6">
            Stop guessing if you're profitable.
          </h2>
          <p className="text-xl text-emerald-50/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Book a free 15-minute audit call. We'll review one of your recent months together and show you exactly what we'd do. No pitch, no pressure.
          </p>
          <a
            href={CALENDLY_URL}
            className="inline-flex items-center justify-center gap-2 min-h-[60px] rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold text-lg px-8 py-5 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-slate-900 shadow-2xl shadow-emerald-500/20"
          >
            Book Your Free Profit Audit
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <p className="mt-6 text-sm text-emerald-100/60">
            Takes 15 minutes. No commitment. Walk away with at least one actionable insight.
          </p>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="bg-slate-950 text-slate-400 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.5l7-7 4 4 7-7m0 0v6m0-6h-6" />
                </svg>
              </div>
              <span className="font-bold text-white">{BRAND}</span>
            </div>
            <p className="text-sm">© 2026 {BRAND}. AI-powered financial clarity for real businesses.</p>
            <a href="mailto:hello@profitlens.ai" className="text-sm hover:text-white transition">hello@profitlens.ai</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
