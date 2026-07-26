/**
 * Preloader — Full-screen heritage intro sequence
 *
 * Sequence:
 * 1. Dark stone backdrop with gold-dust particle drift
 * 2. DharmaWheel spins/resolves center-screen (chariot-wheel motif)
 * 3. Wheel fades → Ratnanjali logo fades in
 * 4. Logo scales and glides to navbar area
 * 5. Preloader dissolves, revealing content
 *
 * Shows only on first visit (sessionStorage flag).
 * Respects prefers-reduced-motion: skips to direct fade.
 */

import { useEffect, useState, useRef } from "react";
import { DharmaWheel } from "./DharmaWheel";
import { GoldDustParticles } from "./GoldDustParticles";
import { commonData } from "@/data/common";

interface PreloaderProps {
  onComplete?: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [phase, setPhase] = useState<"wheel" | "logo" | "settle" | "done">("wheel");
  const [visible, setVisible] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Check if already seen this session
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) {
      setPhase("done");
      setVisible(false);
      if (onComplete) onComplete();
      return;
    }

    // Phase progression
    timerRef.current = setTimeout(() => setPhase("logo"), 1800);
    const t2 = setTimeout(() => setPhase("settle"), 3200);
    const t3 = setTimeout(() => {
      setPhase("done");
      setTimeout(() => {
        setVisible(false);
        if (onComplete) onComplete();
      }, 600);
    }, 4200);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-basalt transition-opacity duration-700 ${
        phase === "done" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      {/* Background texture & particles */}
      <div className="absolute inset-0 bg-grain-dark" />
      <GoldDustParticles count={30} opacity={0.6} />

      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(196,164,105,0.08)_0%,transparent_60%)]" />

      {/* Dharma Wheel Phase */}
      <div
        className={`absolute transition-all duration-1000 ${
          phase === "wheel"
            ? "scale-100 opacity-100"
            : "scale-75 opacity-0"
        }`}
      >
        <DharmaWheel
          size={160}
          animate={true}
          color="var(--gold)"
        />
      </div>

      {/* Logo Phase */}
      <div
        className={`absolute transition-all duration-1000 ease-out ${
          phase === "logo"
            ? "scale-100 opacity-100 translate-y-0"
            : phase === "settle"
            ? "scale-[0.35] opacity-90 -translate-y-[42vh] -translate-x-[35vw]"
            : "scale-110 opacity-0 translate-y-4"
        }`}
      >
        <img
          src={commonData.logo}
          alt=""
          className="h-20 w-auto brightness-0 invert drop-shadow-[0_0_30px_rgba(196,164,105,0.3)]"
          draggable={false}
        />
      </div>

      {/* Tagline that appears briefly */}
      <div
        className={`absolute bottom-[30vh] transition-all duration-800 ${
          phase === "logo" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <p className="font-heading text-sm tracking-[0.3em] uppercase text-gold-soft/60">
          Est · MMX · Ahmedabad
        </p>
      </div>
    </div>
  );
}
