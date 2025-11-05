import { Link } from "react-router-dom";
import { pressReleases } from "../data/pressReleases";

export default function PressReleases() {
  return (
    <section className="relative bg-black text-white py-16 sm:py-20 overflow-hidden">
      <div className="container-bleed relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-4">
            Press & Announcements
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Latest news, updates, and official releases from The Chadha Group.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-6">
          {pressReleases.map((release, idx) => (
            <Link
              key={idx}
              to={`/press/${release.slug}`}
              className="block bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 hover:border-white/20 transition-all group"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {release.title}
                </h3>
                {release.status === "live" ? (
                  <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs text-green-400 whitespace-nowrap">
                    <span className="relative flex h-2 w-2">
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    {release.date}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-1 text-xs text-yellow-400 whitespace-nowrap">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                    </span>
                    Coming Soon
                  </span>
                )}
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">{release.excerpt}</p>
              <div className="flex items-center gap-2 text-sm text-blue-400 font-semibold">
                Read Full Release
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black opacity-80"></div>
    </section>
  );
}
