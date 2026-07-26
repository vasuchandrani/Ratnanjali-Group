import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/RevealOnScroll";
import { ShlokaKicker } from "@/components/heritage/ShlokaKicker";
import { HeritageDivider } from "@/components/heritage/HeritageDivider";
import { ScrollIndicator } from "@/components/site/ScrollIndicator";
import {
  Compass,
  Gem,
  Trees,
  Leaf,
  Wind,
  Sun,
  Droplet,
  Sprout,
  RefreshCw,
  Library,
  type LucideIcon
} from "lucide-react";

interface Capability {
  n: string;
  t: string;
  d: string;
  tone: string;
  thread: string;
  icon: LucideIcon;
}

const capabilities: Capability[] = [
  {
    n: "01",
    t: "Vastu Harmony",
    d: "Aligning architectural forms with cosmic directions to balance energies, ensuring prosperity, health, and spiritual alignment.",
    tone: "Symmetry & Alignment",
    thread: "Aligning hearth and home with the rhythms of the cosmos",
    icon: Compass
  },
  {
    n: "02",
    t: "Living Limestone",
    d: "Using breathable, organic limestone plaster that naturally regulates humidity, purifies indoor air, and ages with quiet character.",
    tone: "Organic Materiality",
    thread: "Stone that breathes, telling the story of generations",
    icon: Gem
  },
  {
    n: "03",
    t: "Nature-Integrated Landscapes",
    d: "Weaving exterior gardens, courtyards, and vertical greenery seamlessly into the living space, dissolving boundaries between inside and out.",
    tone: "Living Canvas",
    thread: "Where the threshold dissolves, and the forest steps inside",
    icon: Trees
  },
  {
    n: "04",
    t: "Pure Natural Materials",
    d: "Sourcing raw timber, native terracotta, and hand-cut stone to create honest, tactile textures that grow more beautiful with time.",
    tone: "Earth's Essence",
    thread: "Unvarnished truth carved from the heart of the earth",
    icon: Leaf
  },
  {
    n: "05",
    t: "Climate-Responsive Design",
    d: "Engineering building mass and facades to adapt to regional wind currents and thermal cycles, reducing active energy dependency.",
    tone: "Thermal Intelligence",
    thread: "In harmony with the sun's path and the wind's whisper",
    icon: Wind
  },
  {
    n: "06",
    t: "Passive Cooling & Daylighting",
    d: "Integrating deep eaves, wind-catcher shafts, and skylights to fill rooms with glare-free daylight and constant cool breezes.",
    tone: "Luminous Shade",
    thread: "Shaded corridors where light dances and breezes linger",
    icon: Sun
  },
  {
    n: "07",
    t: "Water-Sensitive Planning",
    d: "Designing built environments with bioswales, rain harvesting systems, and natural filtering beds to honor and conserve every drop.",
    tone: "Hydrological Balance",
    thread: "Cradling the rains, nurturing the deep wells of life",
    icon: Droplet
  },
  {
    n: "08",
    t: "Biophilic Living",
    d: "Nurturing the innate human connection to nature through indoor streams, living walls, and structural patterns that mimic organic growth.",
    tone: "Deep Connection",
    thread: "Whispers of running water, returning to the wild",
    icon: Sprout
  },
  {
    n: "09",
    t: "Sustainable Architecture",
    d: "Constructing high-efficiency, low-embodied-carbon structures that minimize environmental footprints while maximizing endurance.",
    tone: "Enduring Future",
    thread: "Building for tomorrow with the wisdom of yesterday",
    icon: RefreshCw
  },
  {
    n: "10",
    t: "Timeless Heritage Design",
    d: "Reviving ancestral building proportions, arches, and stone carvings, giving contemporary shapes a sense of historic permanence.",
    tone: "Noble Craftsmanship",
    thread: "Carving memories into columns that defy the years",
    icon: Library
  }
];

export function ExpertisePage() {
  return (
    <PageShell>
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
              <span className="eyebrow eyebrow-gold">Capabilities</span>
              <span className="h-px w-10 bg-gold/40" />
            </div>
            <ShlokaKicker light className="mb-6">
              Each discipline, a pillar in the temple of craft
            </ShlokaKicker>
            <h1 className="max-w-4xl font-display text-5xl leading-[1.02] sm:text-6xl lg:text-7xl tracking-wide text-gold-soft font-semibold">
              Our Expertise
            </h1>
          </Reveal>
          <div className="mt-12 w-full max-w-md mx-auto">
            <HeritageDivider variant="chakra" />
          </div>
        </div>
        <ScrollIndicator />
      </section>

      <section className="py-12 lg:py-20 bg-background">
        <div className="container-x mx-auto max-w-[1400px]">
          <ul className="divide-y divide-gold/10 border-y border-gold/10">
            {capabilities.map((c, i) => {
              const Icon = c.icon;
              return (
                <Reveal as="li" key={c.n} variant="blur" delay={(i % 3) as 0 | 1 | 2}>
                  <div className="group grid grid-cols-[auto_1fr] items-center gap-8 py-10 transition-colors hover:bg-stone-soft/50 md:grid-cols-[120px_1.5fr_2fr] md:gap-12 md:py-14 px-4">
                    <div className="font-display text-4xl gold-gradient-text opacity-50 num md:text-5xl">{c.n}</div>
                    <div className="col-span-2 md:col-span-1 flex items-center gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/20 bg-stone-soft/30 text-gold transition-all duration-500 group-hover:scale-110 group-hover:border-gold/50 group-hover:shadow-[0_0_15px_rgba(196,164,105,0.25)]">
                        <Icon size={20} className="stroke-[1.25]" />
                      </div>
                      <div>
                        <h2 className="font-display text-2xl tracking-wide md:text-3xl">{c.t}</h2>
                        <span className="mt-1 inline-block font-label text-[9px] uppercase tracking-[0.3em] text-gold/50">
                          {c.tone}
                        </span>
                      </div>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                      <p className="font-body text-[15px] leading-[1.85] text-foreground/65">{c.d}</p>
                      <p className="mt-3 shloka-kicker text-gold/30 text-xs">— {c.thread} —</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}
