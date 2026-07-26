import { Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { projects } from "@/data/projects";
import { Reveal } from "@/components/site/RevealOnScroll";
import { ShlokaKicker } from "@/components/heritage/ShlokaKicker";
import { HeritageDivider } from "@/components/heritage/HeritageDivider";
import { ArrowRight, Download } from "lucide-react";

export function ProjectsPage() {
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
          <Reveal>
            <div className="flex items-center justify-center gap-5 mb-4">
              <span className="h-px w-10 bg-gold/40" />
              <span className="eyebrow eyebrow-gold">Portfolio</span>
              <span className="h-px w-10 bg-gold/40" />
            </div>
            <ShlokaKicker light className="mb-6">
              A chronicle of landmarks, inscribed in the city's memory
            </ShlokaKicker>
            <h1 className="max-w-4xl font-display text-5xl leading-[1.02] sm:text-6xl lg:text-7xl tracking-wide text-gold-soft font-semibold">
              Landmark Developments
            </h1>
            <p className="mt-6 max-w-xl mx-auto font-body text-base leading-[1.7] text-gold-soft/60 sm:text-lg">
              Architectural masterpieces designed to outlive trends.
            </p>
          </Reveal>
          <div className="mt-12 w-full max-w-md mx-auto">
            <HeritageDivider variant="chakra" />
          </div>
        </div>
      </section>

      {/* Alternating projects list */}
      <section className="bg-background py-20 lg:py-32 relative">
        <div className="absolute inset-0 bg-grain pointer-events-none opacity-50" />
        <div className="container-x relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="space-y-24 lg:space-y-40">
            {projects.map((project, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={project.slug} 
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
                >
                  {/* Image Column */}
                  <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <Reveal>
                      <Link
                        to="/projects/$slug"
                        params={{ slug: project.slug }}
                        className="group relative block aspect-[16/10] w-full overflow-hidden border border-gold/10 bg-stone shadow-md hover:border-gold/30 transition-all duration-500 carved-frame-hover"
                      >
                        {/* Carved corner brackets */}
                        <div className="carved-corner carved-corner-tl" />
                        <div className="carved-corner carved-corner-tr" />
                        <div className="carved-corner carved-corner-bl" />
                        <div className="carved-corner carved-corner-br" />

                        <img
                          src={project.cover}
                          alt={project.name}
                          className="img-zoom h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-basalt/10 group-hover:bg-transparent transition-colors duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-basalt/40 via-transparent to-transparent pointer-events-none" />
                      </Link>
                    </Reveal>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <Reveal>
                      <div className="space-y-6 lg:space-y-8">
                        {/* Category eyebrow */}
                        <div className="flex items-center gap-3">
                          <span className="font-label text-[11px] uppercase tracking-[0.25em] text-gold font-semibold">
                            {project.categoryLabel}
                          </span>
                          <span className="h-px w-8 bg-gold/30" />
                          <span className="font-label text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                            {project.location}
                          </span>
                        </div>

                        {/* Title */}
                        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-foreground tracking-wide font-semibold">
                          <Link 
                            to="/projects/$slug"
                            params={{ slug: project.slug }}
                            className="hover:text-gold transition-colors duration-300"
                          >
                            {project.name}
                          </Link>
                        </h2>

                        {/* Tagline */}
                        <p className="font-heading text-xl sm:text-2xl italic text-gold-soft">
                          {project.tagline}
                        </p>

                        {/* Description */}
                        <p className="font-body text-base leading-[1.85] text-muted-foreground/90">
                          {project.description}
                        </p>

                        {/* Action buttons */}
                        <div className="flex flex-wrap items-center gap-5 pt-4">
                          <Link
                            to="/projects/$slug"
                            params={{ slug: project.slug }}
                            className="group inline-flex items-center gap-2 border border-gold/30 px-8 py-4 font-label text-[11px] uppercase tracking-[0.2em] text-gold-soft hover:bg-gold/10 hover:border-gold/60 transition-all duration-300 rounded-sm"
                          >
                            Explore Project
                            <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                          </Link>

                          {project.brochure && (
                            <a
                              href={project.brochure}
                              download
                              className="inline-flex items-center gap-2 border border-white/10 px-8 py-4 font-label text-[11px] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground hover:bg-white/5 hover:border-white/20 transition-all duration-300 rounded-sm"
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
