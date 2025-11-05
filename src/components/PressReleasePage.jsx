import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { pressReleases } from "../data/pressReleases";
import ReactMarkdown from "react-markdown";
import { useState, useEffect } from "react";

export default function PressReleasePage() {
  const { slug } = useParams();
  const release = pressReleases.find((r) => r.slug === slug);
  const [copied, setCopied] = useState(false);
  const [content, setContent] = useState("");

  useEffect(() => {
    if (release) {
      // Fetch markdown file
      fetch(`/press/${slug}.md`)
        .then(res => res.text())
        .then(text => setContent(text))
        .catch(err => console.error("Failed to load press release:", err));
    }
  }, [release, slug]);

  if (!release) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Press Release Not Found</h1>
          <Link to="/press" className="text-blue-400 hover:underline">
            ← Back to Press Releases
          </Link>
        </div>
      </div>
    );
  }

  const shareUrl = `https://thechadhagroup.com/press/${slug}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(release.title)}`, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>{release.title} | The Chadha Group</title>
        <meta name="description" content={release.excerpt} />
        
        {/* Open Graph */}
        <meta property="og:title" content={release.title} />
        <meta property="og:description" content={release.excerpt} />
        <meta property="og:image" content={`https://thechadhagroup.com${release.image}`} />
        <meta property="og:url" content={shareUrl} />
        <meta property="og:type" content="article" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={release.title} />
        <meta name="twitter:description" content={release.excerpt} />
        <meta name="twitter:image" content={`https://thechadhagroup.com${release.image}`} />
      </Helmet>

      <div className="relative bg-black text-white min-h-screen">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.1)_0%,transparent_50%)]" />
        
        <div className="relative z-10 container-bleed py-16 sm:py-24">
          {/* Back Button */}
          <Link 
            to="/press" 
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition mb-12"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Press
          </Link>

          {/* Article Header */}
          <article className="max-w-4xl mx-auto">
            <div className="mb-6 sm:mb-8">
              <div className="text-sm text-gray-500 mb-4">{release.date}</div>
              <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 sm:mb-6 leading-tight">
                {release.title}
              </h1>
              <p className="text-base sm:text-xl text-gray-400 leading-relaxed">
                {release.excerpt}
              </p>
            </div>

            {/* Share Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12 pb-8 border-b border-white/10">
              <span className="text-sm text-gray-500">Share:</span>
              <button
                onClick={shareOnLinkedIn}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0077B5]/10 border border-[#0077B5]/20 text-[#0077B5] hover:bg-[#0077B5]/20 transition text-sm font-semibold"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </button>
              
              <button
                onClick={shareOnTwitter}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1DA1F2]/10 border border-[#1DA1F2]/20 text-[#1DA1F2] hover:bg-[#1DA1F2]/20 transition text-sm font-semibold"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
                Twitter
              </button>

              <button
                onClick={copyToClipboard}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition text-sm font-semibold"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                {copied ? "Copied!" : "Copy Link"}
              </button>
            </div>

            {/* Content */}
            <div className="prose prose-invert prose-lg max-w-none">
              {/* Logo */}
              {release.image && (
                <img src={release.image} alt={`${release.title} logo`} className="h-16 sm:h-20 w-auto mb-8" />
              )}
              
              <ReactMarkdown
                components={{
                  h1: ({ children }) => <h1 className="text-3xl sm:text-4xl font-bold mt-8 mb-4">{children}</h1>,
                  h2: ({ children }) => <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-xl sm:text-2xl font-bold mt-6 mb-3">{children}</h3>,
                  p: ({ children }) => <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">{children}</p>,
                  strong: ({ children }) => <strong className="text-white font-semibold">{children}</strong>,
                  hr: () => <hr className="my-8 border-white/10" />,
                  img: ({ src, alt }) => <img src={src} alt={alt} className="h-16 sm:h-20 w-auto mb-6" />,
                }}
              >
                {content}
              </ReactMarkdown>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
