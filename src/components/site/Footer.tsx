import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { contactData } from "@/data/contact";
import { HeritageDivider } from "@/components/heritage/HeritageDivider";

export function Footer() {
  const { office } = contactData;

  return (
    <footer className="relative bg-stone-soft text-stone-dark/80">
      {/* Gold top border */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      {/* Heritage divider */}
      <div className="container-x mx-auto max-w-[1400px] pt-4">
        <HeritageDivider variant="lotus" />
      </div>

      <div className="container-x mx-auto max-w-[1400px] py-20">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand column */}
          <div className="md:col-span-5">
            <Logo className="h-16 w-auto" variant="dark" />
            <p className="mt-6 max-w-md font-body text-sm leading-relaxed text-stone-dark/70">
              Crafting magnificent structures that exude class and luxury across Ahmedabad — residences, commercial landmarks, weekend estates and mixed-use developments.
            </p>
            {/* Abstract heritage mark — lotus/khanda-derived geometric element */}
            <div className="mt-8 flex items-center gap-3 text-gold/60">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="opacity-80">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="0.5" />
                <path d="M12 2 L12 22 M2 12 L22 12" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="0.5" />
              </svg>
              <span className="font-label text-[9px] uppercase tracking-[0.35em] text-gold/65">
                Est · MMX
              </span>
            </div>
          </div>

          {/* Explore column */}
          <div className="md:col-span-2">
            <div className="font-label text-[10px] uppercase tracking-[0.3em] text-gold/80 mb-5">Explore</div>
            <ul className="space-y-3 text-sm">
              <li><Link to="/projects" className="font-body text-stone-dark/80 hover:text-gold transition-colors">Projects</Link></li>
              <li><Link to="/expertise" className="font-body text-stone-dark/80 hover:text-gold transition-colors">Expertise</Link></li>
              <li><Link to="/about" className="font-body text-stone-dark/80 hover:text-gold transition-colors">About</Link></li>
              <li><Link to="/contact" className="font-body text-stone-dark/80 hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Sectors column */}
          <div className="md:col-span-2">
            <div className="font-label text-[10px] uppercase tracking-[0.3em] text-gold/80 mb-5">Sectors</div>
            <ul className="space-y-3 text-sm">
              <li className="font-body text-stone-dark/80">Residential</li>
              <li className="font-body text-stone-dark/80">Commercial</li>
              <li className="font-body text-stone-dark/80">Hospitality</li>
              <li className="font-body text-stone-dark/80">Mixed Use</li>
            </ul>
          </div>

          {/* Office column */}
          <div className="md:col-span-3">
            <div className="font-label text-[10px] uppercase tracking-[0.3em] text-gold/80 mb-5">{office.eyebrow}</div>
            <p className="font-body text-sm leading-relaxed text-stone-dark/85">
              {office.address.map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
            <p className="mt-4 font-body text-sm text-stone-dark/85">{office.phone}</p>
            <p className="font-body text-sm text-stone-dark/85">{office.email}</p>
          </div>
        </div>

        {/* Legal row */}
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-stone/10 pt-8 text-xs text-stone-dark/40 md:flex-row md:items-center">
          <div className="font-label text-[10px] tracking-[0.2em] uppercase">
            © {new Date().getFullYear()} Ratnanjali Group. All rights reserved.
          </div>
          <div className="flex gap-6 font-label text-[10px] tracking-[0.2em] uppercase text-stone-dark/50">
            <span className="hover:text-gold cursor-pointer transition-colors">Privacy</span>
            <span className="hover:text-gold cursor-pointer transition-colors">Terms</span>
            <span className="hover:text-gold cursor-pointer transition-colors">RERA Disclosures</span>
          </div>
        </div>
      </div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-jali pointer-events-none opacity-5" />
    </footer>
  );
}
