import buffy360Logo from "../assets/software/Buffy360-Logo.svg";
import { useState, useRef, useEffect } from "react";

const features = [
  {
    icon: "📦",
    title: "Multi-Channel Order Management",
    description: "Automatically routes orders from eBay, Amazon, and your website to the right vendors. Intelligent matching based on stock, pricing, and freight costs."
  },
  {
    icon: "💰",
    title: "Smart Price Optimization",
    description: "Calculate optimal prices based on cost, demand, and channel requirements. Bulk pricing tiers, MOQ support, and one-click sync across all channels."
  },
  {
    icon: "🔄",
    title: "Real-Time Inventory Sync",
    description: "Sync 300,000+ SKUs from multiple vendors into one unified catalog. Prevents overselling with real-time stock monitoring and conflict resolution."
  },
  {
    icon: "📋",
    title: "Purchase Order Automation",
    description: "Complete PO lifecycle from creation to vendor submission to payment tracking. Built-in margin protection flags orders below profitability thresholds."
  },
  {
    icon: "🚚",
    title: "Tracking & Fulfillment",
    description: "Auto-sync tracking from vendors to customers. Push delivery confirmation to all channels with intelligent carrier selection."
  },
  {
    icon: "📊",
    title: "Enterprise Analytics",
    description: "Real-time dashboards for order velocity, sales trends, and fulfillment metrics. Complete audit trails and automated alerts for system health."
  },
];

export default function Technologies() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);
  const [typedCode, setTypedCode] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const fullCode = `const product = await tcg.search({
  query: "engine mount",
  year: 2024,
  make: "Toyota"
});

// Returns instant results
console.log(product.fitment);
// → { compatible: true, confidence: 0.98 }`;

  useEffect(() => {
    if (!isTyping) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullCode.length) {
        setTypedCode(fullCode.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setTypedCode("");
          setIsTyping(false);
          setTimeout(() => setIsTyping(true), 500);
        }, 3000);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isTyping, fullCode]);

  useEffect(() => {
    setIsTyping(true);
  }, []);

  // Handle scroll to update active dot
  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.offsetWidth * 0.85;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(newIndex, features.length - 1));
    }
  };

  // Scroll to specific card
  const scrollToCard = (index) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.offsetWidth * 0.85;
      scrollRef.current.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
      setActiveIndex(index);
    }
  };

  return (
    <section className="relative bg-black text-white py-16 sm:py-20 overflow-hidden">
      <div className="container-bleed relative z-10">
        {/* Header */}
        <div className="max-w-5xl mx-auto text-center mb-10">
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-4">
            Our Technology
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Enterprise-grade software powering our brands — battle-tested in production.
          </p>
        </div>

        {/* Buffy360 Hero Card */}
        <div className="max-w-5xl mx-auto mb-10">
          <div className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-white/10 rounded-3xl p-8 sm:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Logo */}
              <div className="flex-shrink-0">
                <img
                  src={buffy360Logo}
                  alt="Buffy360"
                  className="h-20 md:h-28 w-auto"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-3 mb-4">
                  <h3 className="text-2xl sm:text-3xl font-bold">Buffy360</h3>
                  <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs text-green-400">
                    <span className="relative flex h-2 w-2">
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    Live
                  </span>
                </div>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                  The complete commerce operating system. Manage inventory, pricing, orders, and fulfillment across every channel — from one powerful platform.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Swipeable Feature Cards */}
        <div className="max-w-5xl mx-auto">
          <h4 className="text-lg font-semibold text-white/80 mb-4 text-center">Key Capabilities</h4>

          {/* Scrollable container */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-[85%] sm:w-[45%] md:w-[30%] snap-start bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h5 className="text-lg font-bold mb-2">{feature.title}</h5>
                <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center gap-2 mt-4">
            {features.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToCard(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  activeIndex === idx ? 'bg-white w-6' : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Live Code Demo */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-3xl font-bold mb-3">See Our API in Action</h3>
            <p className="text-gray-400 text-xs sm:text-base">Real-time fitment verification. Lightning fast.</p>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-black border border-white/10 rounded-2xl overflow-hidden">
              {/* Terminal Header */}
              <div className="bg-white/5 border-b border-white/10 px-6 py-3 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <span className="ml-4 text-sm text-gray-500 font-mono">tcg-api-demo.js</span>
              </div>

              {/* Code Content */}
              <div className="p-6 font-mono text-sm">
                <pre className="text-green-400">
                  <code>{typedCode}</code>
                  <span className="animate-pulse">▊</span>
                </pre>
              </div>
            </div>
          </div>

          <div className="text-center mt-6">
            <a
              href="/api"
              className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 font-semibold transition"
            >
              Explore Full API Documentation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-24 h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black opacity-80"></div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
