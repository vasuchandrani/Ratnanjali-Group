import { Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/RevealOnScroll";
import { ShlokaKicker } from "@/components/heritage/ShlokaKicker";
import { HeritageDivider } from "@/components/heritage/HeritageDivider";
import { ArrowLeft, MapPin, Calendar, LayoutGrid, CheckCircle2, Phone, Mail, Download } from "lucide-react";

interface ProjectDetailPageProps {
  project: {
    name: string;
    slug: string;
    cover: string;
    tagline: string;
    categoryLabel: string;
    location: string;
    status: string;
    description: string;
    year: string;
    configuration: string;
    brochure?: string;
    highlights?: string[];
    gallery?: string[];
  };
}

export function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  return (
    <PageShell>
      {/* Dynamic cover section */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-basalt text-white">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={project.cover}
            alt={project.name}
            className="ken-burns h-full w-full object-cover opacity-40"
          />
          {/* Dark cinematic overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-basalt/60 via-basalt/30 to-basalt/95" />
          <div className="absolute inset-0 bg-grain-dark pointer-events-none" />
        </div>

        <div className="container-x relative z-10 mx-auto max-w-[1400px] flex flex-col items-center justify-center text-center px-4">
          <Reveal>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 mb-8 border border-gold/30 px-4 py-2 font-label text-[10px] uppercase tracking-[0.25em] text-gold-soft hover:bg-gold/10 hover:border-gold/60 transition-all duration-300"
            >
              <ArrowLeft size={12} /> Back to Portfolio
            </Link>

            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="h-px w-8 bg-gold/40" />
              <span className="eyebrow eyebrow-gold">{project.categoryLabel}</span>
              <span className="h-px w-8 bg-gold/40" />
            </div>

            <ShlokaKicker light className="mb-6">
              {project.tagline}
            </ShlokaKicker>

            <h1 className="font-display text-5xl leading-[1.05] sm:text-6xl lg:text-8xl tracking-wide text-white font-semibold drop-shadow-[0_2px_20px_rgba(0,0,0,0.4)]">
              {project.name}
            </h1>

            <p className="mt-6 max-w-md mx-auto font-label text-[10px] uppercase tracking-[0.3em] text-gold-soft/60">
              {project.location} · Status: {project.status}
            </p>
          </Reveal>

          <div className="mt-12 w-full max-w-md mx-auto">
            <HeritageDivider variant="lotus" />
          </div>
        </div>
      </section>

      {/* Overview & Quick Specs Section */}
      <section className="bg-background py-20 lg:py-28 relative">
        <div className="absolute inset-0 bg-grain pointer-events-none" />
        <div className="container-x relative mx-auto max-w-[1200px]">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Overview narrative */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="eyebrow eyebrow-gold mb-4">Project Overview</div>
                <h2 className="font-display text-3xl leading-tight sm:text-4xl">
                  Carved with care, <br />
                  <span className="font-heading italic text-foreground/60">designed for the generations.</span>
                </h2>
                <p className="mt-6 font-body text-base sm:text-lg leading-relaxed text-muted-foreground/90">
                  {project.description}
                </p>
              </Reveal>
            </div>

            {/* Quick specifications panel */}
            <div className="lg:col-span-5">
              <Reveal delay={1}>
                <div className="border border-gold/15 bg-stone-soft p-8 sm:p-10 shadow-card relative overflow-hidden">
                  <div className="absolute inset-0 bg-jali pointer-events-none opacity-5" />
                  <h3 className="font-display text-xl tracking-wide mb-6">Specifications</h3>

                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center bg-gold/10 text-gold border border-gold/20">
                        <MapPin size={16} />
                      </div>
                      <div>
                        <div className="font-label text-[9px] uppercase tracking-[0.2em] text-muted-foreground">Location</div>
                        <div className="font-body text-sm font-semibold">{project.location}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center bg-gold/10 text-gold border border-gold/20">
                        <Calendar size={16} />
                      </div>
                      <div>
                        <div className="font-label text-[9px] uppercase tracking-[0.2em] text-muted-foreground">Year Built</div>
                        <div className="font-body text-sm font-semibold">{project.year}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center bg-gold/10 text-gold border border-gold/20">
                        <LayoutGrid size={16} />
                      </div>
                      <div>
                        <div className="font-label text-[9px] uppercase tracking-[0.2em] text-muted-foreground">Configuration</div>
                        <div className="font-body text-sm font-semibold">{project.configuration}</div>
                      </div>
                    </div>

                    {project.brochure && (
                      <div className="flex items-center gap-4 mt-6 pt-6 border-t border-gold/10">
                        <div className="flex h-10 w-10 items-center justify-center bg-gold/10 text-gold border border-gold/20">
                          <Download size={16} />
                        </div>
                        <div className="flex-1 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                          <div>
                            <div className="font-label text-[9px] uppercase tracking-[0.2em] text-muted-foreground">Brochure</div>
                            <div className="font-body text-sm font-semibold">Project Brochure</div>
                          </div>
                          <a
                            href={project.brochure}
                            download
                            className="inline-flex items-center gap-2 px-4 py-2 border border-gold/30 hover:border-gold/60 text-[10px] font-label uppercase tracking-wider text-gold-soft hover:bg-gold/10 transition-all duration-300 rounded-sm"
                          >
                            Download <Download size={12} />
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      {project.highlights && project.highlights.length > 0 && (
        <section className="bg-stone-soft py-20 lg:py-28 relative border-t border-border/40">
          <div className="absolute inset-0 bg-grain pointer-events-none" />
          <div className="container-x relative mx-auto max-w-[1200px]">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Reveal>
                <div className="eyebrow eyebrow-gold mb-3">Key Highlights</div>
                <h2 className="font-display text-3xl sm:text-4xl leading-tight">
                  Design details that set us apart
                </h2>
              </Reveal>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {project.highlights.map((highlight, i) => (
                <Reveal key={highlight} delay={(i % 4) as 0 | 1 | 2 | 3}>
                  <div className="group bg-background border border-gold/10 hover:border-gold/30 p-8 shadow-sm hover:shadow-md transition-all duration-500 carved-frame-hover relative">
                    {/* Ornate corners */}
                    <div className="carved-corner carved-corner-tl" />
                    <div className="carved-corner carved-corner-tr" />
                    <div className="carved-corner carved-corner-bl" />
                    <div className="carved-corner carved-corner-br" />

                    <div className="flex h-10 w-10 items-center justify-center bg-gold/10 text-gold border border-gold/20 rounded-full mb-6">
                      <CheckCircle2 size={16} />
                    </div>
                    <h3 className="font-display text-lg tracking-wide text-foreground/90 group-hover:text-gold transition-colors duration-300">
                      {highlight}
                    </h3>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery Section */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="bg-background py-20 lg:py-28 relative border-t border-border/40">
          <div className="absolute inset-0 bg-grain pointer-events-none" />
          <div className="container-x relative mx-auto max-w-[1200px]">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Reveal>
                <div className="eyebrow eyebrow-gold mb-3">Showcase Gallery</div>
                <h2 className="font-display text-3xl sm:text-4xl leading-tight">
                  A visual tour of craftsmanship
                </h2>
              </Reveal>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              {project.gallery.map((imgUrl, i) => (
                <Reveal key={imgUrl} delay={(i % 2) as 0 | 1}>
                  <div className="group relative aspect-[16/10] overflow-hidden border border-gold/10 bg-stone shadow-sm">
                    <img
                      src={imgUrl}
                      alt={`${project.name} gallery image ${i + 1}`}
                      className="img-zoom h-full w-full object-cover transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-basalt/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Project Enquiry Section */}
      <section className="relative bg-stone-soft py-24 text-foreground lg:py-32 overflow-hidden border-t border-gold/20">
        <div className="absolute inset-0 bg-grain pointer-events-none" />
        <div className="absolute inset-0 bg-jali pointer-events-none opacity-30" />

        <div className="container-x relative z-10 mx-auto max-w-[800px] text-center px-4">
          <Reveal>
            <div className="eyebrow text-gold tracking-[0.3em] text-[10px] uppercase font-label mb-4">Partner With Us</div>
            <h2 className="font-display text-4xl leading-tight tracking-wide sm:text-5xl lg:text-6xl gold-gradient-text font-semibold">
              Enquire about {project.name}
            </h2>
            <p className="mt-6 font-body text-sm sm:text-base leading-relaxed text-muted-foreground">
              Arrange an exclusive private walkthrough or speak directly with our luxury estate consultants.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-6">
              <a
                href="tel:+917990748656"
                className="inline-flex items-center gap-3 border border-gold/50 px-8 py-3.5 font-label text-[11px] uppercase tracking-[0.24em] text-gold hover:bg-gold/5 hover:border-gold transition-all duration-300"
              >
                <Phone size={14} /> Call Agent
              </a>
              <a
                href="mailto:info@ratnanjaligroup.com"
                className="inline-flex items-center gap-3 border border-gold/50 px-8 py-3.5 font-label text-[11px] uppercase tracking-[0.24em] text-gold hover:bg-gold/5 hover:border-gold transition-all duration-300"
              >
                <Mail size={14} /> Send Inquiry
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
