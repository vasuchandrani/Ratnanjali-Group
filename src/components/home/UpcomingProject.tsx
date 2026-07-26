import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { homeData } from "@/data/home";
import { Reveal } from "@/components/site/RevealOnScroll";
import { ShlokaKicker } from "@/components/heritage/ShlokaKicker";
import { HeritageDivider } from "@/components/heritage/HeritageDivider";

export function UpcomingProject() {
  const { upcomingProject } = homeData;

  return (
    <section className="relative overflow-hidden bg-background pt-20 pb-28 text-foreground lg:pt-32 lg:pb-40 border-t border-border/40">
      {/* Background textures */}
      <div className="absolute inset-0 bg-grain pointer-events-none" />
      <div className="absolute inset-0 bg-jali pointer-events-none opacity-40" />
      <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute -left-40 -bottom-40 h-[600px] w-[600px] rounded-full bg-gold-soft/5 blur-[120px] pointer-events-none" />

      <div className="container-x relative mx-auto max-w-[1400px]">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-24 items-center">
          {/* Text Content */}
          <div className="lg:col-span-6">
            <Reveal>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-gold/50" />
                <span className="font-label text-[10px] uppercase tracking-[0.35em] text-gold/60 flex items-center gap-1.5">
                  <Sparkles size={12} className="text-gold/50" />
                  {upcomingProject.eyebrow}
                </span>
              </div>

              {/* Mahabharata resonance — Hastinapur: seat of legacy */}
              <ShlokaKicker className="mb-6">
                Built for generations, as the ancients built Hastinapur
              </ShlokaKicker>

              <h2 className="font-display text-5xl leading-[1.02] sm:text-6xl lg:text-7xl tracking-wide text-foreground">
                {upcomingProject.title} <br />
                <em className="not-italic font-heading italic gold-gradient-text">{upcomingProject.titleItalic}</em>
              </h2>

              <p className="mt-4 font-label text-[10px] uppercase tracking-[0.3em] text-gold/40">
                {upcomingProject.location}
              </p>
            </Reveal>

            <Reveal delay={1} className="mt-8 max-w-xl space-y-6 font-body text-base leading-[1.8] text-muted-foreground">
              <p>{upcomingProject.description1}</p>
              <p>{upcomingProject.description2}</p>
            </Reveal>

            {/* Highlights as carved plaques */}
            <Reveal delay={2} className="mt-10 grid grid-cols-2 gap-6 border-t border-gold/20 pt-8">
              {upcomingProject.highlights.map((h, i) => (
                <div
                  key={h.title}
                  className="group border-l border-gold/30 pl-4 transition-all hover:border-gold/60"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  <h4 className="font-display text-lg text-gold">{h.title}</h4>
                  <p className="mt-1 font-body text-xs text-muted-foreground leading-relaxed">{h.desc}</p>
                </div>
              ))}
            </Reveal>

            {/* CTAs */}
            <Reveal delay={3} className="mt-12">
              <div className="flex flex-wrap items-center gap-6">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 border border-gold/50 bg-gold/5 px-8 py-4 font-label text-[11px] uppercase tracking-[0.24em] text-gold transition-all gold-shimmer hover:bg-gold/15 hover:border-gold"
                >
                  Register Interest
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 border border-foreground/20 text-foreground/60 px-8 py-4 font-label text-[11px] uppercase tracking-[0.24em] transition-all hover:border-foreground/30 hover:bg-foreground/5"
                >
                  Partner With Us
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <Reveal className="relative group/visual carved-frame-hover">
              <Link
                to="/projects/$slug"
                params={{ slug: "hastinapur" }}
                className="block cursor-pointer"
              >
                {/* Outer hover frame */}
                <div className="absolute -inset-4 border border-gold/5 scale-95 opacity-0 transition-all duration-700 group-hover/visual:scale-100 group-hover/visual:opacity-100 pointer-events-none" />

                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden border border-gold/15 bg-white shadow-elevated">
                  {/* Carved corners */}
                  <div className="carved-corner carved-corner-tl" />
                  <div className="carved-corner carved-corner-tr" />
                  <div className="carved-corner carved-corner-bl" />
                  <div className="carved-corner carved-corner-br" />

                  <img
                    src={upcomingProject.coverImage}
                    alt={`${upcomingProject.title} ${upcomingProject.titleItalic} rendering`}
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover/visual:scale-105"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent pointer-events-none" />

                  {/* Overlay text */}
                  <div className="absolute bottom-6 left-6 right-6 text-foreground z-20 flex justify-between items-end">
                    <div>
                      <span className="font-label text-[9px] uppercase tracking-[0.3em] text-gold/50">
                        Architectural Rendering
                      </span>
                      <h3 className="font-display text-2xl mt-1 text-foreground tracking-wide font-semibold">
                        {upcomingProject.title} {upcomingProject.titleItalic}
                      </h3>
                    </div>
                    {/* PRE-LAUNCH badge with gold pulse */}
                    <span className="font-label text-[10px] uppercase tracking-[0.25em] text-gold gold-pulse px-3 py-1 border border-gold/30 bg-white/80">
                      PRE-LAUNCH
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>

        {/* Bottom heritage divider */}
        {/* <div className="mt-20">
          <HeritageDivider variant="wave" />
        </div> */}
      </div>
    </section>
  );
}
