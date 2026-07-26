import { useRef, useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

interface Props {
  num: string;
  title: string;
  subtitle: string;
  items: Project[];
}

export function CategoryRow({ num, title, subtitle, items }: Props) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const update = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  };

  useEffect(() => {
    update();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [items.length]);

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const w = card ? card.offsetWidth + 32 : el.clientWidth * 0.7;
    el.scrollBy({ left: dir * w, behavior: "smooth" });
  };

  if (!items.length) return null;

  return (
    <section className="border-t border-border/50 py-20 first:border-t-0 lg:py-28">
      {/* Section header */}
      <div className="container-x mx-auto max-w-[1400px]">
        <div className="flex items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4">
              <span className="font-label text-[10px] tracking-[0.25em] text-gold/50 num">{num}</span>
              <span className="inline-block h-px w-10 bg-gold/30" />
            </div>
            <h2 className="mt-5 font-display text-[2.25rem] leading-[1.05] tracking-wide sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="mt-3 max-w-md font-body text-[15px] leading-relaxed text-muted-foreground/80">
              {subtitle}
            </p>
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <button
              aria-label="Scroll left"
              onClick={() => scrollByCard(-1)}
              disabled={!canPrev}
              className="flex h-10 w-10 items-center justify-center border border-gold/20 text-gold-soft/60 transition-all duration-300 hover:border-gold/50 hover:bg-gold/10 hover:text-gold-soft disabled:cursor-not-allowed disabled:opacity-25"
            >
              <ArrowLeft size={14} strokeWidth={1.5} />
            </button>
            <button
              aria-label="Scroll right"
              onClick={() => scrollByCard(1)}
              disabled={!canNext}
              className="flex h-10 w-10 items-center justify-center border border-gold/20 text-gold-soft/60 transition-all duration-300 hover:border-gold/50 hover:bg-gold/10 hover:text-gold-soft disabled:cursor-not-allowed disabled:opacity-25"
            >
              <ArrowRight size={14} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll track */}
      <div
        ref={trackRef}
        className="mx-auto mt-14 flex max-w-[1400px] gap-8 overflow-x-auto pb-6 pt-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        style={{
          scrollSnapType: "x mandatory",
          paddingLeft: "clamp(2rem, 5vw, 4rem)",
          paddingRight: "clamp(2rem, 5vw, 4rem)",
        }}
      >
        {items.map((p) => (
          <Link
            key={p.slug}
            to="/projects/$slug"
            params={{ slug: p.slug }}
            data-card
            className="group relative block w-[78vw] shrink-0 overflow-hidden sm:w-[42vw] lg:w-[calc((100%-4rem)/3.1)] carved-frame-hover"
            style={{ scrollSnapAlign: "start" }}
          >
            {/* Image container */}
            <div className="relative aspect-[3/4] overflow-hidden border border-gold/10 bg-stone">
              {/* Carved corner brackets */}
              <div className="carved-corner carved-corner-tl" />
              <div className="carved-corner carved-corner-tr" />
              <div className="carved-corner carved-corner-bl" />
              <div className="carved-corner carved-corner-br" />

              <img
                src={p.cover}
                alt={p.name}
                className="img-zoom h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-basalt/30 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40" />
              <div className="absolute inset-0 bg-basalt/0 transition-colors duration-500 group-hover:bg-basalt/10" />

              {/* Category badge */}
              <div className="absolute left-5 top-5">
                <span className="inline-block border border-gold/20 bg-basalt/40 px-3.5 py-1.5 font-label text-[9px] uppercase tracking-[0.28em] text-gold-soft backdrop-blur-md">
                  {p.categoryLabel}
                </span>
              </div>
            </div>

            {/* Text area */}
            <div className="mt-6 flex items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="font-label text-[9px] uppercase tracking-[0.28em] text-gold/40">
                  {p.location}
                </div>
                <h3 className="mt-2 font-display text-[1.375rem] leading-tight tracking-wide sm:text-2xl">
                  {p.name}
                </h3>
                <p className="mt-1.5 font-heading text-sm italic text-muted-foreground/70">{p.tagline}</p>
              </div>
              <div className="mt-1 shrink-0 border border-gold/20 p-2 transition-all duration-300 group-hover:border-gold/50 group-hover:bg-gold/10 group-hover:text-gold">
                <ArrowUpRight size={14} strokeWidth={1.5} className="text-gold-soft/50 group-hover:text-gold" />
              </div>
            </div>

            {/* Bottom gold accent */}
            <div className="mt-5 h-px w-0 bg-gradient-to-r from-gold/60 to-transparent transition-all duration-700 group-hover:w-1/2" />
          </Link>
        ))}
      </div>
    </section>
  );
}
