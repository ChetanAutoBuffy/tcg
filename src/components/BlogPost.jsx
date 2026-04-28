import { Helmet } from "react-helmet-async";
import { Link, useParams, Navigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { getPostBySlug, blogPosts } from "../data/blog.js";
import { getProductBySlug } from "../data/products.js";

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) return <Navigate to="/blog" replace />;

  const product = getProductBySlug(post.primaryProductSlug);
  const canonicalUrl = `https://thechadhagroup.com/blog/${post.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: "The Chadha Group" },
    mainEntityOfPage: canonicalUrl,
  };

  // Related posts: same tags, exclude current
  const related = blogPosts
    .filter((p) => p.slug !== post.slug)
    .filter((p) => p.tags.some((t) => post.tags.includes(t)))
    .slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{post.seo.title}</title>
        <meta name="description" content={post.seo.description} />
        <meta name="keywords" content={post.seo.keywords} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={post.seo.title} />
        <meta property="og:description" content={post.seo.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="article:author" content={post.author} />
        <meta property="article:published_time" content={post.date} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      <article className="relative">
        {/* HEADER */}
        <section className="relative pt-16 pb-10 sm:pt-24 sm:pb-12 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-1/3 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-600/10 via-pink-600/5 to-transparent blur-3xl" />
          </div>
          <div className="container-bleed relative z-10">
            <div className="max-w-3xl mx-auto px-4">
              <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-400">
                <Link to="/" className="hover:text-white transition">Home</Link>
                <span className="mx-2 text-gray-600">/</span>
                <Link to="/blog" className="hover:text-white transition">Blog</Link>
              </nav>

              <div className="flex flex-wrap gap-2 mb-5">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-[10px] uppercase tracking-wider bg-purple-500/15 border border-purple-500/30 rounded-full px-2.5 py-1 text-purple-300 font-semibold">
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-3xl sm:text-5xl font-black leading-tight mb-6 text-white">
                {post.title}
              </h1>

              <div className="flex items-center gap-3 text-sm text-gray-400 pb-6 border-b border-white/10">
                <span className="text-white font-semibold">{post.author}</span>
                <span>·</span>
                <span>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                <span>·</span>
                <span>{post.readTime} read</span>
              </div>
            </div>
          </div>
        </section>

        {/* BODY */}
        <section className="relative pb-16">
          <div className="container-bleed">
            <div className="max-w-3xl mx-auto px-4">
              <div className="prose-blog text-gray-200">
                <ReactMarkdown
                  components={{
                    h2: ({ children }) => <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">{children}</h2>,
                    h3: ({ children }) => <h3 className="text-xl font-bold text-white mt-8 mb-3">{children}</h3>,
                    p: ({ children }) => <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-5">{children}</p>,
                    a: ({ href, children }) => {
                      const isInternal = href?.startsWith("/") || href?.includes("thechadhagroup.com");
                      if (isInternal) {
                        return <Link to={href.replace("https://thechadhagroup.com", "")} className="text-purple-300 underline underline-offset-2 hover:text-purple-200">{children}</Link>;
                      }
                      return <a href={href} target="_blank" rel="noopener noreferrer" className="text-purple-300 underline underline-offset-2 hover:text-purple-200">{children}</a>;
                    },
                    ul: ({ children }) => <ul className="list-disc pl-6 mb-5 space-y-2 text-gray-200">{children}</ul>,
                    ol: ({ children }) => <ol className="list-decimal pl-6 mb-5 space-y-2 text-gray-200">{children}</ol>,
                    li: ({ children }) => <li className="text-base sm:text-lg leading-relaxed">{children}</li>,
                    strong: ({ children }) => <strong className="text-white font-semibold">{children}</strong>,
                    table: ({ children }) => (
                      <div className="overflow-x-auto my-6 rounded-xl border border-white/10">
                        <table className="w-full text-sm text-left">{children}</table>
                      </div>
                    ),
                    thead: ({ children }) => <thead className="bg-white/5">{children}</thead>,
                    th: ({ children }) => <th className="px-4 py-3 text-white font-semibold border-b border-white/10">{children}</th>,
                    td: ({ children }) => <td className="px-4 py-3 text-gray-300 border-b border-white/5">{children}</td>,
                    code: ({ children }) => <code className="bg-white/10 text-purple-300 px-1.5 py-0.5 rounded text-sm">{children}</code>,
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              </div>

              {/* PRODUCT CTA */}
              {product && (
                <div className={`mt-12 bg-gradient-to-br ${product.gradient} bg-opacity-10 border border-white/10 rounded-2xl p-6 sm:p-8`}>
                  <div className="text-xs uppercase tracking-wider text-white/80 font-bold mb-2">Ready to ship?</div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">{product.name}</h3>
                  <p className="text-white/90 mb-5">{product.tagline}</p>
                  <div className="flex flex-wrap items-baseline gap-3 mb-6">
                    <div className="text-4xl font-black text-white">{product.priceLabel}</div>
                    {product.compareAtLabel && (
                      <div className="text-xl text-white/60 line-through font-semibold">{product.compareAtLabel}</div>
                    )}
                    <div className="text-sm text-white/70">· delivered in {product.delivery}</div>
                  </div>
                  <Link
                    to={`/products/${product.slug}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-black font-bold px-6 py-3 text-base hover:scale-[1.02] transition min-h-[48px]"
                  >
                    See full details + order
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* RELATED */}
        {related.length > 0 && (
          <section className="relative py-16 bg-black/30">
            <div className="container-bleed">
              <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Read Next</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {related.map((p) => (
                    <Link
                      key={p.slug}
                      to={`/blog/${p.slug}`}
                      className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/[0.08] hover:border-white/20 transition"
                    >
                      <div className="text-xs text-gray-400 mb-2">{p.readTime} read</div>
                      <div className="text-white font-bold mb-2 group-hover:text-purple-300 transition">{p.title}</div>
                      <div className="text-gray-400 text-xs leading-relaxed line-clamp-2">{p.excerpt}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </article>
    </>
  );
}
