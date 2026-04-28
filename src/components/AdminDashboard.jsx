import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { products } from "../data/products.js";

// Simple client-side gate. NOT real security — just keeps the URL out of public hands.
// To change: edit ADMIN_PASSCODE below. For real security, move /admin to a separate
// auth-gated subdomain or add a backend session check.
const ADMIN_PASSCODE = "tcg-2026";
const STORAGE_KEY = "tcg-admin-auth";

function PasscodeGate({ onUnlock }) {
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passcode === ADMIN_PASSCODE) {
      sessionStorage.setItem(STORAGE_KEY, "ok");
      onUnlock();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center py-24">
      <div className="max-w-md w-full mx-auto px-4">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
          <div className="text-center mb-6">
            <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">TCG Admin</h1>
            <p className="text-gray-400 text-sm">Internal dashboard — passcode required</p>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="password"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              placeholder="Passcode"
              className={`w-full bg-white/5 border ${error ? "border-red-500" : "border-white/10"} rounded-xl px-4 py-3 text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition min-h-[48px] mb-4`}
              autoFocus
            />
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold px-6 py-3 text-base hover:scale-[1.02] transition min-h-[48px]"
            >
              Unlock
            </button>
            {error && <p className="text-red-400 text-sm text-center mt-3">Wrong passcode</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

function StatCard({ label, value, sub, accent = "purple" }) {
  const accents = {
    purple: "from-purple-500/20 to-pink-500/10 border-purple-500/30",
    blue: "from-blue-500/20 to-cyan-500/10 border-blue-500/30",
    emerald: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30",
    orange: "from-orange-500/20 to-amber-500/10 border-orange-500/30",
  };
  return (
    <div className={`bg-gradient-to-br ${accents[accent]} border rounded-2xl p-5`}>
      <div className="text-xs uppercase tracking-wider text-gray-400 mb-1">{label}</div>
      <div className="text-3xl font-black text-white mb-1">{value}</div>
      <div className="text-xs text-gray-500">{sub}</div>
    </div>
  );
}

function QuickLink({ icon, title, desc, href, external = true }) {
  const Tag = external ? "a" : Link;
  const props = external ? { href, target: "_blank", rel: "noopener noreferrer" } : { to: href };
  return (
    <Tag
      {...props}
      className="group flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/[0.08] hover:border-white/20 transition"
    >
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 text-white">
        {icon}
      </div>
      <div className="flex-grow min-w-0">
        <div className="text-white font-semibold text-sm mb-0.5 group-hover:text-purple-300 transition">{title}</div>
        <div className="text-gray-400 text-xs leading-relaxed">{desc}</div>
      </div>
      <svg className="w-4 h-4 text-gray-500 group-hover:text-white transition flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </Tag>
  );
}

function Dashboard() {
  const [orders, setOrders] = useState([]);

  // Load orders from localStorage. In v2: replace with Airtable/API fetch.
  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("tcg-orders") || "[]");
      setOrders(stored);
    } catch {
      setOrders([]);
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem(STORAGE_KEY);
    window.location.reload();
  };

  const ordersThisMonth = orders.filter((o) => {
    const orderDate = new Date(o.date);
    const now = new Date();
    return orderDate.getMonth() === now.getMonth() && orderDate.getFullYear() === now.getFullYear();
  });

  const revenueThisMonth = ordersThisMonth.reduce((sum, o) => sum + (o.price || 0), 0);

  return (
    <section className="relative py-12 sm:py-16">
      <div className="container-bleed">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-white mb-1">TCG Admin</h1>
              <p className="text-gray-400 text-sm">Orders, leads, and quick links</p>
            </div>
            <button
              onClick={handleLogout}
              className="text-sm text-gray-400 hover:text-white border border-white/10 hover:border-white/30 rounded-lg px-4 py-2 transition"
            >
              Lock
            </button>
          </div>

          {/* Stats */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            <StatCard
              label="Orders this month"
              value={ordersThisMonth.length}
              sub={`${orders.length} total · since launch`}
              accent="purple"
            />
            <StatCard
              label="Revenue this month"
              value={`$${revenueThisMonth.toLocaleString()}`}
              sub="Sum of logged orders"
              accent="emerald"
            />
            <StatCard
              label="Live products"
              value={products.length}
              sub="See /products"
              accent="blue"
            />
            <StatCard
              label="New leads"
              value="—"
              sub="Connect Airtable to track"
              accent="orange"
            />
          </div>

          {/* Recent Orders */}
          <div className="grid lg:grid-cols-3 gap-6 mb-10">
            <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-bold text-white">Recent Orders</h2>
                <Link
                  to="/admin/log-order"
                  className="text-xs bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-lg transition"
                >
                  + Log Order
                </Link>
              </div>

              {orders.length === 0 ? (
                <div className="bg-white/[0.02] border border-dashed border-white/10 rounded-xl p-8 text-center">
                  <div className="text-gray-400 text-sm mb-2">No orders logged yet</div>
                  <p className="text-gray-500 text-xs leading-relaxed mb-4">
                    Order emails arrive in your Gmail. Click the link below to filter.
                    Click <strong>+ Log Order</strong> to record fulfillment progress here.
                  </p>
                  <a
                    href="https://mail.google.com/mail/u/0/#search/subject%3A%22NEW+ORDER%22"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 text-sm transition"
                  >
                    Open Gmail order filter
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              ) : (
                <div className="space-y-2">
                  {orders.slice(0, 8).map((o, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-white/5 border border-white/10 rounded-lg px-4 py-3">
                      <div className="min-w-0">
                        <div className="text-white text-sm font-semibold truncate">{o.customerName} — {o.product}</div>
                        <div className="text-gray-400 text-xs">{new Date(o.date).toLocaleDateString()}</div>
                      </div>
                      <div className="text-right ml-4">
                        <div className="text-white font-bold text-sm">${o.price}</div>
                        <div className="text-xs text-gray-400">{o.status || "new"}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Links */}
            <div>
              <h2 className="text-lg font-bold text-white mb-5">Quick Links</h2>
              <div className="space-y-3">
                <QuickLink
                  icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                  title="Gmail — Orders"
                  desc="All NEW ORDER emails"
                  href="https://mail.google.com/mail/u/0/#search/subject%3A%22NEW+ORDER%22"
                />
                <QuickLink
                  icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                  title="Gmail — Leads"
                  desc="Project Inquiries + Subscribers"
                  href="https://mail.google.com/mail/u/0/#search/subject%3A%22New+Project+Inquiry%22+OR+subject%3A%22NEW+BLOG+SUBSCRIBER%22"
                />
                <QuickLink
                  icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-2M9 5l3 3m0 0l-3 3m3-3H1" /></svg>}
                  title="Stripe Dashboard"
                  desc="Payments + Payment Links"
                  href="https://dashboard.stripe.com/"
                />
                <QuickLink
                  icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}
                  title="Calendly"
                  desc="Bookings + consultations"
                  href="https://calendly.com/"
                />
                <QuickLink
                  icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>}
                  title="Google Analytics"
                  desc="Traffic + conversions"
                  href="https://analytics.google.com/"
                />
                <QuickLink
                  icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>}
                  title="Site Front-end"
                  desc="View public site"
                  href="/"
                  external={false}
                />
              </div>
            </div>
          </div>

          {/* Products quick view */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-white mb-5">Active Products</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {products.map((p) => (
                <Link
                  key={p.slug}
                  to={`/products/${p.slug}`}
                  className="bg-white/5 border border-white/10 rounded-lg p-3 hover:bg-white/[0.08] transition"
                >
                  <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">{p.category}</div>
                  <div className="text-white text-sm font-semibold mb-1 truncate">{p.shortName}</div>
                  <div className="flex items-center gap-2">
                    <div className="text-white font-bold text-sm">{p.priceLabel}</div>
                    {p.compareAtLabel && <div className="text-xs text-gray-500 line-through">{p.compareAtLabel}</div>}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Setup checklist */}
          <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-2xl p-6">
            <h2 className="text-lg font-bold text-white mb-4">v2 Upgrade Checklist</h2>
            <p className="text-gray-300 text-sm mb-4">
              v1 admin uses your inbox + manual order logging. To upgrade to a real DB-backed admin:
            </p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">→</span>
                Create Airtable base with "Orders" + "Leads" tables
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">→</span>
                Wire FormSubmit webhook → Airtable via n8n (you already use n8n)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">→</span>
                Add Airtable API key to env, update <code className="bg-white/10 text-purple-300 px-1.5 py-0.5 rounded text-xs">AdminDashboard.jsx</code> to fetch live data
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">→</span>
                Wire Stripe webhook → Airtable for payment status sync
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AdminDashboard() {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === "ok") setUnlocked(true);
  }, []);

  return (
    <>
      <Helmet>
        <title>TCG Admin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      {unlocked ? <Dashboard /> : <PasscodeGate onUnlock={() => setUnlocked(true)} />}
    </>
  );
}
