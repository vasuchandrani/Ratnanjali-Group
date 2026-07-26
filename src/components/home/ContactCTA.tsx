import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/RevealOnScroll";
import { homeData } from "@/data/home";
import { contactData } from "@/data/contact";

export function ContactCTA() {
  const { contactCta } = homeData;
  const { office } = contactData;

  return (
    <section className="relative isolate overflow-hidden bg-basalt py-32 text-white lg:py-44">
      <img
        src={contactCta.bgImage}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
        loading="lazy"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-basalt/95 via-basalt/80 to-basalt/60" />
      <div className="absolute inset-0 -z-10 bg-grain-dark" />

      {/* Abstract geometric mark — Sikh "seva/community" inspired */}
      <div className="absolute right-[8%] top-[15%] opacity-[0.04] pointer-events-none">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" aria-hidden="true">
          <circle cx="100" cy="100" r="90" stroke="var(--gold)" strokeWidth="0.8" />
          <circle cx="100" cy="100" r="60" stroke="var(--gold)" strokeWidth="0.5" />
          <line x1="100" y1="10" x2="100" y2="190" stroke="var(--gold)" strokeWidth="0.5" />
          <line x1="10" y1="100" x2="190" y2="100" stroke="var(--gold)" strokeWidth="0.5" />
          <path d="M100 30 Q130 100 100 170 Q70 100 100 30" stroke="var(--gold)" strokeWidth="0.5" fill="none" />
          <path d="M30 100 Q100 130 170 100 Q100 70 30 100" stroke="var(--gold)" strokeWidth="0.5" fill="none" />
        </svg>
      </div>

      <div className="container-x relative mx-auto max-w-[1400px]">
        <div className="grid items-end gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <div className="eyebrow mb-4 text-gold/50"><span className="rule" />Begin a Conversation</div>
            <p className="shloka-kicker mb-6 text-gold-soft/40">
              — Open to every visitor, every question, every dream —
            </p>
            <h2 className="font-display text-5xl leading-[0.95] sm:text-6xl lg:text-[6.5rem] tracking-wide">
              <span className="text-white">Let's build</span>
              <br />
              <em className="not-italic font-heading italic gold-gradient-text">
                something worth keeping.
              </em>
            </h2>
          </Reveal>

          <Reveal delay={1} className="lg:col-span-4">
            <p className="font-body text-base leading-relaxed text-white/60">
              Whether you're a homebuyer, an investor, or a brand looking for a flagship address — we'd be glad to walk you through what's in progress and what's coming next.
            </p>
            <div className="mt-10 flex flex-col gap-3">
              <Link
                to="/contact"
                className="group inline-flex w-fit items-center gap-3 border border-gold/40 bg-gold/10 px-8 py-4 font-label text-[11px] uppercase tracking-[0.24em] text-gold-soft transition-all gold-shimmer hover:bg-gold/20 hover:border-gold/60"
              >
                Contact The Team
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <div className="mt-6 space-y-2 font-label text-sm text-gold-soft/50 tracking-wide">
                <div>{office.phone}</div>
                <div>{office.email}</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
