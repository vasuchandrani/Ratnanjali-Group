import { Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { projects } from "@/data/projects";
import { Reveal } from "@/components/site/RevealOnScroll";
import { ShlokaKicker } from "@/components/heritage/ShlokaKicker";
import { HeritageDivider } from "@/components/heritage/HeritageDivider";
import { ScrollIndicator } from "@/components/site/ScrollIndicator";
import { ArrowRight, Download } from "lucide-react";

export function ProjectsPage() {
  // Toggle to easily turn off the scroll slide animations on project items if needed in the future
  const ENABLE_SLIDE_ANIMATIONS = true;

  return (
    <PageShell>
      {/* Hero header */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-basalt text-white">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://cdn.sanity.io/images/72qij255/production/f2026833e1c3cc1bbec89d195d7cfa4267b47a05-622x350.jpg"
            alt="Cover background"
            className="h-full w-full object-cover opacity-60 blur-[5px] scale-105"
          />
          {/* Dark overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-basalt/60 via-basalt/30 to-basalt/80" />
          <div className="absolute inset-0 bg-grain-dark pointer-events-none" />
          <div className="absolute inset-0 bg-jali-dark pointer-events-none opacity-15" />
        </div>

        <div className="container-x relative z-10 mx-auto max-w-[1400px] flex flex-col items-center justify-center text-center">
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center gap-5 mb-4 opacity-0 animate-[fade-up_0.8s_ease-out_.3s_forwards]">
              <span className="h-px w-10 bg-gold/40" />
              <span className="eyebrow eyebrow-gold">Portfolio</span>
              <span className="h-px w-10 bg-gold/40" />
            </div>
            <div className="opacity-0 animate-[fade-up_0.8s_ease-out_.5s_forwards] w-full flex justify-center">
              <ShlokaKicker light className="mb-6">
                A chronicle of landmarks, inscribed in the city's memory
              </ShlokaKicker>
            </div>
            <h1 className="max-w-4xl font-display text-5xl leading-[1.02] sm:text-6xl lg:text-7xl tracking-wide text-gold-soft font-semibold opacity-0 animate-[fade-up_1s_ease-out_.6s_forwards]">
              Landmark Developments
            </h1>
            <p className="mt-6 max-w-xl mx-auto font-body text-base leading-[1.7] text-gold-soft/60 sm:text-lg opacity-0 animate-[fade-up_0.8s_ease-out_.9s_forwards]">
              Architectural masterpieces designed to outlive trends.
            </p>
          </div>
          <div className="mt-12 w-full max-w-md mx-auto opacity-0 animate-[fade-in_1.2s_ease-out_1.2s_forwards]">
            <HeritageDivider variant="chakra" />
          </div>
        </div>
        <ScrollIndicator />
      </section>

      {/* Alternating projects list */}
      <section className="bg-background py-20 lg:py-32 relative">
        <div className="absolute inset-0 bg-grain pointer-events-none opacity-50" />
        <div className="container-x relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="space-y-24 lg:space-y-40">
            {projects.map((project, index) => {
              const isEven = index % 2 === 0;
              const imageVariant = ENABLE_SLIDE_ANIMATIONS
                ? (isEven ? "slide-left" : "slide-right")
                : "blur";

               return (
                <div 
                  key={project.slug} 
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch"
                >
                  {/* Image Column */}
                  <div className={`lg:col-span-7 flex flex-col ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <Reveal variant={imageVariant} className="flex-1 flex flex-col">
                      <Link
                        to="/projects/$slug"
                        params={{ slug: project.slug }}
                        className="group relative block aspect-[16/10] lg:aspect-auto lg:h-full w-full overflow-hidden border border-gold/10 bg-stone shadow-md hover:border-gold/30 transition-all duration-500 carved-frame-hover flex-1"
                      >
                        {/* Carved corner brackets */}
                        <div className="carved-corner carved-corner-tl" />
                        <div className="carved-corner carved-corner-tr" />
                        <div className="carved-corner carved-corner-bl" />
                        <div className="carved-corner carved-corner-br" />

                        <img
                          src={project.cover}
                          alt={project.name}
                          className="img-zoom absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-basalt/10 group-hover:bg-transparent transition-colors duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-basalt/40 via-transparent to-transparent pointer-events-none" />
                      </Link>
                    </Reveal>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-5 flex flex-col justify-center ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <Reveal variant="blur" delay={1} className="h-full flex flex-col justify-center">
                      <div className="space-y-4 lg:space-y-5 py-4">
                        {/* Title & Tagline Group */}
                        <div className="space-y-1">
                          <h2 className="font-display text-3xl sm:text-4xl lg:text-4xl xl:text-5xl leading-[1.1] text-foreground tracking-wide font-semibold">
                            <Link 
                              to="/projects/$slug"
                              params={{ slug: project.slug }}
                              className="hover:text-gold transition-colors duration-300"
                            >
                              {project.name}
                            </Link>
                          </h2>
                          <p className="font-heading text-lg sm:text-xl italic text-gold-soft">
                            {project.tagline}
                          </p>
                        </div>

                        {/* Category Label */}
                        <div className="font-label text-[11px] uppercase tracking-[0.25em] text-gold font-semibold">
                          {project.categoryLabel}
                        </div>

                        {/* Location & Status Details */}
                        <div className="grid grid-cols-2 gap-6 py-3 border-y border-gold/10">
                          <div>
                            <span className="block font-label text-[9px] uppercase tracking-[0.2em] text-muted-foreground/60 mb-1">
                              Location
                            </span>
                            <span className="font-body text-[11px] font-semibold text-foreground/80 leading-snug block whitespace-pre-line">
                              {project.location.replace(", ", ",\n")}
                            </span>
                          </div>
                          <div>
                            <span className="block font-label text-[9px] uppercase tracking-[0.2em] text-muted-foreground/60 mb-1">
                              Status
                            </span>
                            <div className="flex">
                              {project.status === "completed" && (
                                <span className="inline-flex items-center gap-1.5 font-display text-[9px] font-bold text-stone-dark/80 bg-stone-soft/20 border border-stone-dark/15 px-2.5 py-0.5 rounded-sm">
                                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                                  Completed
                                </span>
                              )}
                              {project.status === "ongoing" && (
                                <span className="inline-flex items-center gap-1.5 font-display text-[9px] font-bold text-gold bg-gold/5 border border-gold/25 px-2.5 py-0.5 rounded-sm">
                                  <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
                                  Ongoing
                                </span>
                              )}
                              {project.status === "upcoming" && (
                                <span className="inline-flex items-center gap-1.5 font-display text-[9px] font-bold text-gold-soft/70 bg-gold/5 border border-gold/15 px-2.5 py-0.5 rounded-sm">
                                  <span className="h-1.5 w-1.5 rounded-full bg-gold-soft/50 animate-pulse" />
                                  Upcoming
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="font-body text-sm sm:text-base leading-relaxed text-muted-foreground/90">
                          {project.description}
                        </p>

                        {/* Action buttons */}
                        <div className="flex flex-nowrap items-center gap-3 pt-2">
                          <Link
                            to="/projects/$slug"
                            params={{ slug: project.slug }}
                            className="group inline-flex items-center gap-2 border border-gold/60 bg-gold/5 px-6 py-3 font-display text-[11px] font-bold uppercase tracking-[0.2em] text-gold hover:bg-gold/15 hover:border-gold transition-all duration-300 rounded-sm whitespace-nowrap"
                          >
                            Explore
                            <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                          </Link>

                          {project.brochure && (
                            <a
                              href="https://ratnanjaligroup.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 border border-stone-dark/30 bg-stone-soft/20 px-6 py-3 font-display text-[11px] font-bold uppercase tracking-[0.2em] text-stone-dark hover:text-stone-dark hover:bg-stone-soft/40 hover:border-stone-dark/50 transition-all duration-300 rounded-sm whitespace-nowrap"
                            >
                              Download Brochure
                              <Download size={12} />
                            </a>
                          )}
                        </div>
                      </div>
                    </Reveal>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
