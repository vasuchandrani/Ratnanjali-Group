import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/RevealOnScroll";
import { ShlokaKicker } from "@/components/heritage/ShlokaKicker";
import { projects } from "@/data/projects";

const AUTO_MS = 5500;
const TRANSITION_MS = 1100;

export function ProudProjects() {
  const list = projects.filter((p) => p.slug !== "hastinapur").slice(0, 3);
  const slides = [...list, list[0]];
  const [idx, setIdx] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [hover, setHover] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setIdx((i) => i + 1), AUTO_MS);
    return () => { if (timer.current) clearTimeout(timer.current); };
  }, [idx]);

  useEffect(() => {
    if (idx === list.length) {
      const t = setTimeout(() => {
        setAnimate(false);
        setIdx(0);
        requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)));
      }, TRANSITION_MS);
      return () => clearTimeout(t);
    }
  }, [idx, list.length]);

  const goNext = () => setIdx((i) => i + 1);
  const goPrev = () => {
    if (idx === 0) {
      setAnimate(false);
      setIdx(list.length);
      requestAnimationFrame(() => requestAnimationFrame(() => {
        setAnimate(true);
        setIdx(list.length - 1);
      }));
    } else {
      setIdx((i) => i - 1);
    }
  };

  const activeDot = idx % list.length;

  return (
    <section className="relative bg-background py-28 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-grain pointer-events-none" />

      <div className="container-x relative mx-auto max-w-[1400px]">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <Reveal>
            <div className="eyebrow eyebrow-gold mb-4"><span className="rule" />Our Proud Projects</div>
            <ShlokaKicker className="mb-6">
              Each landmark, a verse in the city's living poem
            </ShlokaKicker>
            <h2 className="font-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl kerning-tight">
              A portfolio of{" "}
              <em className="not-italic font-heading italic text-foreground/60">considered</em>{" "}
              landmarks.
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <Link to="/projects" className="group inline-flex items-center gap-3 font-label text-[11px] uppercase tracking-[0.24em]">
              <span className="gold-underline">View All Projects</span>
              <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-gold" />
            </Link>
          </Reveal>
        </div>

        <Reveal className="mt-16">
          <div
            className="group/frame relative carved-frame-hover"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden border border-gold/15 bg-basalt shadow-elevated">
              {/* Carved corner brackets */}
              <div className="carved-corner carved-corner-tl" style={{ width: 32, height: 32 }} />
              <div className="carved-corner carved-corner-tr" style={{ width: 32, height: 32 }} />
              <div className="carved-corner carved-corner-bl" style={{ width: 32, height: 32 }} />
              <div className="carved-corner carved-corner-br" style={{ width: 32, height: 32 }} />

              {/* Inner border frame */}
              <div className="pointer-events-none absolute inset-3 z-30 border border-gold/10" />

              <div
                className="flex h-full"
                style={{
                  width: `${slides.length * 100}%`,
                  transform: `translateX(-${(100 / slides.length) * idx}%)`,
                  transition: animate ? `transform ${TRANSITION_MS}ms cubic-bezier(.7,0,.2,1)` : "none",
                }}
              >
                {slides.map((p, i) => {
                  const isAyodhya = p.slug === "ayodhya";
                  return (
                    <Link
                      key={`${p.slug}-${i}`}
                      to="/projects/$slug"
                      params={{ slug: p.slug }}
                      className="relative h-full block overflow-hidden cursor-pointer group/slide"
                      style={{ width: `${100 / slides.length}%` }}
                    >
                      <img src={p.cover} alt={p.name} className="h-full w-full object-cover transition-transform duration-700 group-hover/slide:scale-105" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-basalt/90 via-basalt/30 to-transparent" />
                      {/* Ayodhya — warm homecoming glow (Ramayana resonance) */}
                      {isAyodhya && (
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-amber-900/20 pointer-events-none" />
                      )}

                      <div className="absolute inset-0 flex flex-col justify-between p-8 text-white sm:p-12 lg:p-16">
                        <div className="flex items-start justify-between">
                          <div className="border border-gold/20 bg-basalt/60 px-4 py-2 font-label text-[9px] uppercase tracking-[0.3em] text-gold-soft backdrop-blur-sm">
                            {p.categoryLabel} · {p.status}
                          </div>
                        </div>

                        <div className="max-w-3xl">
                          <div className="font-label text-[10px] uppercase tracking-[0.3em] text-gold-soft/60">
                            {p.location}
                          </div>
                          <h3 className="mt-3 font-display text-4xl leading-[1.02] kerning-tight tracking-wide sm:text-6xl lg:text-7xl">
                            {p.name}
                          </h3>
                          <p className="mt-3 max-w-xl font-heading text-base italic text-gold-soft/80 sm:text-lg">
                            {p.tagline}
                          </p>
                          <div className="mt-6 h-px w-16 bg-gold/50" />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>

              {/* Nav arrows */}
              <button
                aria-label="Previous project"
                onClick={goPrev}
                className={`absolute left-5 top-1/2 z-40 flex h-14 w-14 -translate-y-1/2 items-center justify-center border border-gold/30 bg-basalt/40 text-gold-soft backdrop-blur-md transition-all duration-500 hover:bg-gold/10 hover:border-gold/60 ${
                  hover ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"
                }`}
              >
                <ArrowLeft size={18} strokeWidth={1.5} />
              </button>
              <button
                aria-label="Next project"
                onClick={goNext}
                className={`absolute right-5 top-1/2 z-40 flex h-14 w-14 -translate-y-1/2 items-center justify-center border border-gold/30 bg-basalt/40 text-gold-soft backdrop-blur-md transition-all duration-500 hover:bg-gold/10 hover:border-gold/60 ${
                  hover ? "translate-x-0 opacity-100" : "translate-x-2 opacity-0"
                }`}
              >
                <ArrowRight size={18} strokeWidth={1.5} />
              </button>
            </div>

            {/* Dharma-chakra dot indicators */}
            <div className="mt-8 flex items-center justify-end">
              <div className="flex gap-3">
                {list.map((p, i) => (
                  <button
                    key={p.slug}
                    onClick={() => setIdx(i)}
                    aria-label={`Go to ${p.name}`}
                    className={`transition-all duration-500 rounded-full ${
                      i === activeDot
                        ? "w-3 h-3 bg-gold shadow-[0_0_8px_rgba(196,164,105,0.3)]"
                        : "w-2 h-2 bg-gold/25 hover:bg-gold/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
