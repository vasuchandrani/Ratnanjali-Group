import { useEffect, useRef, useState } from "react";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/RevealOnScroll";
import { aboutData } from "@/data/about";
import { ShlokaKicker } from "@/components/heritage/ShlokaKicker";
import { HeritageDivider } from "@/components/heritage/HeritageDivider";
import { DharmaWheel } from "@/components/heritage/DharmaWheel";
import { ScrollIndicator } from "@/components/site/ScrollIndicator";

/* Timeline milestones */
const timeline = [
  { year: "2007", event: "Ratnanjali Group founded in Ahmedabad" },
  { year: "2012", event: "First landmark residential project delivered" },
  { year: "2016", event: "Expansion into commercial development" },
  { year: "2019", event: "Ratnaruchi Vatika: riverside living at Paldi" },
  { year: "2022", event: "Ratnanjali Square completed, the new address of success" },
  { year: "2024", event: "Hastinapur The Royal Legacy announced, featuring five iconic towers" },
  { year: "2025", event: "Ratnanjali Solitaire & Ayodhya underway" },
];

export function AboutPage() {
  const { hero, ourStory, missionVision, founders, partners } = aboutData;
  const timelineRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeItems, setActiveItems] = useState<number[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start counting progress once the section enters the middle of the screen
      const startTrigger = windowHeight * 0.8;
      const endTrigger = windowHeight * 0.3;

      const totalDistance = rect.height;
      const currentPos = startTrigger - rect.top;

      const progress = Math.max(0, Math.min(1, currentPos / (totalDistance - endTrigger + startTrigger * 0.2)));
      setScrollProgress(progress);

      // Check which items are scrolled past the trigger point (65% of viewport height)
      const items = timelineRef.current.querySelectorAll(".timeline-item");
      const active: number[] = [];
      items.forEach((item, index) => {
        const itemRect = item.getBoundingClientRect();
        if (itemRect.top <= windowHeight * 0.65) {
          active.push(index);
        }
      });
      setActiveItems(active);
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger initially
    setTimeout(handleScroll, 100);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <PageShell>
      {/* Hero */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-basalt text-white">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://cdn.sanity.io/images/e4hmmdtc/production/4c15fc83a23a9dfe34aa28432000899eb5223c4b-622x350.jpg"
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
            <div className="opacity-0 animate-[fade-up_0.8s_ease-out_.5s_forwards] w-full flex justify-center">
              <ShlokaKicker light className="mb-6">
                A legacy carved in stone, measured in trust
              </ShlokaKicker>
            </div>
            <h1 className="max-w-4xl font-display text-5xl leading-[1.02] sm:text-6xl lg:text-7xl tracking-wide text-gold-soft font-semibold opacity-0 animate-[fade-up_1s_ease-out_.6s_forwards]">
              Our Legacy
            </h1>
            <p className="mt-6 max-w-xl mx-auto font-body text-base leading-[1.7] text-gold-soft/60 sm:text-lg opacity-0 animate-[fade-up_0.8s_ease-out_.9s_forwards]">
              Nearly two decades of thoughtful creation and architectural excellence across Ahmedabad.
            </p>
          </div>
          <div className="mt-12 w-full max-w-md mx-auto opacity-0 animate-[fade-in_1.2s_ease-out_1.2s_forwards]">
            <HeritageDivider variant="chakra" />
          </div>
        </div>
        <ScrollIndicator />
      </section>

      {/* Story + Founders */}
      <section className="relative py-20 bg-background overflow-hidden">
        <div className="absolute inset-0 bg-jali pointer-events-none opacity-40" />

        <div className="container-x relative mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-12 items-stretch">
          {/* Story image with carved frame stretched */}
          <Reveal className="lg:col-span-5 relative flex flex-col h-full">
            <div className="group relative carved-frame-hover h-full min-h-[450px]">
              <div className="carved-corner carved-corner-tl" />
              <div className="carved-corner carved-corner-tr" />
              <div className="carved-corner carved-corner-bl" />
              <div className="carved-corner carved-corner-br" />
              <img
                src={ourStory.coverImage}
                alt="Our Story Cover"
                className="absolute inset-0 h-full w-full object-cover border border-gold/10 transition-transform duration-1000 group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
          </Reveal>

          <div className="lg:col-span-7 lg:pt-8">
            <Reveal>
              <h2 className="font-display text-3xl tracking-wide sm:text-4xl">{ourStory.title}</h2>
              <p className="mt-6 font-body text-[15px] leading-[1.85] text-foreground/65">
                {ourStory.description}
              </p>
            </Reveal>

            {/* Mission & Vision */}
            <Reveal delay={1} className="mt-12 grid gap-8 sm:grid-cols-2">
              <div className="border-l-2 border-gold/40 pl-5">
                <div className="eyebrow eyebrow-gold mb-3">{missionVision.mission.title}</div>
                <p className="font-body text-sm leading-relaxed text-foreground/70">
                  {missionVision.mission.desc}
                </p>
              </div>
              <div className="border-l-2 border-gold/40 pl-5">
                <div className="eyebrow eyebrow-gold mb-3">{missionVision.vision.title}</div>
                <p className="font-body text-sm leading-relaxed text-foreground/70">
                  {missionVision.vision.desc}
                </p>
              </div>
            </Reveal>

            {/* Partners */}
            <Reveal delay={2} className="mt-12 border-t border-border/50 pt-10">
              <div className="eyebrow eyebrow-gold mb-6">{partners.eyebrow}</div>
              <div className="grid gap-6 sm:grid-cols-2">
                {partners.list.map((p) => (
                  <div key={p.title} className="border-l-2 border-gold/30 pl-4">
                    <div className="font-display text-base tracking-wide">{p.title}</div>
                    <p className="mt-1 font-body text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Who We Are (Founders) Standalone Section */}
      <section className="relative py-24 lg:py-32 bg-stone-soft border-t border-border/40 overflow-hidden">
        <div className="absolute inset-0 bg-grain pointer-events-none opacity-40" />
        <div className="absolute inset-0 bg-jali pointer-events-none opacity-10" />

        <div className="container-x relative mx-auto max-w-[1400px]">
          <Reveal>
            <div className="text-center mb-16 lg:mb-24">
              <div className="eyebrow eyebrow-gold mb-4">{founders.eyebrow}</div>
              <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl tracking-wide text-foreground font-semibold">
                The minds behind the landmarks.
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-12 lg:gap-16 lg:grid-cols-2">
            {founders.list.map((f, index) => (
              <Reveal key={f.name} delay={index as 0 | 1}>
                <div className="group relative border border-gold/15 bg-background p-8 lg:p-12 transition-all hover:border-gold/30 hover:shadow-card flex flex-col md:flex-row gap-8 lg:gap-10 items-center md:items-start text-center md:text-left h-full">
                  {/* Gold accent bar */}
                  <div className="absolute top-0 left-0 h-1.5 w-16 bg-gradient-to-r from-gold to-gold-soft transition-all duration-500 group-hover:w-28" />
                  <div className="absolute inset-0 bg-jali pointer-events-none opacity-[0.03]" />

                  {/* Big image frame - 60-70% larger than the previous layout */}
                  {('image' in f) && f.image && (
                    <div className="relative aspect-[3/4] w-48 sm:w-56 shrink-0 overflow-hidden border border-gold/20 bg-stone shadow-md group-hover:border-gold/40 transition-colors duration-500 carved-frame-hover">
                      {/* Carved corner brackets */}
                      <div className="carved-corner carved-corner-tl !h-2.5 !w-2.5" />
                      <div className="carved-corner carved-corner-tr !h-2.5 !w-2.5" />
                      <div className="carved-corner carved-corner-bl !h-2.5 !w-2.5" />
                      <div className="carved-corner carved-corner-br !h-2.5 !w-2.5" />
                      <img
                        src={f.image as string}
                        alt={f.name}
                        className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  )}

                  <div className="relative flex-1 space-y-4">
                    <div>
                      <h3 className="font-display text-2xl sm:text-3xl tracking-wide text-foreground font-semibold group-hover:text-gold transition-colors duration-300">
                        {f.name}
                      </h3>
                      <div className="mt-1.5 font-label text-[10px] uppercase tracking-[0.25em] text-gold font-semibold">
                        {f.role}
                      </div>
                    </div>
                    <p className="font-body text-[14px] leading-[1.8] text-foreground/75">
                      {f.bio}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline — carved stone with gold dharma-chakra nodes */}
      <section ref={timelineRef} className="relative bg-stone-soft py-24 lg:py-32 overflow-hidden border-t border-border/40">
        <div className="absolute inset-0 bg-grain pointer-events-none" />

        <div className="container-x relative mx-auto max-w-[850px]">
          <Reveal>
            <div className="text-center mb-20">
              <div className="eyebrow text-gold-bright font-bold text-sm sm:text-base tracking-[0.35em] mb-4">Our Journey</div>
              <ShlokaKicker light className="text-lg sm:text-2xl font-bold text-gold-soft">Each year, a spoke added to the wheel</ShlokaKicker>
            </div>
          </Reveal>

          <div className="relative">
            {/* Background vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gold/15 -translate-x-1/2" />

            {/* Animated gold vertical line based on scroll progress */}
            <div
              className="absolute left-8 md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-gold via-gold/80 to-gold-soft -translate-x-1/2 origin-top transition-transform duration-300 ease-out"
              style={{ transform: `scaleY(${scrollProgress})`, height: '100%' }}
            />

            <div className="space-y-12">
              {timeline.map((t, i) => {
                const isActive = activeItems.includes(i);
                return (
                  <div
                    key={t.year}
                    className="timeline-item relative flex flex-col md:flex-row md:items-center gap-6 md:gap-8 pl-16 md:pl-0"
                  >
                    {/* Left side milestone card (desktop only, even index) */}
                    <div className="hidden md:block flex-1 text-right">
                      {i % 2 === 0 ? (
                        <div
                          className={`p-6 rounded-lg border bg-stone-light/40 backdrop-blur-sm transition-all duration-700 ${isActive
                            ? 'border-gold/30 shadow-[0_4px_20px_rgba(196,164,105,0.15)] translate-y-0 opacity-100'
                            : 'border-transparent opacity-30 translate-y-4'
                            } hover:border-gold/60 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(196,164,105,0.25)]`}
                        >
                          <div className={`font-display text-3xl font-bold tracking-wide transition-colors duration-500 ${isActive ? 'gold-gradient-text' : 'text-stone-dark/40'}`}>
                            {t.year}
                          </div>
                          <p className="mt-2 font-body text-[15px] font-medium leading-relaxed text-stone-dark">
                            {t.event}
                          </p>
                        </div>
                      ) : (
                        <div className="w-full" />
                      )}
                    </div>

                    {/* Dharma-chakra node */}
                    <div
                      className={`absolute left-8 -translate-x-1/2 top-6 md:relative md:left-auto md:translate-x-0 md:top-auto z-10 flex-shrink-0 flex items-center justify-center w-16 h-16 transition-all duration-700 ${isActive
                        ? 'scale-125 rotate-[180deg] filter drop-shadow-[0_0_8px_rgba(196,164,105,0.5)]'
                        : 'scale-100 opacity-30'
                        }`}
                    >
                      <div className={`absolute inset-0 rounded-full border transition-all duration-700 ${isActive ? 'border-gold/40 bg-gold/5 scale-110' : 'border-transparent'}`} />
                      <DharmaWheel size={isActive ? 32 : 26} color={isActive ? "var(--gold)" : "var(--gold-soft)"} />
                    </div>

                    {/* Right side milestone card (desktop odd items) / Always visible card (mobile) */}
                    <div className="flex-1 text-left w-full">
                      {/* Desktop layout */}
                      <div className="hidden md:block">
                        {i % 2 !== 0 ? (
                          <div
                            className={`p-6 rounded-lg border bg-stone-light/40 backdrop-blur-sm transition-all duration-700 ${isActive
                              ? 'border-gold/30 shadow-[0_4px_20px_rgba(196,164,105,0.15)] translate-y-0 opacity-100'
                              : 'border-transparent opacity-30 translate-y-4'
                              } hover:border-gold/60 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(196,164,105,0.25)]`}
                          >
                            <div className={`font-display text-3xl font-bold tracking-wide transition-colors duration-500 ${isActive ? 'gold-gradient-text' : 'text-stone-dark/40'}`}>
                              {t.year}
                            </div>
                            <p className="mt-2 font-body text-[15px] font-medium leading-relaxed text-stone-dark">
                              {t.event}
                            </p>
                          </div>
                        ) : (
                          <div className="w-full" />
                        )}
                      </div>

                      {/* Mobile layout */}
                      <div className="md:hidden">
                        <div
                          className={`p-6 rounded-lg border bg-stone-light/40 backdrop-blur-sm transition-all duration-700 ${isActive
                            ? 'border-gold/30 shadow-[0_4px_20px_rgba(196,164,105,0.15)] translate-y-0 opacity-100'
                            : 'border-transparent opacity-30 translate-y-4'
                            } hover:border-gold/60 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(196,164,105,0.25)]`}
                        >
                          <div className={`font-display text-2xl font-bold tracking-wide transition-colors duration-500 ${isActive ? 'gold-gradient-text' : 'text-stone-dark/40'}`}>
                            {t.year}
                          </div>
                          <p className="mt-2 font-body text-[14px] font-medium leading-relaxed text-stone-dark">
                            {t.event}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
