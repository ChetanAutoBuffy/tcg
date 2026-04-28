import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { blogPosts } from "../data/blog.js";
import { getProductBySlug } from "../data/products.js";

export default function BlogIndex() {
  return (
    <>
      <Helmet>
        <title>TCG Blog — AI Strategy, Claude Tips, Productized Services</title>
        <meta
          name="description"
          content="Practical writing on AI productization, Claude prompting, building agents, and shipping AI products. By Chetan Chadha and the TCG team."
        />
        <meta name="keywords" content="ai blog, claude blog, ai productization, ai agents, prompt engineering" />
        <link rel="canonical" href="https://thechadhagroup.com/blog" />
        <meta property="og:title" content="TCG Blog — AI Strategy & Claude Tips" />
        <meta property="og:description" content="Practical writing on AI productization, Claude prompting, and shipping AI products." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thechadhagroup.com/blog" />
      </Helmet>

      {/* HERO */}
      <section className="relative pt-16 pb-12 sm:pt-24 sm:pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-600/15 via-pink-600/5 to-transparent blur-3xl" />
        </div>
        <div className="container-bleed relative z-10">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300 mb-6">
              The TCG Blog
            </div>
            <h1 className="text-4xl sm:text-6xl font-black mb-5 leading-tight text-white">
              Real writing on{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">
                shipping AI products
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Practical playbooks from Chetan and the TCG team. No fluff, no hot takes — what actually
              works when you're building real businesses with AI.
            </p>
          </div>
        </div>
      </section>

      {/* POSTS GRID */}
      <section className="relative pb-24">
        <div className="container-bleed">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => {
                const linkedProduct = getProductBySlug(post.primaryProductSlug);
                return (
                  <Link
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] hover:border-white/20 transition-all hover:scale-[1.01] flex flex-col"
                  >
                    <div className="flex items-center gap-2 mb-4 text-xs text-gray-400">
                      <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                      <span>·</span>
                      <span>{post.readTime} read</span>
                    </div>

                    <h2 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-purple-300 transition">
                      {post.title}
                    </h2>

                    <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-grow">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-[10px] uppercase tracking-wider bg-white/5 border border-white/10 rounded-full px-2 py-0.5 text-gray-400">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {linkedProduct && (
                      <div className="text-xs text-purple-300 border-t border-white/10 pt-3">
                        Related: {linkedProduct.name}
                      </div>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Email capture */}
            <div className="mt-16 max-w-2xl mx-auto bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Get new posts in your inbox</h3>
                <p className="text-gray-300 text-sm">
                  One email per week. Real playbooks. Unsubscribe anytime.
                </p>
              </div>
              <form
                action="https://formsubmit.co/chetan@autobuffy.com"
                method="POST"
                className="flex flex-col sm:flex-row gap-3"
              >
                <input type="hidden" name="_subject" value="NEW BLOG SUBSCRIBER" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="source" value="blog-index" />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="flex-grow bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-base text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition min-h-[48px]"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold px-6 py-3 text-base hover:scale-[1.02] transition min-h-[48px] whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
