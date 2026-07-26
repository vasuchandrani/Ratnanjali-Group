import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { homeData } from "@/data/home";
import { Reveal } from "@/components/site/RevealOnScroll";
import { ShlokaKicker } from "@/components/heritage/ShlokaKicker";
import { HeritageDivider } from "@/components/heritage/HeritageDivider";

export function Overview() {
  const { ourStory, hero } = homeData;

  return null;

  // return (
  //   <section className="relative bg-background py-28 lg:py-40 overflow-hidden">
  //     {/* Subtle jali pattern background — Jain architecture thread */}
  //     <div className="absolute inset-0 bg-jali pointer-events-none" />

  //     <div className="container-x relative mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-12 lg:gap-20">
  //       {/* Story image */}
  //       <Reveal className="lg:col-span-5">
  //         <div className="sticky top-32">
  //           <div className="group relative aspect-[4/5] overflow-hidden bg-stone">
  //             {/* Carved corner brackets on hover */}
  //             <div className="carved-corner carved-corner-tl" />
  //             <div className="carved-corner carved-corner-tr" />
  //             <div className="carved-corner carved-corner-bl" />
  //             <div className="carved-corner carved-corner-br" />
  //             <img
  //               src={ourStory.coverImage}
  //               alt="Our Story Cover"
  //               className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
  //               loading="lazy"
  //             />
  //             {/* Cinematic vignette */}
  //             <div className="absolute inset-0 bg-gradient-to-t from-basalt/30 via-transparent to-transparent pointer-events-none" />
  //           </div>
  //           <div className="mt-6 flex items-center justify-between text-xs">
  //             <span className="font-label text-[10px] uppercase tracking-[0.28em] text-gold/50">
  //               Craft · Material · Light
  //             </span>
  //             <span className="font-heading text-base text-foreground/50 italic">— Ahmedabad</span>
  //           </div>
  //         </div>
  //       </Reveal>

  //       {/* Story content */}
  //       <div className="lg:col-span-7 lg:pt-12">
  //         <Reveal>
  //           <div className="eyebrow eyebrow-gold mb-4"><span className="rule" />{ourStory.eyebrow}</div>
  //           <ShlokaKicker className="mb-6">Where stone meets sky, vision takes form</ShlokaKicker>
  //           <h2 className="font-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl kerning-tight">
  //             {ourStory.titleText}{" "}
  //             <em className="font-heading italic text-foreground/60">{ourStory.titleItalic}</em>
  //           </h2>
  //         </Reveal>

  //         <Reveal delay={1} className="mt-10 max-w-2xl space-y-6 font-body text-[15px] leading-[1.85] text-foreground/70">
  //           {ourStory.paragraphs.map((p, i) => (
  //             <p key={i}>{p}</p>
  //           ))}
  //         </Reveal>

  //         {/* Heritage divider — Jain jali */}
  //         <Reveal delay={2} className="mt-12">
  //           <HeritageDivider variant="jali" />
  //         </Reveal>

  //         {/* Founder bios — with jali lattice border */}
  //         <Reveal delay={2} className="mt-10 border-t border-border pt-10">
  //           <div className="eyebrow eyebrow-gold mb-6">{hero.founders.eyebrow}</div>
  //           <div className="grid gap-6 sm:grid-cols-2">
  //             {hero.founders.list.map((f) => (
  //               <div
  //                 key={f.name}
  //                 className="group relative border border-border bg-stone-soft/25 p-6 transition-all hover:border-gold/40"
  //               >
  //                 {/* Gold accent bar */}
  //                 <div className="absolute top-0 left-0 h-1 w-10 bg-gradient-to-r from-gold to-gold-soft transition-all duration-500 group-hover:w-20" />
  //                 {/* Subtle jali texture */}
  //                 <div className="absolute inset-0 bg-jali pointer-events-none opacity-30" />

  //                 <div className="relative">
  //                   <div className="font-display text-xl text-foreground">{f.name}</div>
  //                   <div className="mt-1 font-label text-[9px] uppercase tracking-[0.22em] text-gold">
  //                     {f.role}
  //                   </div>
  //                   <p className="mt-3 font-body text-xs leading-relaxed text-foreground/70">
  //                     {f.bio}
  //                   </p>
  //                 </div>
  //               </div>
  //             ))}
  //           </div>
  //         </Reveal>

  //         {/* Read Our Story CTA */}
  //         <Reveal delay={3} className="mt-12">
  //           <Link
  //             to="/about"
  //             className="group inline-flex items-center gap-3 font-label text-[11px] uppercase tracking-[0.24em] text-foreground"
  //           >
  //             <span className="gold-underline">Read Our Story</span>
  //             <ArrowUpRight
  //               size={16}
  //               className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-gold"
  //             />
  //           </Link>
  //         </Reveal>
  //       </div>
  //     </div>
  //   </section>
  // );
}
