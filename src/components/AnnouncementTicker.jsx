import React, { useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

export default function AnnouncementTicker({ onContactClick }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const messages = [
    { mobile: "AutoBuffy.com Is Now Live!", desktop: "AutoBuffy.com Is Officially Live — Quality Parts, Trusted Brands, Smarter Fitment" },
    { mobile: "FCS • KYB • Monroe • MOOG & More", desktop: "Carrying FCS, KYB, Monroe, MOOG, Detroit Axle, TrakMotive, Bosch, Dorman & Westar" },
    { mobile: "Kits Built for Your Vehicle", desktop: "Kits on Demand — Built Specifically for Each Vehicle and Repair" },
    { mobile: "Powered by TCG Technology", desktop: "Powered by TCG Technology — AI-Driven Fitment Intelligence" }
  ];

  // Rotate messages every 4 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Ticker Banner */}
      <div className="relative bg-gradient-to-r from-black via-purple-950 to-black border-b border-purple-500/20 text-white py-2 overflow-hidden z-[60]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(147,51,234,0.1),transparent)] animate-shimmer" 
             style={{ backgroundSize: '200% 100%' }} />
        
        <div className="container-bleed relative z-10 flex items-center justify-between gap-3 px-4">
          {/* Blinking Dot */}
          <span className="relative flex h-2 w-2 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-400"></span>
          </span>

          {/* Fading Message */}
          <div className="flex-1 relative h-6 flex items-center justify-start sm:justify-center">
            {messages.map((msg, idx) => (
              <p
                key={idx}
                className={`absolute inset-0 flex items-center justify-start sm:justify-center text-xs sm:text-sm text-white transition-opacity duration-700 ${
                  idx === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <span className="block sm:hidden">{msg.mobile}</span>
                <span className="hidden sm:block">{msg.desktop}</span>
              </p>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <Link
              to="/press/autobuffy-officially-live"
              className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg text-[10px] sm:text-xs font-semibold hover:bg-white/20 transition whitespace-nowrap"
            >
              Read Release
            </Link>
            
            <button
              onClick={onContactClick}
              className="hidden sm:inline-flex px-3 py-1 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 text-purple-200 rounded-lg text-[10px] sm:text-xs font-semibold hover:bg-purple-500/30 transition whitespace-nowrap"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </>
  );
}