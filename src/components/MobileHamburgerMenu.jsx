import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function MobileHamburgerMenu({ id, open, onClose, logo, links = [], onContactClick }) {
  useEffect(() => {
    if (!open) return;
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, [open]);

  if (!open) return null;

  return createPortal(
    <div
      id={id}
      className="fixed inset-0 z-[120] bg-black/98 backdrop-blur-2xl"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <img src={logo} alt="The Chadha Group" className="h-10 w-auto" />
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg bg-white/10 p-2 text-white/80 transition hover:bg-white/20 hover:text-white"
            aria-label="Close menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <nav className="flex-1 overflow-y-auto px-6 py-6 space-y-3">
          {links.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="block rounded-xl bg-white/5 border border-white/10 px-5 py-4 text-lg font-semibold text-white/90 transition hover:bg-white/10 hover:text-white"
              onClick={onClose}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        
        <div className="space-y-4 border-t border-white/10 px-6 pb-10 pt-6">
          <button
            onClick={() => {
              onContactClick();
              onClose();
            }}
            className="flex w-full items-center justify-center rounded-xl bg-white px-6 py-3 text-base font-semibold text-black transition hover:bg-gray-200"
          >
            Contact Us
          </button>
          
          <div className="flex items-center gap-4 justify-center">
            <a
              href="https://www.linkedin.com/in/chetan-chadha-80241465/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-[#0077B5] hover:bg-white/10 transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="mailto:c.chadha@westarparts.com"
              className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
          
          <p className="text-xs text-gray-500 text-center">
            © 2025 The Chadha Group · Privately Owned · Family Operated
          </p>
        </div>
      </div>
    </div>,
    document.body
  );
}