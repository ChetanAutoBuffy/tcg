import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams, Navigate } from "react-router-dom";
import { getProductBySlug, products } from "../data/products.js";

const ICONS = {
  rocket: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  globe: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  presentation: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  document: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  sparkles: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
  chat: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  ),
};

function ProductIntakeForm({ product }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    details: "",
    timeline: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const next = {};
    if (!formData.name.trim()) next.name = "Name is required";
    if (!formData.email.trim()) next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      next.email = "Please enter a valid email address";
    if (!formData.details.trim()) next.details = "Tell us a bit about your project";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    if (!validate()) {
      e.preventDefault();
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSuccess(true);
      setIsSubmitting(false);
    }, 1000);
  };

  if (isSuccess) {
    return (
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm text-center">
        <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-white">Order received!</h3>
        <p className="text-gray-300 mb-2">
          We've got your <span className="font-semibold text-white">{product.shortName}</span> request.
        </p>
        <p className="text-gray-400 text-sm">
          You'll get a confirmation email + payment link within 1 hour.
        </p>
      </div>
    );
  }

  return (
    <form
      action="https://formsubmit.co/chetan@autobuffy.com"
      method="POST"
      onSubmit={handleSubmit}
      className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm"
      noValidate
    >
      {/* Hidden FormSubmit fields — these become the order spec in your inbox */}
      <input type="hidden" name="_subject" value={`NEW ORDER: ${product.name} (${product.priceLabel})`} />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_next" value={typeof window !== "undefined" ? window.location.href : ""} />
      <input type="hidden" name="_autoresponse" value={`Hey ${formData.name || "there"},

Thanks for ordering ${product.name} from The Chadha Group.

We've got your request. Here's what happens next:
1. We'll send a secure payment link within 1 hour
2. Once payment clears, we kick off (delivery: ${product.delivery})
3. You'll hear from Chetan or the TCG team directly with a kickoff message

Need to add details or change something? Just reply to this email.

— TCG Team
https://thechadhagroup.com`} />
      <input type="hidden" name="product" value={product.name} />
      <input type="hidden" name="product_slug" value={product.slug} />
      <input type="hidden" name="price" value={product.priceLabel} />
      <input type="hidden" name="delivery" value={product.delivery} />

      <div className="mb-5">
        <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
          Name <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className={`w-full bg-white/5 border ${
            errors.name ? "border-red-500" : "border-white/10"
          } rounded-xl px-4 py-3 text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition min-h-[48px]`}
          placeholder="Your name"
        />
        {errors.name && <p className="mt-2 text-sm text-red-400">{errors.name}</p>}
      </div>

      <div className="mb-5">
        <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
          Email <span className="text-red-400">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={`w-full bg-white/5 border ${
            errors.email ? "border-red-500" : "border-white/10"
          } rounded-xl px-4 py-3 text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition min-h-[48px]`}
          placeholder="you@example.com"
        />
        {errors.email && <p className="mt-2 text-sm text-red-400">{errors.email}</p>}
      </div>

      <div className="mb-5">
        <label htmlFor="company" className="block text-sm font-semibold text-white mb-2">
          Company / Project name <span className="text-gray-500 font-normal text-xs">(optional)</span>
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition min-h-[48px]"
          placeholder="Acme Inc."
        />
      </div>

      <div className="mb-5">
        <label htmlFor="details" className="block text-sm font-semibold text-white mb-2">
          Project details <span className="text-red-400">*</span>
        </label>
        <textarea
          id="details"
          name="details"
          value={formData.details}
          onChange={handleChange}
          rows={5}
          required
          className={`w-full bg-white/5 border ${
            errors.details ? "border-red-500" : "border-white/10"
          } rounded-xl px-4 py-3 text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition resize-y min-h-[120px]`}
          placeholder="Tell us about your business, your offer, and what you need. The more detail the faster we deliver."
        />
        {errors.details && <p className="mt-2 text-sm text-red-400">{errors.details}</p>}
      </div>

      <div className="mb-6">
        <label htmlFor="timeline" className="block text-sm font-semibold text-white mb-2">
          When do you need this? <span className="text-gray-500 font-normal text-xs">(optional)</span>
        </label>
        <div className="relative">
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-xl pl-4 pr-12 py-3 text-base text-white appearance-none focus:outline-none focus:ring-2 focus:ring-purple-500 transition min-h-[48px] cursor-pointer"
            style={{ colorScheme: "dark" }}
          >
            <option value="" className="bg-gray-900">No rush — within delivery window</option>
            <option value="rush-24h" className="bg-gray-900">Rush — needed in 24 hrs (+ rush fee)</option>
            <option value="this-week" className="bg-gray-900">This week</option>
            <option value="next-week" className="bg-gray-900">Next week</option>
            <option value="just-exploring" className="bg-gray-900">Just exploring — not urgent</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full inline-flex items-center justify-center rounded-xl bg-gradient-to-r ${product.gradient} text-white font-bold px-6 py-4 text-base sm:text-lg transition-all hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 min-h-[56px]`}
      >
        {isSubmitting ? (
          <span className="flex items-center gap-3">
            <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Submitting...
          </span>
        ) : (
          <span>Order {product.shortName} — {product.priceLabel}</span>
        )}
      </button>

      <p className="text-center text-xs text-gray-500 mt-4">
        Secure payment link sent to your email within 1 hour.
      </p>
    </form>
  );
}

export default function ProductPage() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  if (!product) return <Navigate to="/products" replace />;

  const canonicalUrl = `https://thechadhagroup.com/products/${product.slug}`;

  // Product schema for Google rich results
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.seo.description,
    brand: { "@type": "Brand", name: "The Chadha Group" },
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: canonicalUrl,
    },
  };

  // FAQPage schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: product.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <Helmet>
        <title>{product.seo.title}</title>
        <meta name="description" content={product.seo.description} />
        <meta name="keywords" content={product.seo.keywords} />
        <link rel="canonical" href={canonicalUrl} />
        {/* Open Graph */}
        <meta property="og:title" content={product.seo.title} />
        <meta property="og:description" content={product.seo.description} />
        <meta property="og:type" content="product" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="The Chadha Group" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={product.seo.title} />
        <meta name="twitter:description" content={product.seo.description} />
        {/* Structured data */}
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* HERO */}
      <section className="relative pt-16 pb-12 sm:pt-24 sm:pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-600/15 via-pink-600/5 to-transparent blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-blue-600/10 via-cyan-600/5 to-transparent blur-3xl" />
        </div>

        <div className="container-bleed relative z-10">
          <div className="max-w-5xl mx-auto px-4">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-400">
              <Link to="/" className="hover:text-white transition">Home</Link>
              <span className="mx-2 text-gray-600">/</span>
              <Link to="/products" className="hover:text-white transition">Products</Link>
              <span className="mx-2 text-gray-600">/</span>
              <span className="text-white">{product.shortName}</span>
            </nav>

            <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10 items-start">
              {/* LEFT — Hero copy */}
              <div>
                <div className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-gradient-to-r ${product.gradient} bg-opacity-10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white mb-5`}>
                  <span>{product.category}</span>
                  <span className="text-white/60">·</span>
                  <span>Delivered in {product.delivery}</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-5 text-white">
                  {product.name}
                </h1>

                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8">
                  {product.tagline}
                </p>

                <div className="flex flex-wrap items-baseline gap-3 mb-3">
                  <div className={`text-5xl font-black bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}>
                    {product.priceLabel}
                  </div>
                  {product.compareAtLabel && (
                    <div className="text-2xl text-gray-500 line-through font-semibold">
                      {product.compareAtLabel}
                    </div>
                  )}
                  <div className="text-gray-500 text-sm">one-time · no subscription</div>
                </div>
                {product.saveLabel && (
                  <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 border border-emerald-500/30 px-3 py-1 text-xs font-bold text-emerald-300 mb-8">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {product.saveLabel}
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={product.stripeUrl || "#order"}
                    target={product.stripeUrl ? "_blank" : undefined}
                    rel={product.stripeUrl ? "noopener noreferrer" : undefined}
                    className={`inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r ${product.gradient} text-white font-bold px-6 py-4 text-base transition-all hover:scale-[1.02] active:scale-[0.98] min-h-[56px]`}
                  >
                    Order Now — {product.priceLabel}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <a
                    href="#demo"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 text-white font-semibold px-6 py-4 text-base hover:bg-white/10 transition-all min-h-[56px]"
                  >
                    See Examples
                  </a>
                </div>
              </div>

              {/* RIGHT — Problem/Solution card */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center text-white mb-4`}>
                  {ICONS[product.icon] || ICONS.sparkles}
                </div>
                <div className="mb-5">
                  <div className="text-xs font-bold uppercase tracking-wider text-red-400 mb-2">The Problem</div>
                  <p className="text-gray-300 text-sm leading-relaxed">{product.problem}</p>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">Our Solution</div>
                  <p className="text-gray-200 text-sm leading-relaxed">{product.solution}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section id="what-you-get" className="relative py-20 bg-black/30">
        <div className="container-bleed">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-white">What You Get</h2>
            <p className="text-gray-400 mb-10">Everything below is included in the {product.priceLabel} price. No upsells mid-project.</p>

            <div className="grid md:grid-cols-2 gap-4">
              {product.deliverables.map((item, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/[0.07] transition">
                  <div className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${product.gradient} flex items-center justify-center mt-0.5`}>
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1">{item.title}</div>
                      <div className="text-gray-400 text-sm leading-relaxed">{item.detail}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE NEED FROM YOU */}
      <section className="relative py-20">
        <div className="container-bleed">
          <div className="max-w-5xl mx-auto px-4 grid lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-white">What We Need From You</h2>
              <p className="text-gray-400 mb-6">
                The intake form below collects everything we need. Most clients fill it in 5 minutes.
              </p>
              <ul className="space-y-3">
                {product.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white mt-0.5">
                      {idx + 1}
                    </div>
                    <span className="text-gray-300 text-sm leading-relaxed">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-white">Timeline</h2>
              <p className="text-gray-400 mb-6">From order to delivery, here's what happens.</p>
              <div className="space-y-3">
                {product.timeline.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-4">
                    <div className={`flex-shrink-0 px-3 py-1 rounded-lg bg-gradient-to-r ${product.gradient} text-white text-xs font-bold uppercase tracking-wider`}>
                      {step.day}
                    </div>
                    <div className="text-gray-200 text-sm">{step.event}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEMOS / REAL EXAMPLES */}
      <section id="demo" className="relative py-20 bg-black/30">
        <div className="container-bleed">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
                Real Work · Live Examples
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-white">See What We've Built</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                {product.examplePortfolio}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <a
                href="https://autobuffy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/[0.08] hover:border-white/20 transition"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-2xl font-black text-white/80">AutoBuffy</span>
                </div>
                <div className="text-white font-bold mb-1">AutoBuffy.com</div>
                <div className="text-gray-400 text-xs mb-3">AI-search across 1M+ auto parts. Built in 2 weeks.</div>
                <div className="text-purple-400 text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  See live <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
              </a>
              <a
                href="https://westarauto.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/[0.08] hover:border-white/20 transition"
              >
                <div className="aspect-video bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-2xl font-black text-white/80">Westar</span>
                </div>
                <div className="text-white font-bold mb-1">Westar Auto</div>
                <div className="text-gray-400 text-xs mb-3">B2B auto parts platform. 5 pages, 5 days.</div>
                <div className="text-purple-400 text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  See live <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
              </a>
              <a
                href="https://thechadhagroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/[0.08] hover:border-white/20 transition"
              >
                <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-2xl font-black text-white/80">TCG</span>
                </div>
                <div className="text-white font-bold mb-1">TCG Agent Army</div>
                <div className="text-gray-400 text-xs mb-3">Claude-powered agents that run TCG itself. This site.</div>
                <div className="text-purple-400 text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  See live <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
              </a>
            </div>

            <p className="text-center text-gray-500 text-xs mt-6">
              Want a private sample for your industry? Request one in the form below.
            </p>
          </div>
        </div>
      </section>

      {/* BUILT BY CHETAN — TRUST SECTION */}
      <section className="relative py-20">
        <div className="container-bleed">
          <div className="max-w-5xl mx-auto px-4">
            <div className="bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-500/10 border border-white/10 rounded-3xl p-8 sm:p-12">
              <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-wider text-gray-300 mb-4">
                    Built & Backed By
                  </div>
                  <h2 className="text-3xl font-bold mb-2 text-white">Chetan Chadha</h2>
                  <p className="text-purple-300 text-sm font-semibold mb-4">Founder · The Chadha Group</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="text-xs bg-white/10 border border-white/20 rounded-full px-3 py-1 text-gray-200">Mechanical Eng → Prompt Eng</span>
                    <span className="text-xs bg-white/10 border border-white/20 rounded-full px-3 py-1 text-gray-200">Claude expert</span>
                    <span className="text-xs bg-white/10 border border-white/20 rounded-full px-3 py-1 text-gray-200">Built AutoBuffy</span>
                  </div>
                </div>
                <div>
                  <p className="text-gray-200 text-base leading-relaxed mb-5">
                    Mechanical engineer turned prompt engineer. I've spent the last few years
                    mastering AI-assisted development with the latest tools — Claude, OpenAI, n8n, custom agents.
                    I've shipped enterprise platforms, commerce systems, and AI agents that run real businesses.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-3 mb-6">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <div className="text-2xl font-black text-white mb-1">1M+</div>
                      <div className="text-xs text-gray-400">Auto parts indexed via AI search at AutoBuffy</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <div className="text-2xl font-black text-white mb-1">10+</div>
                      <div className="text-xs text-gray-400">Production AI agents running on Claude</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <div className="text-2xl font-black text-white mb-1">Since '86</div>
                      <div className="text-xs text-gray-400">Family business modernized with AI (Westar Auto)</div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-5">
                    Every product on this page is built using the same systems I use for my own companies.
                    No agency-of-agencies. No outsourced ops. You order, I see it, my team and I deliver.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      to="/products/1-on-1-with-chetan"
                      className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white font-semibold px-5 py-3 text-sm hover:scale-[1.02] transition"
                    >
                      Work 1-on-1 with Chetan
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                    <a
                      href="https://www.linkedin.com/in/chetan-chadha-80241465/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/20 text-white font-semibold px-5 py-3 text-sm hover:bg-white/10 transition"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ORDER FORM */}
      <section id="order" className="relative py-20 bg-black/30">
        <div className="container-bleed">
          <div className="max-w-2xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-white">Order Your {product.shortName}</h2>
              <p className="text-gray-400">
                Fill the form, we email you a payment link, then we start.
              </p>
            </div>
            <ProductIntakeForm product={product} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-20">
        <div className="container-bleed">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-white text-center">Frequently Asked</h2>
            <div className="space-y-3">
              {product.faq.map((item, idx) => (
                <details key={idx} className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/[0.07] transition">
                  <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                    <span className="text-white font-semibold text-base">{item.q}</span>
                    <svg className="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform group-open:rotate-180 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="mt-4 text-gray-300 text-sm leading-relaxed">{item.a}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CROSS-SELL */}
      <section className="relative py-20 bg-black/30">
        <div className="container-bleed">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-white text-center">You Might Also Need</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.filter((p) => p.slug !== product.slug).slice(0, 3).map((p) => (
                <Link
                  key={p.slug}
                  to={`/products/${p.slug}`}
                  className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/[0.08] hover:border-white/20 transition-all hover:scale-[1.02]"
                >
                  <div className={`text-xs font-bold uppercase tracking-wider bg-gradient-to-r ${p.gradient} bg-clip-text text-transparent mb-2`}>
                    {p.category}
                  </div>
                  <div className="text-white font-bold text-lg mb-1">{p.shortName}</div>
                  <div className="text-gray-400 text-sm mb-4 line-clamp-2">{p.tagline}</div>
                  <div className="flex items-center justify-between">
                    <div className="text-white font-bold">{p.priceLabel}</div>
                    <div className="text-gray-400 text-sm group-hover:text-white transition flex items-center gap-1">
                      View
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
