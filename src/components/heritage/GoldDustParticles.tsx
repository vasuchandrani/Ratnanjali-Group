/**
 * GoldDustParticles — Lightweight canvas-based gold dust particle effect
 *
 * Slow-drifting gold motes like temple lamp-smoke particles.
 * Used sparingly behind hero and preloader sections.
 * Respects prefers-reduced-motion by not rendering.
 */

import { useEffect, useRef, useCallback } from "react";

interface GoldDustProps {
  count?: number;
  className?: string;
  opacity?: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  alphaDir: number;
}

export function GoldDustParticles({ count = 40, className = "", opacity = 1 }: GoldDustProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const raf = useRef<number>(0);

  const init = useCallback((w: number, h: number) => {
    particles.current = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -Math.random() * 0.4 - 0.1,
      size: Math.random() * 2 + 0.5,
      alpha: Math.random() * 0.5 + 0.1,
      alphaDir: (Math.random() - 0.5) * 0.005,
    }));
  }, [count]);

  useEffect(() => {
    // Respect reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (!rect) return;
      canvas.width = rect.width;
      canvas.height = rect.height;
      if (particles.current.length === 0) init(rect.width, rect.height);
    };
    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      for (const p of particles.current) {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha += p.alphaDir;

        if (p.alpha <= 0.05 || p.alpha >= 0.6) p.alphaDir *= -1;
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) {
          p.y = h + 10;
          p.x = Math.random() * w;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(196, 164, 105, ${p.alpha})`;
        ctx.fill();
      }

      raf.current = requestAnimationFrame(animate);
    };

    raf.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("resize", resize);
    };
  }, [init]);

  return (
    <canvas
      ref={canvasRef}
      className={`gold-dust-canvas pointer-events-none absolute inset-0 ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    />
  );
}
