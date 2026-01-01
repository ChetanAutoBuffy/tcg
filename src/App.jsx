import { Routes, Route, Link } from "react-router-dom";
import Hero from "./components/Hero.jsx";
import HeroMobile from "./components/HeroMobile.jsx";
import Technologies from "./components/Technologies.jsx";
import Brands from "./components/Brands.jsx";
import Legacy from "./components/Legacy.jsx";
import About from "./components/About.jsx";
import Terms from "./components/Terms.jsx";
import Contact from "./components/Contact.jsx";
import PressReleasePage from "./components/PressReleasePage.jsx";
import PressReleases from "./components/PressReleases.jsx";
import SoftwareArm from "./components/SoftwareArm.jsx";
import ApiPlatform from "./components/ApiPlatform.jsx";
import InvestorRelations from "./components/InvestorRelations.jsx";
import Footer from "./components/Footer.jsx";
import ContactPopup from "./components/ContactPopup.jsx";
import MobileHamburgerMenu from "./components/MobileHamburgerMenu.jsx";
import { useState } from "react";
import logoUrl from "./assets/TCG_logo.svg";
import ParticleBackground from "./components/ParticleBackground.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import AnnouncementTicker from "./components/AnnouncementTicker.jsx";

// Layout component for main site pages
function MainLayout({ children, mobileMenuOpen, setMobileMenuOpen, contactPopupOpen, setContactPopupOpen, navLinks }) {
  return (
    <>
      <AnnouncementTicker onContactClick={() => setContactPopupOpen(true)} />
      <ParticleBackground />
      <div className="relative z-10 flex min-h-screen flex-col bg-black text-white">
        <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-white/10">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-3">
            <Link to="/" className="flex items-center">
              <img src={logoUrl} alt="The Chadha Group" className="h-12 sm:h-14 md:h-16 w-auto" />
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-sm font-semibold text-white/80 hover:text-white transition">Home</Link>
              <Link to="/about" className="text-sm font-semibold text-white/80 hover:text-white transition">About</Link>
              <Link to="/software" className="text-sm font-semibold text-white/80 hover:text-white transition">Software</Link>
              <Link to="/api" className="text-sm font-semibold text-white/80 hover:text-white transition">API</Link>
              <Link to="/investor-relations" className="text-sm font-semibold text-white/80 hover:text-white transition">Investors</Link>
              <Link to="/press" className="text-sm font-semibold text-white/80 hover:text-white transition">Press</Link>
              <button onClick={() => setContactPopupOpen(true)} className="inline-flex items-center justify-center rounded-xl border border-white/20 px-5 py-2 text-sm font-semibold text-white hover:bg-white/10 transition">Contact</button>
            </div>
            <button type="button" className="md:hidden text-white p-2 rounded-lg bg-white/10 hover:bg-white/20 transition border border-white/20" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </nav>
          <MobileHamburgerMenu id="mobile-menu" open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} logo={logoUrl} links={navLinks} onContactClick={() => setContactPopupOpen(true)} />
          <div className="h-[1px] w-full bg-[linear-gradient(90deg,#2563EB,#9333EA,#EC4899,#F59E0B,#10B981,#2563EB)] animate-flow-synced opacity-50"></div>
        </header>
        <main className="relative z-10 flex-1 text-white">{children}</main>
        <Footer />
      </div>
      <ContactPopup isOpen={contactPopupOpen} onClose={() => setContactPopupOpen(false)} />
    </>
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactPopupOpen, setContactPopupOpen] = useState(false);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Software", to: "/software" },
    { label: "API", to: "/api" },
    { label: "Investors", to: "/investor-relations" },
    { label: "Press", to: "/press" },
    { label: "Terms", to: "/terms" },
  ];

  const layoutProps = { mobileMenuOpen, setMobileMenuOpen, contactPopupOpen, setContactPopupOpen, navLinks };

  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Main site routes with layout */}
        <Route path="/" element={
          <MainLayout {...layoutProps}>
            <div className="block sm:hidden"><HeroMobile /></div>
            <div className="hidden sm:block"><Hero /></div>
            <Legacy />
            <Technologies />
            <Brands />
            <PressReleases />
            <Contact />
          </MainLayout>
        } />
        <Route path="/about" element={<MainLayout {...layoutProps}><About /></MainLayout>} />
        <Route path="/software" element={<MainLayout {...layoutProps}><SoftwareArm /></MainLayout>} />
        <Route path="/api" element={<MainLayout {...layoutProps}><ApiPlatform /></MainLayout>} />
        <Route path="/investor-relations" element={<MainLayout {...layoutProps}><InvestorRelations /></MainLayout>} />
        <Route path="/press" element={<MainLayout {...layoutProps}><PressReleases /></MainLayout>} />
        <Route path="/press/:slug" element={<MainLayout {...layoutProps}><PressReleasePage /></MainLayout>} />
        <Route path="/terms" element={<MainLayout {...layoutProps}><Terms /></MainLayout>} />
      </Routes>
    </>
  );
}