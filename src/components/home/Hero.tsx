import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowDown } from "lucide-react";
import { homeData } from "@/data/home";
import { GoldDustParticles } from "@/components/heritage/GoldDustParticles";
import { useRef, useEffect } from "react";

export function Hero() {
  const { hero } = homeData;
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch((err) => {
        console.warn("Hero background video autoplay failed:", err);
      });
    }
  }, []);

  return (
    <>
      <section className="relative min-h-screen lg:h-screen lg:min-h-[580px] w-full overflow-hidden bg-basalt text-white">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            className="h-full w-full object-cover opacity-100"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={hero.bgImage}
          >
            <source src="https://cdn.sanity.io/files/72qij255/production/438bf2b22125ef793784ebfa5f1d727e3cf1b537.mp4" type="video/mp4" />
          </video>
          {/* Subtle grain texture */}
          <div className="absolute inset-0 bg-grain-dark pointer-events-none" />
        </div>

        {/* Gold dust particles */}
        <GoldDustParticles count={25} opacity={0.4} />

        {/* Side rail — Est · MMVII · Ahmedabad */}
        <div className="absolute left-6 top-1/2 hidden -translate-y-1/2 lg:block z-20">
          <div className="flex flex-col items-center gap-6">
            <div className="h-20 w-px bg-gold/30" />
            <span className="rotate-180 font-label text-[9px] uppercase tracking-[0.4em] text-gold-soft/50 [writing-mode:vertical-rl]">
              Est · MMX · Ahmedabad
            </span>
            <div className="h-20 w-px bg-gold/30" />
          </div>
        </div>

        {/* Content */}
        <div className="container-x relative z-10 mx-auto flex min-h-screen lg:h-full max-w-[1400px] flex-col justify-end pb-20 pt-32 lg:pb-16 lg:pt-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            {/* Main Hero Column */}
            <div className="lg:col-span-7">
              {/* Presentation eyebrow */}
              {/* <div className="mb-4 flex items-center gap-4 opacity-0 animate-[fade-up_0.8s_ease-out_.3s_forwards]">
                <span className="h-px w-12 bg-gold/60" />
                <span className="font-label text-[10px] font-medium uppercase tracking-[0.35em] text-gold-soft/70">
                  {hero.presentationTitle}
                </span>
              </div> */}

              {/* Shloka kicker */}
              <p className="shloka-kicker mb-4 text-gold-soft/40 opacity-0 animate-[fade-up_0.8s_ease-out_.5s_forwards]">
                — Where vision is forged in stone, legacy rises —
              </p>

              {/* Main headline — Cinzel with gold gradient — BOLD & CRISP & RESIZED FOR SHORTER VIEWPORTS */}
              <h1 className="font-display text-[clamp(2.25rem,4.5vw,4.5rem)] font-semibold leading-[0.95] tracking-[0.02em] opacity-0 animate-[fade-up_1s_ease-out_.6s_forwards]">
                <span className="text-white">{hero.mainTitle.lightText}</span>{" "}
                <em className="not-italic font-heading italic font-semibold gold-gradient-text">
                  {hero.mainTitle.italicText}
                </em>
                <br />
                <span className="text-white font-bold">{hero.mainTitle.boldText}</span>
              </h1>

              {/* Description */}
              <p className="mt-6 max-w-xl font-body text-sm sm:text-base font-medium leading-[1.8] text-white/80 opacity-0 animate-[fade-up_0.8s_ease-out_.9s_forwards]">
                {hero.description}
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-5 opacity-0 animate-[fade-up_0.8s_ease-out_1.1s_forwards]">
                <Link
                  to="/projects"
                  className="group inline-flex items-center gap-3 border border-gold/80 bg-gold/20 text-gold px-8 py-4 font-display text-[11px] font-bold uppercase tracking-[0.24em] transition-all gold-shimmer hover:bg-gold/30 hover:border-gold"
                >
                  Explore Portfolio
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 border border-white/60 bg-white/10 text-white px-8 py-4 font-display text-[11px] font-bold uppercase tracking-[0.24em] transition-all hover:bg-white/20 hover:border-white"
                >
                  Schedule a Visit
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue — dharma wheel dot */}
        <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 opacity-0 animate-[fade-in_1.6s_ease-out_2s_forwards]">
          <div className="flex flex-col items-center gap-2">
            <ArrowDown size={16} className="text-gold-soft/50 animate-bounce" />
            <span className="font-label text-[8px] font-medium uppercase tracking-[0.3em] text-gold/30">Scroll</span>
          </div>
        </div>
      </section>
    </>
  );
}
