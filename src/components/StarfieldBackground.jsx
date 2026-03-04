import { useEffect, useRef } from "react";

export default function StarfieldBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];

    const colors = [
      "255, 255, 255",   // white
      "147, 197, 253",   // blue
      "196, 181, 253",   // purple
      "251, 191, 36",    // amber
      "52, 211, 153",    // green
    ];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 3; // Cover scrollable area
    };

    const createParticle = () => {
      const colorIndex = Math.floor(Math.random() * colors.length);
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        color: colors[colorIndex],
        maxRadius: Math.random() * 3 + 1,
        currentRadius: 0,
        opacity: 0,
        phase: "growing", // growing, visible, fading
        growSpeed: Math.random() * 0.08 + 0.02,
        fadeSpeed: Math.random() * 0.03 + 0.01,
        holdTime: Math.random() * 60 + 30, // frames to stay visible
        holdCounter: 0,
      };
    };

    // Initialize with some particles
    const initParticles = () => {
      particles = [];
      const initialCount = Math.floor((canvas.width * canvas.height) / 15000);
      for (let i = 0; i < initialCount; i++) {
        const p = createParticle();
        p.phase = Math.random() > 0.5 ? "visible" : "growing";
        p.opacity = p.phase === "visible" ? Math.random() * 0.8 + 0.2 : 0;
        p.currentRadius = p.phase === "visible" ? p.maxRadius : 0;
        particles.push(p);
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Randomly spawn new particles
      if (Math.random() > 0.92) {
        particles.push(createParticle());
      }

      // Update and draw particles
      particles = particles.filter((p) => {
        // Update phase
        if (p.phase === "growing") {
          p.opacity += p.growSpeed;
          p.currentRadius += p.growSpeed * p.maxRadius;
          if (p.opacity >= 1) {
            p.opacity = 1;
            p.currentRadius = p.maxRadius;
            p.phase = "visible";
          }
        } else if (p.phase === "visible") {
          p.holdCounter++;
          // Subtle pulse while visible
          p.opacity = 0.7 + Math.sin(p.holdCounter * 0.1) * 0.3;
          if (p.holdCounter >= p.holdTime) {
            p.phase = "fading";
          }
        } else if (p.phase === "fading") {
          p.opacity -= p.fadeSpeed;
          p.currentRadius -= p.fadeSpeed * p.maxRadius * 0.5;
          if (p.opacity <= 0) {
            return false; // Remove particle
          }
        }

        // Draw the particle
        if (p.opacity > 0 && p.currentRadius > 0) {
          // Core
          ctx.beginPath();
          ctx.arc(p.x, p.y, Math.max(0.5, p.currentRadius * 0.5), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${p.color}, ${p.opacity})`;
          ctx.fill();

          // Glow
          const gradient = ctx.createRadialGradient(
            p.x, p.y, 0,
            p.x, p.y, p.currentRadius * 3
          );
          gradient.addColorStop(0, `rgba(${p.color}, ${p.opacity * 0.6})`);
          gradient.addColorStop(0.4, `rgba(${p.color}, ${p.opacity * 0.2})`);
          gradient.addColorStop(1, "transparent");

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.currentRadius * 3, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        }

        return true;
      });

      // Keep particle count reasonable
      if (particles.length > 200) {
        particles = particles.slice(-150);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    initParticles();
    animate();

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ background: "#000000" }}
    />
  );
}
