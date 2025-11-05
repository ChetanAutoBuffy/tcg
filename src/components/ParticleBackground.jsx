import { useMemo } from "react";

export default function ParticleBackground() {
  const particles = useMemo(
    () =>
      Array.from({ length: 50 }, (_, id) => ({
        id,
        size: Math.random() * 4 + 2,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: -(Math.random() * 20).toFixed(2),
        duration: Math.random() * 18 + 20,
        drift: Math.random() * 60 + 20,
        reverse: Math.random() > 0.5,
        opacity: Math.random() * 0.4 + 0.35,
      })),
    []
  );

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 h-screen w-screen overflow-hidden"
      aria-hidden="true"
    >
      {/* Gradient Orbs - BIGGER */}
      <div
        className="absolute left-1/4 top-[-20%] h-[520px] w-[520px] animate-pulse rounded-full bg-blue-500/15 blur-3xl"
        style={{ animationDuration: "8s" }}
      ></div>
      <div
        className="absolute right-[15%] bottom-[-25%] h-[520px] w-[520px] animate-pulse rounded-full bg-purple-500/15 blur-3xl"
        style={{ animationDuration: "12s", animationDelay: "2s" }}
      ></div>
      <div
        className="absolute left-1/2 top-1/2 h-[440px] w-[440px] animate-pulse rounded-full bg-pink-500/10 blur-3xl"
        style={{ animationDuration: "10s", animationDelay: "4s" }}
      ></div>
      
      {/* Grid Pattern - MORE VISIBLE */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]"></div>
      
      {/* Floating Particles - MUCH MORE VISIBLE */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className={particle.reverse ? "particle-reverse absolute rounded-full" : "particle absolute rounded-full"}
            style={{
              left: `${particle.left}vw`,
              top: `${particle.top}vh`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
              background: `radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(59,130,246,0.6) 70%, rgba(59,130,246,0.2) 100%)`,
              boxShadow: `0 0 10px rgba(147,197,253,0.6), 0 0 16px rgba(59,130,246,0.45)`,
              opacity: particle.opacity,
              "--drift-x": `${particle.reverse ? -particle.drift : particle.drift}px`,
            }}
          />
        ))}
      </div>

      {/* Horizontal Light Beams - BRIGHTER */}
      <div className="absolute top-1/4 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent animate-pulse" style={{ animationDuration: '4s' }}></div>
      <div className="absolute top-2/3 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
      
      {/* Diagonal Streaks */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/3 -left-20 w-96 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent rotate-45 animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 -right-20 w-96 h-[1px] bg-gradient-to-r from-transparent via-pink-500/30 to-transparent -rotate-45 animate-pulse" style={{ animationDuration: '7s', animationDelay: '3s' }}></div>
      </div>
    </div>
  );
}
