import { useState, useRef, useEffect } from "react";
import { Reveal } from "@/components/site/RevealOnScroll";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reasons = [
  {
    t: "Architectural Excellence",
    d: "Every elevation is shaped with named architects and custom design reviews that are never templated.",
    thread: "Ramayana"
  },
  {
    t: "Strategic Locations",
    d: "Every site is hand selected at addresses that compound in value.",
    thread: "Mahabharata"
  },
  {
    t: "Quality Construction",
    d: "Specified by structural consultants, executed with audited material grades.",
    thread: "Jainism"
  },
  {
    t: "Timely Delivery",
    d: "Our possession schedules are honoured as a discipline carried across two decades.",
    thread: "Ramayana"
  },
  {
    t: "Sustainable Development",
    d: "Rainwater recharge, sewage treatment, and low impact materials are built into every project.",
    thread: "Jainism"
  },
  {
    t: "Timeless Value",
    d: "We design for the second owner as carefully as the first to build appreciation.",
    thread: "Buddhism"
  },
];

export function WhyChoose() {
  const [mobileIdx, setMobileIdx] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, offsetWidth } = scrollRef.current;
    if (offsetWidth > 0) {
      const newIdx = Math.round(scrollLeft / (offsetWidth * 0.85));
      setMobileIdx(Math.min(reasons.length - 1, Math.max(0, newIdx)));
    }
  };

  const scrollToIdx = (i: number) => {
    if (!scrollRef.current) return;
    const cards = scrollRef.current.children;
    if (cards[i]) {
      (cards[i] as HTMLElement).scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
      setMobileIdx(i);
    }
  };

  return (
    <section className="relative bg-stone-soft py-20 text-foreground lg:py-36 overflow-hidden border-t border-border/40">
      {/* Background textures */}
      <div className="absolute inset-0 bg-grain pointer-events-none" />
      <div className="absolute inset-0 bg-jali pointer-events-none opacity-30" />

      <div className="container-x relative mx-auto max-w-[1400px]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <Reveal className="max-w-3xl">
            <div className="eyebrow mb-3 text-gold/60">
              <span className="rule" />
              Why Ratnanjali
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl tracking-wide leading-[1.1]">
              The discipline behind{" "}
              <em className="not-italic font-heading italic gold-gradient-text">every Ratnanjali address.</em>
            </h2>
          </Reveal>

          {/* Mobile swipe hint */}
          <div className="flex md:hidden items-center justify-between text-xs text-gold/70 pt-2">
            <span className="font-label text-[10px] uppercase tracking-[0.25em]">
              Swipe to explore ({mobileIdx + 1}/{reasons.length})
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => scrollToIdx(Math.max(0, mobileIdx - 1))}
                disabled={mobileIdx === 0}
                aria-label="Previous reason"
                className="p-1.5 border border-gold/30 bg-white text-gold disabled:opacity-30 disabled:pointer-events-none"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => scrollToIdx(Math.min(reasons.length - 1, mobileIdx + 1))}
                disabled={mobileIdx === reasons.length - 1}
                aria-label="Next reason"
                className="p-1.5 border border-gold/30 bg-white text-gold disabled:opacity-30 disabled:pointer-events-none"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* ─── Mobile Horizontal Swipeable Carousel (visible on < md) ─── */}
        <div className="mt-8 block md:hidden">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 -mx-5 px-5 pb-4 pt-1"
          >
            {reasons.map((r, i) => (
              <div
                key={r.t}
                className="w-[84vw] max-w-[320px] flex-shrink-0 snap-center bg-white p-7 border border-gold/25 shadow-sm relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-4xl gold-gradient-text opacity-70 num">
                      0{i + 1}
                    </span>
                    <span className="font-label text-[9px] uppercase tracking-[0.25em] text-gold/50 border border-gold/20 px-2 py-0.5">
                      Pillar 0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl tracking-wide text-gold font-semibold leading-snug">
                    {r.t}
                  </h3>
                  <p className="mt-3 font-body text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    {r.d}
                  </p>
                </div>
                <div className="mt-6 h-px w-10 bg-gold/40" />
              </div>
            ))}
          </div>

          {/* Mobile Dot Indicators */}
          <div className="mt-4 flex items-center justify-center gap-2">
            {reasons.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIdx(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  mobileIdx === i
                    ? "w-6 h-1.5 bg-gold"
                    : "w-1.5 h-1.5 bg-gold/30 hover:bg-gold/60"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ─── Desktop / Tablet Grid (visible on >= md) ─── */}
        <div className="mt-16 hidden md:grid gap-px bg-gold/20 md:grid-cols-2 lg:grid-cols-3 border border-gold/10">
          {reasons.map((r, i) => (
            <Reveal
              key={r.t}
              delay={(i % 3) as 0 | 1 | 2}
              className="group bg-white p-10 transition-colors hover:bg-stone-soft/30 flex flex-col justify-between"
            >
              <div>
                {/* Gold index numeral */}
                <div className="font-display text-5xl gold-gradient-text opacity-60 num">
                  0{i + 1}
                </div>
                <h3 className="mt-6 font-display text-2xl tracking-wide text-gold font-semibold">{r.t}</h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">{r.d}</p>
              </div>
              {/* Gold accent line */}
              <div className="mt-6 h-px w-10 bg-gold/30 transition-all duration-700 group-hover:w-20 group-hover:bg-gold/60" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
