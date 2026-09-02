import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/RevealOnScroll";
import { homeData } from "@/data/home";
import { ShlokaKicker } from "@/components/heritage/ShlokaKicker";

export function Expertise() {
  const { expertise } = homeData;
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="relative bg-stone-soft py-28 lg:py-36 overflow-hidden">
      {/* Subtle grain texture */}
      <div className="absolute inset-0 bg-grain pointer-events-none" />

      <div className="relative mx-auto w-[90%] lg:w-[85%] max-w-[1400px]">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <div className="eyebrow eyebrow-gold mb-4 justify-center flex items-center">
              <span className="rule" />
              Our Philosophy
              <span className="rule ml-3" />
            </div>
            <h2 className="font-display text-4xl leading-[1.1] sm:text-5xl lg:text-6xl tracking-wide text-foreground font-semibold">
              Four Principles.
              <br />
              <span className="gold-gradient-text font-semibold">One Enduring Vision.</span>
            </h2>
            <p className="mt-6 max-w-xl mx-auto font-body text-base leading-relaxed text-muted-foreground">
              Every landmark begins with a philosophy. Our developments are guided by four enduring principles that define every project we create.
            </p>
          </Reveal>
        </div>

        {/* 4 Names Navigation: 2 up, 2 down on mobile; single row on desktop */}
        <Reveal delay={1} className="w-full">
          <div className="grid grid-cols-2 lg:flex lg:flex-nowrap items-center justify-center gap-x-6 gap-y-5 sm:gap-x-10 md:gap-x-12 lg:gap-x-8 xl:gap-x-16 border-b border-gold/15 pb-6 sm:pb-8 mb-8 sm:mb-12">
            {expertise.sectors.map((s, idx) => (
              <button
                key={s.title}
                onClick={() => setActiveIdx(idx)}
                onMouseEnter={() => setActiveIdx(idx)}
                onFocus={() => setActiveIdx(idx)}
                className={`relative font-display text-lg sm:text-2xl lg:text-2xl xl:text-3xl whitespace-nowrap tracking-wide transition-all duration-500 cursor-pointer pb-2 flex flex-col items-center justify-center ${
                  activeIdx === idx
                    ? "gold-gradient-text font-semibold scale-105"
                    : "text-foreground/45 hover:text-foreground/80"
                }`}
              >
                <span>{s.title}</span>
                {/* Underline indicator */}
                <span
                  className={`absolute -bottom-[2px] h-[2px] bg-gradient-to-r from-gold to-gold-soft transition-all duration-500 ${
                    activeIdx === idx ? "w-full" : "w-0"
                  }`}
                />
              </button>
            ))}
          </div>
        </Reveal>

        {/* Smooth Image Cross-Fade & Description Below */}
        <Reveal delay={2}>
          <div className="relative w-full max-w-5xl mx-auto aspect-[4/5] sm:aspect-[16/10] md:aspect-[21/9] min-h-[400px] sm:min-h-[auto] overflow-hidden border border-gold/15 bg-stone shadow-md hover:border-gold/30 transition-all duration-500 carved-frame-hover">
            {/* Carved corner brackets */}
            <div className="carved-corner carved-corner-tl" />
            <div className="carved-corner carved-corner-tr" />
            <div className="carved-corner carved-corner-bl" />
            <div className="carved-corner carved-corner-br" />

            {expertise.sectors.map((s, idx) => (
              <div
                key={s.title}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  activeIdx === idx
                    ? "opacity-100 scale-100 blur-0 z-10"
                    : "opacity-0 scale-105 blur-[4px] z-0 pointer-events-none"
                }`}
              >
                <img
                  src={s.img}
                  alt={s.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                {/* Overlay Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-basalt/95 via-basalt/50 to-transparent" />

                {/* Content Container */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 md:p-12 text-white z-20">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-3 sm:gap-4 mb-2">
                      <span className="font-display text-base sm:text-lg text-gold font-semibold">{s.num}</span>
                      <span className="h-px w-6 sm:w-8 bg-gold/50" />
                      <span className="font-label text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-gold-soft">
                        Core Principle
                      </span>
                    </div>
                    <h3 className="font-display text-xl sm:text-3xl lg:text-4xl tracking-wide font-semibold text-white">
                      {s.cardTitle}
                    </h3>
                    <p className="mt-2 sm:mt-3 max-w-xl font-body text-xs sm:text-sm leading-relaxed text-white/80 line-clamp-3 sm:line-clamp-none">
                      {s.desc}
                    </p>

                    {/* Link button to projects page */}
                    <Link
                      to={s.to}
                      className="mt-4 sm:mt-6 inline-flex items-center gap-3 border border-white/40 hover:border-gold hover:bg-gold/15 px-5 sm:px-6 py-2.5 sm:py-3 font-label text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-white transition-all duration-300"
                    >
                      Explore Philosophy
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
