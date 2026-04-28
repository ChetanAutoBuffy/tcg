import { Routes, Route, Link, Navigate } from "react-router-dom";
import Hero from "./components/Hero.jsx";
import HeroMobile from "./components/HeroMobile.jsx";
import Services from "./components/Services.jsx";
import ServicesCatalog from "./components/ServicesCatalog.jsx";
import Packages from "./components/Packages.jsx";
import IntakeForm from "./components/IntakeForm.jsx";
import ProductsIndex from "./components/ProductsIndex.jsx";
import ProductPage from "./components/ProductPage.jsx";
import BlogIndex from "./components/BlogIndex.jsx";
import BlogPost from "./components/BlogPost.jsx";
import AdminDashboard from "./components/AdminDashboard.jsx";
import PromptDemo from "./components/PromptDemo.jsx";
import Capabilities from "./components/Capabilities.jsx";
import Portfolio from "./components/Portfolio.jsx";
import About from "./components/About.jsx";
import Terms from "./components/Terms.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ContactPopup from "./components/ContactPopup.jsx";
import MobileHamburgerMenu from "./components/MobileHamburgerMenu.jsx";
import { useState } from "react";
import logoUrl from "./assets/TCG_logo.svg";
import StarfieldBackground from "./components/StarfieldBackground.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

// Promo Banner Component
function PromoBanner({ onContactClick }) {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 text-white py-2.5 px-4 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.1),transparent)] animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
      <div className="relative flex items-center justify-center gap-3 flex-wrap">
        <span className="text-sm font-semibold">
          Prompt Training is Here
        </span>
        <button
          onClick={onContactClick}
          className="inline-flex items-center gap-1.5 bg-white/20 hover:bg-white/30 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold transition-all hover:scale-105"
        >
          Book Demo
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

// Layout component for main site pages
function MainLayout({ children, mobileMenuOpen, setMobileMenuOpen, contactPopupOpen, setContactPopupOpen, navLinks }) {
  return (
    <>
      <StarfieldBackground />
      <div className="relative z-10 flex min-h-screen flex-col bg-transparent text-white">
        <PromoBanner onContactClick={() => setContactPopupOpen(true)} />
        <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-white/10">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-3">
            <Link to="/" className="flex items-center">
              <img src={logoUrl} alt="The Chadha Group" className="h-12 sm:h-14 md:h-16 w-auto" />
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-sm font-semibold text-white/80 hover:text-white transition">Home</Link>
              <a href="/#services" className="text-sm font-semibold text-white/80 hover:text-white transition">Services</a>
              <Link to="/products" className="text-sm font-semibold text-white/80 hover:text-white transition">Products</Link>
              <a href="/#packages" className="text-sm font-semibold text-white/80 hover:text-white transition">Packages</a>
              <a href="/#portfolio" className="text-sm font-semibold text-white/80 hover:text-white transition">Work</a>
              <Link to="/blog" className="text-sm font-semibold text-white/80 hover:text-white transition">Blog</Link>
              <Link to="/about" className="text-sm font-semibold text-white/80 hover:text-white transition">About</Link>
              <a href="/#intake-form" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-2 text-sm font-semibold text-white hover:from-purple-400 hover:to-pink-400 transition-all hover:scale-105 active:scale-95">Get Started</a>
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
    { label: "Services", to: "/#services" },
    { label: "Products", to: "/products" },
    { label: "Packages", to: "/#packages" },
    { label: "Blog", to: "/blog" },
    { label: "Work", to: "/#portfolio" },
    { label: "About", to: "/about" },
    { label: "Get Started", to: "/#intake-form", highlight: true },
  ];

  const layoutProps = { mobileMenuOpen, setMobileMenuOpen, contactPopupOpen, setContactPopupOpen, navLinks };

  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Redirect old pages */}
        <Route path="/countdown" element={<Navigate to="/" replace />} />
        <Route path="/software" element={<Navigate to="/" replace />} />

        {/* Main site routes with layout */}
        <Route path="/" element={
          <MainLayout {...layoutProps}>
            <div className="block sm:hidden"><HeroMobile /></div>
            <div className="hidden sm:block"><Hero /></div>
            <Services />
            <ServicesCatalog />
            <Packages />
            <Capabilities />
            <PromptDemo />
            <Portfolio />
            <IntakeForm />
            <Contact />
          </MainLayout>
        } />
        <Route path="/about" element={<MainLayout {...layoutProps}><About /></MainLayout>} />
        <Route path="/terms" element={<MainLayout {...layoutProps}><Terms /></MainLayout>} />
        <Route path="/products" element={<MainLayout {...layoutProps}><ProductsIndex /></MainLayout>} />
        <Route path="/products/:slug" element={<MainLayout {...layoutProps}><ProductPage /></MainLayout>} />
        <Route path="/blog" element={<MainLayout {...layoutProps}><BlogIndex /></MainLayout>} />
        <Route path="/blog/:slug" element={<MainLayout {...layoutProps}><BlogPost /></MainLayout>} />
        <Route path="/admin" element={<MainLayout {...layoutProps}><AdminDashboard /></MainLayout>} />
      </Routes>
    </>
  );
}
