import autoBuffyLogo from "../assets/brands/AutoBuffy-Logo.svg";
import premiumShocksLogo from "../assets/brands/PremiumShocks-Logo.svg";
import rcAutoLogo from "../assets/brands/RCAuto-Logo.svg";
import westarLogo from "../assets/brands/Westar-Logo.svg";
import { useState } from "react";
import AnimatedCounter from "./AnimatedCounter.jsx";

export default function Brands() {
  const [expandedBrand, setExpandedBrand] = useState(null);
  const brands = [
    {
      name: "Westar",
      logo: westarLogo,
      description:
        "Established in 1986, Westar is an industry leader in OE-quality engine mounts, strut mounts, and drive shaft components. With 3,200+ SKUs and ISO-certified manufacturing, Westar is evolving into a complete kit solutions provider — combining decades of engineering with modern automation.",
      status: { label: "Live", tone: "green" },
      focus: "Engine Mounts & Complete Kits",
      eta: null,
      stats: { skus: 3200, yearFounded: 1986 },
      colorClass: "hover:brightness-110 hover:saturate-100",
      hoverColor: "hover:drop-shadow-[0_0_15px_rgba(234,179,8,0.6)]",
    },
    {
      name: "Premium Shocks",
      logo: premiumShocksLogo,
      description:
        "OE-quality suspension components including complete strut assemblies, shocks, and coil springs. Expanding the vertical with complete kits for professional installers and performance enthusiasts.",
      status: { label: "Live", tone: "green" },
      focus: "Suspension Specialist",
      eta: null,
      stats: { products: 1500, rating: 98 },
      colorClass: "hover:brightness-100 hover:saturate-100",
      hoverColor: "hover:drop-shadow-[0_0_15px_rgba(255,165,0,0.6)]",
    },
    {
      name: "RC Automotive",
      logo: rcAutoLogo,
      description:
        "Top-ranked marketplace authority on eBay and Amazon — fast shipping, deep inventory, and reliability across channels.",
      status: { label: "Live", tone: "green" },
      focus: "Marketplace Authority",
      eta: null,
      stats: { orders: 50000, rating: 99 },
      colorClass: "hover:brightness-100 hover:saturate-100",
      hoverColor: "hover:drop-shadow-[0_0_15px_rgba(220,38,38,0.6)]",
    },
    {
      name: "Auto Buffy",
      logo: autoBuffyLogo,
      description:
        "Direct-to-consumer brand for complete automotive kits — from suspension assemblies to fitment-verified bundles. Relaunching with expanded catalog and a modern eCommerce stack.",
      status: { label: "Rebrand in Progress", tone: "yellow" },
      focus: "D2C Complete Kits",
      eta: "Relaunch ETA: Q1 2026",
      stats: null,
      colorClass: "hover:brightness-100 hover:saturate-100",
      hoverColor: "",
    },
  ];

  const Badge = ({ status }) => {
    const base =
      "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs whitespace-nowrap border ";
    if (status.tone === "green")
      return (
        <span
          className={
            base + "border-green-500/30 bg-green-500/10 text-green-400"
          }
        >
          <span className="relative flex h-2 w-2">
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          {status.label}
        </span>
      );
    if (status.tone === "yellow")
      return (
        <span
          className={
            base + "border-yellow-500/30 bg-yellow-500/10 text-yellow-400"
          }
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
          </span>
          {status.label}
        </span>
      );
    return (
      <span className={base + "border-white/20 text-gray-400"}>
        {status.label}
      </span>
    );
  };

  return (
    <section className="relative bg-black text-white py-16 sm:py-20 overflow-hidden">
      <div className="container-bleed relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-10">
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-4">The Brands You Trust</h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Every brand under TCG carries the same standard: if we put our name on it, it works. From Westar's legendary engine mounts to Premium Shocks' suspension—quality runs in the family.
          </p>
        </div>

        {/* Mobile: Horizontal Scroll */}
        <div className="block md:hidden">
          <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
            {brands.map((brand, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-[85vw] bg-white/5 border border-white/10 rounded-2xl p-6 snap-center"
                onClick={() => setExpandedBrand(expandedBrand === idx ? null : idx)}
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="w-32 h-24 flex items-center justify-center">
                    <img
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      className={`w-full h-full object-contain transition-all ${brand.colorClass}`}
                      style={{ filter: "brightness(0) invert(1)" }}
                    />
                  </div>
                  <div className="text-center w-full">
                    <h3 className="text-xl font-bold text-white mb-2">{brand.name}</h3>
                    <span className="inline-block text-xs text-gray-400 border border-white/20 rounded-full px-3 py-1 mb-3">
                      {brand.focus}
                    </span>
                    <div className="mb-3">
                      <Badge status={brand.status} />
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed line-clamp-3 mb-3">
                      {brand.description}
                    </p>
                    
                    {/* Stats */}
                    {brand.stats && (
                      <div className="flex gap-4 mt-4 pt-4 border-t border-white/10">
                        {brand.stats.skus && (
                          <div className="text-center">
                            <div className="text-lg font-bold text-white">
                              <AnimatedCounter end={brand.stats.skus} duration={2000} suffix="+" />
                            </div>
                            <div className="text-xs text-gray-500">SKUs</div>
                          </div>
                        )}
                        {brand.stats.products && (
                          <div className="text-center">
                            <div className="text-lg font-bold text-white">
                              <AnimatedCounter end={brand.stats.products} duration={2000} suffix="+" />
                            </div>
                            <div className="text-xs text-gray-500">Products</div>
                          </div>
                        )}
                        {brand.stats.orders && (
                          <div className="text-center">
                            <div className="text-lg font-bold text-white">
                              <AnimatedCounter end={brand.stats.orders} duration={2500} suffix="+" />
                            </div>
                            <div className="text-xs text-gray-500">Orders</div>
                          </div>
                        )}
                        {brand.stats.rating && (
                          <div className="text-center">
                            <div className="text-lg font-bold text-green-400">
                              <AnimatedCounter end={brand.stats.rating} duration={1500} suffix="%" />
                            </div>
                            <div className="text-xs text-gray-500">Rating</div>
                          </div>
                        )}
                        {brand.stats.yearFounded && (
                          <div className="text-center">
                            <div className="text-lg font-bold text-white">
                              {brand.stats.yearFounded}
                            </div>
                            <div className="text-xs text-gray-500">Founded</div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <div className="text-xs text-gray-500">← Swipe to see more →</div>
          </div>
        </div>

        {/* Desktop: Vertical Stack */}
        <div className="hidden md:block max-w-6xl mx-auto space-y-6">
          {brands.map((brand, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all cursor-pointer"
              onClick={() => setExpandedBrand(expandedBrand === idx ? null : idx)}
            >
              <div className="flex items-center gap-8">
                <div className="flex-shrink-0 w-48 h-32 flex items-center justify-center">
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className={`w-full h-full object-contain transition-all duration-300 ${brand.colorClass} ${brand.hoverColor}`}
                    style={{ filter: "brightness(0) invert(1)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.filter = "none")}
                    onMouseLeave={(e) => (e.currentTarget.style.filter = "brightness(0) invert(1)")}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-white">{brand.name}</h3>
                    <span className="text-xs text-gray-400 border border-white/20 rounded-full px-3 py-1 whitespace-nowrap">
                      {brand.focus}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <Badge status={brand.status} />
                    {brand.eta && <span className="text-xs text-gray-500">{brand.eta}</span>}
                  </div>
                  {expandedBrand === idx ? (
                    <p className="text-sm text-gray-300 leading-relaxed">{brand.description}</p>
                  ) : (
                    <p className="text-sm text-gray-400 leading-relaxed line-clamp-2">{brand.description}</p>
                  )}
                  <button className="text-xs text-gray-500 mt-3 hover:text-gray-300 transition">
                    {expandedBrand === idx ? "Show less ↑" : "Learn more ↓"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-12">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-2xl" />
            <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 text-center hover:bg-white/8 transition-all">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Why Our Customers Keep Coming Back
              </h3>
              <p className="text-gray-300 leading-relaxed text-base sm:text-lg max-w-2xl mx-auto">
                Fast shipping. Perfect fitment. No surprises. We built the technology behind the scenes so your experience is seamless. That's what a century of family expertise looks like in action.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black opacity-80"></div>
    </section>
  );
}
