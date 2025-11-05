import { useState } from "react";
import InvestorContactPopup from "./InvestorContactPopup.jsx";

export default function InvestorRelations() {
  const [contactPopupOpen, setContactPopupOpen] = useState(false);
  
  const investorTypes = [
    {
      type: "Private Equity & Family Offices",
      fit: "Long-term growth with proven revenue streams across manufacturing, distribution, and retail.",
    },
    {
      type: "Venture Capital",
      fit: "Proprietary AI platforms with defensible moats and scalable SaaS potential.",
    },
    {
      type: "Strategic Partners",
      fit: "Vertical integration opportunities and co-development of automotive infrastructure.",
    },
  ];

  const advantages = [
    {
      title: "Proven Revenue",
      description: "100+ years of profitable operations.",
    },
    {
      title: "Proprietary Tech",
      description: "Fully-owned AI platforms solving billion-dollar problems.",
    },
    {
      title: "Vertical Integration",
      description: "Control from factory to checkout.",
    },
    {
      title: "Data Moat",
      description: "Proprietary fitment intelligence not replicable by competitors.",
    },
  ];

  return (
    <>
      <section className="relative bg-black text-white py-16 sm:py-20 overflow-hidden">
        <div className="container-bleed relative z-10">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Investment Opportunity
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              We're not actively seeking capital, but if you're interested in a rare opportunity—century-old operational excellence meets cutting-edge AI innovation.
            </p>
          </div>

          {/* Who Should Invest */}
          <div className="max-w-5xl mx-auto mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-6">
              Who Should Invest
            </h3>
            
            {/* Mobile: Horizontal Scroll */}
            <div className="block sm:hidden">
              <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
                {investorTypes.map((investor, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink-0 w-[85vw] bg-white/5 border border-white/10 rounded-2xl p-5 snap-center"
                  >
                    <h4 className="text-base font-bold text-white mb-2">{investor.type}</h4>
                    <p className="text-sm text-gray-300 leading-relaxed">{investor.fit}</p>
                  </div>
                ))}
              </div>
              <div className="text-center mt-3">
                <div className="text-xs text-gray-500">← Swipe →</div>
              </div>
            </div>

            {/* Desktop: Grid */}
            <div className="hidden sm:grid sm:grid-cols-3 gap-6">
              {investorTypes.map((investor, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
                >
                  <h4 className="text-base font-bold text-white mb-2">{investor.type}</h4>
                  <p className="text-sm text-gray-300 leading-relaxed">{investor.fit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Investment Advantages */}
          <div className="max-w-5xl mx-auto mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-6">
              Why TCG
            </h3>
            
            {/* Mobile: Horizontal Scroll */}
            <div className="block sm:hidden">
              <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
                {advantages.map((advantage, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink-0 w-[75vw] bg-white/5 border border-white/10 rounded-2xl p-5 snap-center"
                  >
                    <h4 className="text-base font-bold text-white mb-2">{advantage.title}</h4>
                    <p className="text-sm text-gray-300 leading-relaxed">{advantage.description}</p>
                  </div>
                ))}
              </div>
              <div className="text-center mt-3">
                <div className="text-xs text-gray-500">← Swipe →</div>
              </div>
            </div>

            {/* Desktop: Grid */}
            <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {advantages.map((advantage, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
                >
                  <h4 className="text-base font-bold text-white mb-2">{advantage.title}</h4>
                  <p className="text-sm text-gray-300 leading-relaxed">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Capital Focus - Compact */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold mb-4 text-center">
                If We Partner
              </h3>
              <div className="space-y-3 text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                  <p className="text-gray-300">
                    <span className="text-white font-semibold">Ride360:</span> AI commerce platform (12-18 months)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                  <p className="text-gray-300">
                    <span className="text-white font-semibold">Brand Growth:</span> Auto Buffy, Premium Shocks, RC Automotive
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                  <p className="text-gray-300">
                    <span className="text-white font-semibold">Automation:</span> Kit assembly robotics
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <button
              onClick={() => setContactPopupOpen(true)}
              className="inline-flex items-center justify-center rounded-xl bg-white text-black font-semibold px-8 py-3 text-sm sm:text-base transition hover:bg-gray-200"
            >
              Discuss Partnership
            </button>
            <p className="text-xs text-gray-500 mt-3">
              For serious inquiries only
            </p>
          </div>

          {/* Divider */}
          <div className="mt-16 h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>

        {/* Subtle background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black opacity-80"></div>
      </section>

      {/* Investor Contact Popup */}
      <InvestorContactPopup 
        isOpen={contactPopupOpen} 
        onClose={() => setContactPopupOpen(false)} 
      />
    </>
  );
}