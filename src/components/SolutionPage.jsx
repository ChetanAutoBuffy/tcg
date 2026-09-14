import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { solutions } from "../data/solutions.js";
import LoadingDots from "./LoadingDots.jsx";

const SITE = "https://thechadhagroup.com";

export default function SolutionPage() {
  const { slug } = useParams();
  const solution = solutions.find((s) => s.slug === slug);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    _honey: "",
  });
  const [status, setStatus] = useState(null);

  // Not-found state
  if (!solution) {
    return (
      <div className="relative bg-black/50 backdrop-blur-sm text-white min-h-screen">
        <div className="relative z-10 container-bleed py-24 sm:py-32">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-wider text-gray-400 mb-8">
              Solution not found
            </div>
            <h1 className="text-4xl sm:text-5xl font-black mb-6 leading-tight">
              We couldn't find that solution
            </h1>
            <p className="text-lg text-gray-400 mb-10">
              The page you're looking for may have moved. Browse everything we build below.
            </p>
            <Link
              to="/solutions"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-black font-bold px-8 py-4 min-h-[48px] transition-all hover:bg-gray-200 hover:scale-105"
            >
              View all solutions
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const canonical = `${SITE}/solutions/${solution.slug}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Honeypot: if filled, silently pretend success (bot)
    if (formData._honey) {
      setStatus("success");
      return;
    }
    setStatus("sending");

    try {
      const response = await fetch("https://formsubmit.co/ajax/cchadha.tcg@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company || "Not provided",
          phone: formData.phone || "Not provided",
          message: formData.message,
          solution: solution.title,
          _subject: `TCG Lead — ${solution.title} — ${formData.company || formData.name}`,
          _captcha: "false",
          _template: "table",
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", company: "", phone: "", message: "", _honey: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  // JSON-LD: Service schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: solution.title,
    description: solution.metaDescription,
    serviceType: solution.eyebrow,
    areaServed: "US",
    provider: {
      "@type": "Organization",
      name: "The Chadha Group",
      url: SITE,
    },
    url: canonical,
  };

  // JSON-LD: FAQPage schema (critical for AI answers / rich results)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: solution.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <div className="relative bg-black/50 backdrop-blur-sm text-white min-h-screen overflow-x-hidden">
      <Helmet>
        <title>{solution.metaTitle}</title>
        <meta name="description" content={solution.metaDescription} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={solution.metaTitle} />
        <meta property="og:description" content={solution.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={solution.metaTitle} />
        <meta name="twitter:description" content={solution.metaDescription} />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(147,51,234,0.12)_0%,transparent_55%)]" />

      <div className="relative z-10 container-bleed py-16 sm:py-24">
        {/* Breadcrumb */}
        <div className="max-w-5xl mx-auto mb-8 text-sm text-gray-500">
          <Link to="/solutions" className="hover:text-white transition">Solutions</Link>
          <span className="mx-2 text-gray-600">/</span>
          <span className="text-gray-400">{solution.eyebrow}</span>
        </div>

        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-20 sm:mb-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-wider text-gray-400 mb-8">
            <span className="w-2 h-2 rounded-full bg-purple-500"></span>
            {solution.eyebrow}
          </div>
          <h1 className="text-4xl sm:text-6xl font-black mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#2563EB,#9333EA,#EC4899)] animate-flow-synced">
              {solution.title}
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            {solution.intro}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#lead-form"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-black font-bold px-8 py-4 min-h-[48px] transition-all hover:bg-gray-200 hover:scale-105"
            >
              Tell us the problem
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <Link
              to="/solutions"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 px-8 py-4 min-h-[48px] font-semibold text-white hover:bg-white/10 transition-all"
            >
              All solutions
            </Link>
          </div>
        </div>

        {/* Problems we solve */}
        <div className="max-w-5xl mx-auto mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-3">Problems we solve</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              If any of these sound like your day, there's software that fixes it.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {solution.painPoints.map((point) => (
              <div
                key={point}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-white/20 hover:bg-white/[0.04] transition-all"
              >
                <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M5.07 19h13.86c1.54 0 2.5-1.67 1.73-3L13.73 4a2 2 0 00-3.46 0L3.34 16c-.77 1.33.19 3 1.73 3z" />
                  </svg>
                </div>
                <p className="text-gray-300 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What we build */}
        <div className="max-w-5xl mx-auto mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-3">What we build</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Concrete deliverables, shaped to how your business actually runs.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {solution.whatWeBuild.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-white/20 hover:bg-white/[0.04] transition-all"
              >
                <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-300 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Proof strip */}
        <div className="max-w-5xl mx-auto mb-24">
          <div className="grid sm:grid-cols-3 gap-4">
            {solution.proof.map((line, i) => {
              const gradients = [
                "from-blue-500 to-cyan-400",
                "from-purple-500 to-pink-400",
                "from-emerald-500 to-teal-400",
              ];
              return (
                <div
                  key={line}
                  className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-6"
                >
                  <div className={`absolute inset-x-0 top-0 h-0.5 rounded-t-2xl bg-gradient-to-r ${gradients[i % gradients.length]}`} />
                  <div className="text-[11px] uppercase tracking-wider text-gray-600 mb-2">
                    What we've done
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">{line}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-3">Questions we get asked</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Straight answers. If yours isn't here, ask us below.
            </p>
          </div>
          <div className="space-y-4">
            {solution.faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-white/20 transition-all"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-semibold text-white min-h-[44px]">
                  <span>{faq.q}</span>
                  <svg
                    className="w-5 h-5 flex-shrink-0 text-gray-400 group-open:rotate-180 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-400 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>

        {/* Lead form */}
        <div id="lead-form" className="max-w-3xl mx-auto mb-24 scroll-mt-24">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-black mb-3">Tell us the problem</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Describe what's slowing you down. We'll tell you — free — whether software can fix it,
              roughly what it takes, and what it saves you.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot — visually hidden, empty for humans */}
              <div className="absolute left-[-9999px] top-[-9999px]" aria-hidden="true">
                <label>
                  Leave this field empty
                  <input
                    type="text"
                    name="_honey"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData._honey}
                    onChange={(e) => setFormData({ ...formData, _honey: e.target.value })}
                  />
                </label>
              </div>

              {/* Name & Email */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="lf-name" className="block text-sm font-semibold text-gray-300 mb-2">Your Name *</label>
                  <input
                    id="lf-name"
                    className="w-full rounded-xl bg-black border border-white/10 px-4 py-3 text-base text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition min-h-[48px]"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="lf-email" className="block text-sm font-semibold text-gray-300 mb-2">Email *</label>
                  <input
                    id="lf-email"
                    className="w-full rounded-xl bg-black border border-white/10 px-4 py-3 text-base text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition min-h-[48px]"
                    name="email"
                    type="email"
                    placeholder="john@company.com"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              {/* Company & Phone */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="lf-company" className="block text-sm font-semibold text-gray-300 mb-2">Company</label>
                  <input
                    id="lf-company"
                    className="w-full rounded-xl bg-black border border-white/10 px-4 py-3 text-base text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition min-h-[48px]"
                    name="company"
                    type="text"
                    placeholder="Your company name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="lf-phone" className="block text-sm font-semibold text-gray-300 mb-2">Phone (optional)</label>
                  <input
                    id="lf-phone"
                    className="w-full rounded-xl bg-black border border-white/10 px-4 py-3 text-base text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition min-h-[48px]"
                    name="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="lf-message" className="block text-sm font-semibold text-gray-300 mb-2">What are you trying to accomplish? *</label>
                <textarea
                  id="lf-message"
                  className="w-full rounded-xl bg-black border border-white/10 px-4 py-3 text-base text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition resize-none"
                  name="message"
                  rows="5"
                  placeholder="Describe the bottleneck — what eats your team's time, where systems don't talk to each other, what you wish just worked."
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              {/* Submit */}
              <button
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white text-black font-bold px-6 py-4 min-h-[48px] text-base hover:bg-gray-200 transition disabled:opacity-50 disabled:cursor-not-allowed group"
                type="submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? (
                  <>
                    <LoadingDots colorClass="bg-black/70" />
                    <span className="text-sm font-medium text-black/70">Sending...</span>
                  </>
                ) : (
                  <>
                    Tell us the problem
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </form>

            {/* Status messages */}
            {status === "success" && (
              <div className="mt-4 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm flex items-start gap-3">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Got it — thanks. We'll get back to you within 24 hours with a straight answer.</span>
              </div>
            )}
            {status === "error" && (
              <div className="mt-4 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-start gap-3">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Something went wrong. Please try again in a moment.</span>
              </div>
            )}
          </div>
        </div>

        {/* Closing CTA band */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl" />
            <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 text-center">
              <h2 className="text-2xl sm:text-4xl font-bold mb-4">{solution.ctaLine}</h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Tell us the problem, we'll figure out the technology. No 40-page spec, no discovery
                retainer — just a fast, honest conversation about what to build.
              </p>
              <a
                href="#lead-form"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-black font-bold px-8 py-4 min-h-[48px] transition-all hover:bg-gray-200 hover:scale-105"
              >
                Tell us the problem
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
