import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/site/RevealOnScroll";
import { DharmaWheel } from "@/components/heritage/DharmaWheel";
import { ShlokaKicker } from "@/components/heritage/ShlokaKicker";

const stats = [
  { v: 15, suffix: "+", l: "Years of Experience", k: "Crafting since 2007" },
  { v: 25, suffix: "+", l: "Projects Delivered", k: "Across Ahmedabad" },
  { v: 3.2, suffix: "M", l: "Sq.Ft. Developed", k: "Residential & commercial", decimals: 1 },
  { v: 4200, suffix: "+", l: "Families Served", k: "Trusted homeowners" },
];

function useCount(target: number, decimals = 0) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const start = performance.now();
          const dur = 2200;
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(target * eased);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [target]);
  return [val.toFixed(decimals), ref] as const;
}

function Stat({ v, suffix, l, k, num }: { v: number; suffix: string; l: string; k: string; decimals?: number; num: string }) {
  const displayVal = v.toString().replace(/\d/g, "X");
  return (
    <div className="group relative flex flex-col gap-3 px-6 py-8 lg:px-8">
      <div className="font-label text-[9px] uppercase tracking-[0.35em] text-gold/40">{num}</div>
      <div className="font-display text-4xl leading-none gold-gradient-text num sm:text-5xl lg:text-[3.25rem]">
        {displayVal}
        <span className="text-gold">{suffix}</span>
      </div>
      <div className="space-y-0.5">
        <div className="font-display text-base text-foreground font-semibold">{l}</div>
        <div className="font-body text-xs leading-relaxed text-muted-foreground">{k}</div>
      </div>
      <div className="mt-1 h-px w-10 bg-gold/30 transition-all duration-700 group-hover:w-20 group-hover:bg-gold/60" />
    </div>
  );
}

export function Stats() {
  return (
    <section className="relative bg-background py-20 lg:py-28 overflow-hidden border-t border-border/40">
      {/* Background textures */}
      <div className="absolute inset-0 bg-grain pointer-events-none" />

      {/* Faint dharma-chakra accent — Buddhist "steady growth" thread */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.08] pointer-events-none">
        <DharmaWheel size={500} animate slow color="var(--gold)" />
      </div>

      <div className="container-x relative mx-auto max-w-[1400px]">
        <Reveal>
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="eyebrow text-gold/50 mb-4"><span className="rule" />Impact in Numbers</div>
              <ShlokaKicker>Steady as the wheel, measured in trust</ShlokaKicker>
              <h2 className="mt-4 font-display text-3xl leading-[1.05] tracking-wide sm:text-4xl lg:text-[2.5rem] text-foreground font-semibold">
                Two decades.{" "}
                <em className="not-italic font-heading italic text-muted-foreground">Measured in trust.</em>
              </h2>
            </div>
            <p className="max-w-sm font-body text-sm leading-relaxed text-muted-foreground">
              Every figure represents a family welcomed, a brand homed, and a piece of the city carefully composed.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 divide-y divide-gold/20 border-y border-gold/20 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
          {stats.map((s, i) => (
            <Stat key={s.l} {...s} num={`0${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
