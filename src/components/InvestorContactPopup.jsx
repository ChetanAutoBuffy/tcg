import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function InvestorContactPopup({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    investorType: "",
    investmentRange: "",
    timeframe: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const investorTypes = [
    "Private Equity",
    "Family Office",
    "Venture Capital",
    "Strategic Investor",
    "Angel Investor",
    "Other"
  ];

  const investmentRanges = [
    "$1M - $5M",
    "$5M - $10M",
    "$10M - $25M",
    "$25M - $50M",
    "$50M+",
    "Prefer not to disclose"
  ];

  const timeframes = [
    "3-6 months",
    "6-12 months",
    "12-18 months",
    "18+ months",
    "Just exploring"
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formsubmit.co/ajax/c.chadha@westarparts.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          investorType: formData.investorType,
          investmentRange: formData.investmentRange,
          timeframe: formData.timeframe,
          message: formData.message,
          _subject: `Investor Inquiry from ${formData.name} - ${formData.investorType}`,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", company: "", investorType: "", investmentRange: "", timeframe: "", message: "" });
        setTimeout(() => {
          setStatus(null);
          onClose();
        }, 2000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  useEffect(() => {
    if (!isOpen) return;
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[1200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative z-[1300] w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-black/95 shadow-[0_20px_45px_rgba(0,0,0,0.65)] max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-white/10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Investment Inquiry</h2>
            <p className="text-gray-400 text-sm mt-1">For serious partnership discussions</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-white/70 hover:text-white transition rounded-lg bg-white/10 hover:bg-white/20"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="px-8 py-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Info Row */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Full Name *</label>
                <input
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition"
                  name="name"
                  type="text"
                  placeholder="John Smith"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email Address *</label>
                <input
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition"
                  name="email"
                  type="email"
                  placeholder="john@fund.com"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            {/* Company */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Company/Fund Name *</label>
              <input
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition"
                name="company"
                type="text"
                placeholder="Acme Capital Partners"
                required
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              />
            </div>

            {/* Investment Details Row */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Investor Type *</label>
                <select
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition"
                  name="investorType"
                  required
                  value={formData.investorType}
                  onChange={(e) => setFormData({ ...formData, investorType: e.target.value })}
                >
                  <option value="" className="bg-black">Select type</option>
                  {investorTypes.map((type) => (
                    <option key={type} value={type} className="bg-black">{type}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Investment Range</label>
                <select
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition"
                  name="investmentRange"
                  value={formData.investmentRange}
                  onChange={(e) => setFormData({ ...formData, investmentRange: e.target.value })}
                >
                  <option value="" className="bg-black">Select range</option>
                  {investmentRanges.map((range) => (
                    <option key={range} value={range} className="bg-black">{range}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Timeframe</label>
                <select
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition"
                  name="timeframe"
                  value={formData.timeframe}
                  onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
                >
                  <option value="" className="bg-black">Select timeframe</option>
                  {timeframes.map((time) => (
                    <option key={time} value={time} className="bg-black">{time}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Investment Thesis & Interest *</label>
              <textarea
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition resize-none"
                name="message"
                rows="4"
                placeholder="Tell us about your investment thesis, what attracts you to TCG, and what type of partnership you envision..."
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>

            <button
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white text-black font-semibold px-6 py-4 text-base hover:bg-gray-200 transition disabled:opacity-50 disabled:cursor-not-allowed group"
              type="submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? (
                <>
                  <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending Inquiry...
                </>
              ) : (
                <>
                  Submit Investment Inquiry
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              )}
            </button>
          </form>

          {/* Toast Notifications */}
          {status === "success" && (
            <div className="mt-4 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm flex items-start gap-3 animate-in fade-in slide-in-from-bottom-4">
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Investment inquiry sent successfully! We'll be in touch within 24 hours.</span>
            </div>
          )}
          {status === "error" && (
            <div className="mt-4 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-start gap-3 animate-in fade-in slide-in-from-bottom-4">
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Something went wrong. Please try again later.</span>
            </div>
          )}

          {/* Disclaimer */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                <div className="text-sm text-yellow-400">
                  <p className="font-semibold mb-1">For Serious Inquiries Only</p>
                  <p className="text-yellow-400/80">We are selective with partnerships and only engage with qualified investors who align with our long-term vision.</p>
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="mt-6 grid sm:grid-cols-2 gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Savage, Maryland, USA</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Response time: 24 hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
