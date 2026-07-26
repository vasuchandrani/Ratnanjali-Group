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
              Development Expertise
              <span className="rule ml-3" />
            </div>
            <ShlokaKicker className="mb-6 justify-center flex">
              As the wheel turns, so does vision become foundation
            </ShlokaKicker>
            <h2 className="font-display text-4xl leading-[1.1] sm:text-5xl lg:text-6xl tracking-wide text-foreground font-semibold">
              Four Disciplines.
              <br />
              <span className="gold-gradient-text font-semibold">One Standard of Craft.</span>
            </h2>
            <p className="mt-6 max-w-xl mx-auto font-body text-base leading-relaxed text-muted-foreground">
              From signature residences to landmark commercial avenues, our portfolio is shaped by a singular pursuit of permanence.
            </p>
          </Reveal>
        </div>

        {/* 4 Names Navigation */}
        <Reveal delay={1} className="w-full">
          <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-12 lg:gap-x-8 xl:gap-x-16 border-b border-gold/15 pb-8 mb-12">
            {expertise.sectors.map((s, idx) => (
              <button
                key={s.title}
                onMouseEnter={() => setActiveIdx(idx)}
                onFocus={() => setActiveIdx(idx)}
                className={`relative font-display text-xl sm:text-2xl lg:text-2xl xl:text-3xl whitespace-nowrap tracking-wide transition-all duration-500 cursor-pointer ${
                  activeIdx === idx 
                    ? "gold-gradient-text font-semibold scale-105" 
                    : "text-foreground/45 hover:text-foreground/80"
                }`}
              >
                {s.title}
                {/* Underline indicator */}
                <span 
                  className={`absolute -bottom-[9px] left-0 h-[2px] bg-gradient-to-r from-gold to-gold-soft transition-all duration-500 ${
                    activeIdx === idx ? "w-full" : "w-0"
                  }`}
                />
              </button>
            ))}
          </div>
        </Reveal>

        {/* Smooth Image Cross-Fade & Description Below */}
        <Reveal delay={2}>
          <div className="relative w-full max-w-5xl mx-auto aspect-[16/10] md:aspect-[21/9] overflow-hidden border border-gold/15 bg-stone shadow-md hover:border-gold/30 transition-all duration-500 carved-frame-hover">
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
                <div className="absolute inset-0 bg-gradient-to-t from-basalt/95 via-basalt/40 to-transparent" />
                
                {/* Content Container */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 md:p-12 text-white z-20">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="font-display text-lg text-gold font-semibold">{s.num}</span>
                      <span className="h-px w-8 bg-gold/50" />
                      <span className="font-label text-[10px] uppercase tracking-[0.25em] text-gold-soft">
                        Signature Domain
                      </span>
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl tracking-wide font-semibold text-white">
                      {s.title} Developments
                    </h3>
                    <p className="mt-3 max-w-xl font-body text-sm leading-relaxed text-white/80">
                      {s.desc}
                    </p>
                    
                    {/* Link button to projects page */}
                    <Link 
                      to={s.to}
                      className="mt-6 inline-flex items-center gap-3 border border-white/40 hover:border-gold hover:bg-gold/15 px-6 py-3 font-label text-[10px] uppercase tracking-[0.25em] text-white transition-all duration-300"
                    >
                      Explore Projects
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
