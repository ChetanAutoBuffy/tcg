export default function Family() {
  const familyMembers = [
    {
      name: "Hardeep Chadha",
      role: "Chairman",
      generation: "3rd Generation",
      focus: "Operations & Trade",
    },
    {
      name: "Chetan Chadha",
      role: "CEO",
      generation: "4th Generation",
      focus: "Technology & Innovation",
    },
  ];

  const brands = [
    { name: "AutoBuffy", logo: "/src/assets/brands/autobuffy.png" },
    { name: "Westar", logo: "/src/assets/brands/westar.png" },
    { name: "Premium Shocks", logo: "/src/assets/brands/premium-shocks.png" },
    { name: "RC Auto", logo: "/src/assets/brands/rc-auto.png" },
  ];

  return (
    <section className="relative bg-black text-white py-16 sm:py-28 overflow-hidden">
      <div className="container-bleed relative z-10">
        {/* Family Leadership */}
        <div className="max-w-5xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-center mb-4 sm:mb-6">
            The Family Behind the Brands
          </h2>
          <p className="text-gray-300 text-center text-sm sm:text-lg leading-relaxed max-w-3xl mx-auto mb-12 sm:mb-16">
            Each generation has built upon the last — bringing new innovations, iterations, and 
            approaches to the automotive industry. Today, we combine four generations of trade 
            expertise with modern data mining, analytics, and technology to deliver insights and 
            products the industry has never seen before.
          </p>

          {/* Family Grid */}
          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {familyMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all text-center"
              >
                <div className="w-24 h-24 rounded-full bg-white/10 border-2 border-white/20 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white/40">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-sm text-gray-400 mb-2 italic">{member.generation}</p>
                <p className="text-base font-semibold text-white/80 mb-2">{member.role}</p>
                <p className="text-sm text-gray-400">{member.focus}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Data & Innovation Statement */}
        <div className="max-w-4xl mx-auto mb-16 sm:mb-20 text-center">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-12">
            <h3 className="text-xl sm:text-3xl font-bold mb-3 sm:mb-4">
              From Legacy to Data
            </h3>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-lg">
              Where our ancestors built with craftsmanship and trade relationships, we now leverage 
              <span className="text-white font-semibold"> data mining, predictive analytics, and automation</span> to 
              bring unprecedented insight to automotive commerce. This isn't just evolution — it's transformation.
            </p>
          </div>
        </div>

        {/* Brands Portfolio */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl sm:text-4xl font-bold text-center mb-3 sm:mb-4">
            Our Brands
          </h3>
          <p className="text-gray-400 text-center mb-10 text-sm sm:text-base">
            A growing portfolio of companies built on trust, precision, and innovation.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {brands.map((brand, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all flex items-center justify-center h-32"
              >
                {/* Placeholder for brand logos */}
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 bg-white/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-white/40">
                      {brand.name.charAt(0)}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-white/80">{brand.name}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Coming Soon Teaser */}
          <div className="mt-10 sm:mt-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-gray-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              More announcements coming soon
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 sm:mt-24 h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>

      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black opacity-80"></div>
    </section>
  );
}
