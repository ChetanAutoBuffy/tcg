export default function Kits() {
  return (
    <section className="relative bg-black text-white py-16 sm:py-20 overflow-hidden">
      <div className="container-bleed relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-4">
            The Kit Revolution
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mb-6">
            Complete solutions. AI-verified fitment. No guesswork.
          </p>
          <p className="text-gray-300 text-sm sm:text-base max-w-3xl mx-auto">
            The industry has struggled with fragmented catalogs and incorrect fitments for decades. 
            <span className="text-white font-semibold"> We're changing that.</span> Through AI and data mining, 
            TCG is leading the kit-building movement.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center">
              Why Kits Matter
            </h3>
            <div className="grid sm:grid-cols-2 gap-8 text-sm sm:text-base">
              <div>
                <h4 className="font-semibold text-white mb-2">Complete Solutions</h4>
                <p className="text-gray-300">
                  All necessary components packaged together — no missing bolts, brackets, or hardware.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Guaranteed Fitment</h4>
                <p className="text-gray-300">
                  AI-verified compatibility across year, make, model, and trim level eliminating returns.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Time Savings</h4>
                <p className="text-gray-300">
                  Mechanics spend less time sourcing individual parts and more time on productive work.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Higher Margins</h4>
                <p className="text-gray-300">
                  Bundled kits command premium pricing while delivering measurable value to customers.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Reduced SKU Complexity</h4>
                <p className="text-gray-300">
                  One kit replaces dozens of individual parts, simplifying inventory and logistics.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Customer Confidence</h4>
                <p className="text-gray-300">
                  DIY customers get professional-grade solutions without expert knowledge required.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-24 h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>

      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black opacity-80"></div>
    </section>
  );
}