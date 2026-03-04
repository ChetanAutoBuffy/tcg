import { useState, useEffect } from "react";

const demos = [
  {
    prompt: "Create a React hook that fetches user data with loading and error states",
    code: `function useUser(userId) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(\`/api/users/\${userId}\`)
      .then(res => res.json())
      .then(setUser)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [userId]);

  return { user, loading, error };
}`,
  },
  {
    prompt: "Build an API endpoint that handles file uploads to S3 with validation",
    code: `@app.post("/upload")
async def upload_file(file: UploadFile):
    if file.size > 10_000_000:
        raise HTTPException(400, "File too large")

    key = f"uploads/{uuid4()}/{file.filename}"

    await s3.upload_fileobj(
        file.file,
        BUCKET,
        key,
        ExtraArgs={"ContentType": file.content_type}
    )

    return {"url": f"https://{BUCKET}.s3.amazonaws.com/{key}"}`,
  },
  {
    prompt: "Create a real-time inventory sync that prevents overselling",
    code: `async function syncInventory(sku, quantity) {
  const lock = await redis.lock(\`inv:\${sku}\`, 5000);

  try {
    const current = await db.inventory.findUnique({
      where: { sku }
    });

    if (current.quantity + quantity < 0) {
      throw new Error("Insufficient stock");
    }

    await db.inventory.update({
      where: { sku },
      data: { quantity: { increment: quantity } }
    });

    await publishToChannels(sku, quantity);
  } finally {
    await lock.release();
  }
}`,
  },
];

export default function PromptDemo() {
  const [activeDemo, setActiveDemo] = useState(0);
  const [displayedPrompt, setDisplayedPrompt] = useState("");
  const [displayedCode, setDisplayedCode] = useState("");
  const [phase, setPhase] = useState("typing-prompt"); // typing-prompt, typing-code, showing

  useEffect(() => {
    const demo = demos[activeDemo];
    let promptIndex = 0;
    let codeIndex = 0;

    setDisplayedPrompt("");
    setDisplayedCode("");
    setPhase("typing-prompt");

    // Type prompt
    const promptInterval = setInterval(() => {
      if (promptIndex <= demo.prompt.length) {
        setDisplayedPrompt(demo.prompt.slice(0, promptIndex));
        promptIndex++;
      } else {
        clearInterval(promptInterval);
        setPhase("typing-code");

        // Start typing code after prompt is done
        setTimeout(() => {
          const codeInterval = setInterval(() => {
            if (codeIndex <= demo.code.length) {
              setDisplayedCode(demo.code.slice(0, codeIndex));
              codeIndex++;
            } else {
              clearInterval(codeInterval);
              setPhase("showing");

              // Move to next demo after showing
              setTimeout(() => {
                setActiveDemo((prev) => (prev + 1) % demos.length);
              }, 4000);
            }
          }, 15);
        }, 500);
      }
    }, 30);

    return () => clearInterval(promptInterval);
  }, [activeDemo]);

  return (
    <section className="relative bg-black/50 backdrop-blur-sm text-white py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container-bleed relative z-10">
        {/* Header - The World is Changing */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-wider text-gray-400 mb-6">
            The Future of Development
          </div>
          <h2 className="text-4xl sm:text-6xl font-black mb-6 leading-tight">
            The World is
            <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#2563EB,#9333EA,#EC4899)] animate-flow-synced"> Changing</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            AI isn't coming—it's here. The developers who master prompt engineering today will build tomorrow's products.
            Those who don't will be left behind.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-16">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">10x</div>
              <div className="text-xs text-gray-500">Faster Development</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">2025</div>
              <div className="text-xs text-gray-500">AI Everywhere</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">Now</div>
              <div className="text-xs text-gray-500">Time to Adapt</div>
            </div>
          </div>
        </div>

        {/* Prompt Engineering Demo */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">See Prompt Engineering in Action</h3>
            <p className="text-gray-400 text-sm">Natural language in → Production code out</p>
          </div>

          {/* Demo Container */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl opacity-50" />

            <div className="relative grid lg:grid-cols-2 gap-4">
              {/* Left - Prompt Input */}
              <div className="bg-black border border-white/10 rounded-2xl overflow-hidden">
                <div className="bg-blue-500/10 border-b border-white/10 px-4 py-3 flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-blue-500/30 flex items-center justify-center">
                      <span className="text-xs font-bold text-blue-400">P</span>
                    </div>
                    <span className="text-sm font-semibold text-blue-400">PROMPT</span>
                  </div>
                </div>
                <div className="p-6 min-h-[280px]">
                  <p className="text-gray-300 font-mono text-sm leading-relaxed">
                    {displayedPrompt}
                    {phase === "typing-prompt" && (
                      <span className="inline-block w-2 h-4 bg-blue-400 ml-1 animate-pulse" />
                    )}
                  </p>
                </div>
              </div>

              {/* Right - Code Output */}
              <div className="bg-black border border-white/10 rounded-2xl overflow-hidden">
                <div className="bg-green-500/10 border-b border-white/10 px-4 py-3 flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-green-500/30 flex items-center justify-center">
                      <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-green-400">OUTPUT</span>
                    {phase === "typing-code" && (
                      <span className="text-xs text-green-400/60 animate-pulse">generating...</span>
                    )}
                  </div>
                </div>
                <div className="p-6 min-h-[280px] overflow-auto">
                  <pre className="text-green-400 font-mono text-xs leading-relaxed">
                    <code>
                      {displayedCode}
                      {phase === "typing-code" && (
                        <span className="inline-block w-2 h-4 bg-green-400 ml-1 animate-pulse" />
                      )}
                    </code>
                  </pre>
                </div>
              </div>
            </div>

            {/* Demo Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {demos.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveDemo(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    activeDemo === idx ? "bg-white w-6" : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Why This Matters */}
        <div className="max-w-4xl mx-auto mt-20 text-center">
          <div className="bg-gradient-to-r from-white/5 via-white/10 to-white/5 border border-white/10 rounded-2xl p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Don't Get Left Behind</h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Companies using AI-assisted development are shipping 10x faster.
              Your competitors are already adopting this. We can help you catch up—and surpass them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-black font-bold px-8 py-4 hover:scale-105 transition-all"
              >
                Start Building with AI
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all"
              >
                Learn About Training
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </section>
  );
}
