import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const nav = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/expertise", label: "Expertise" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  const onDark = !scrolled && isHome;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-stone/10 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-x mx-auto flex max-w-[1400px] items-center justify-between h-20">
        <Link to="/" className="flex items-center" aria-label="Ratnanjali Group — Home">
          <Logo
            className={`w-auto transition-all duration-500 drop-shadow-[0_0_12px_rgba(196,164,105,0.2)] ${
              scrolled ? "h-11 md:h-12" : "h-14 md:h-15"
            }`}
            variant={scrolled ? "dark" : "light"}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-10 lg:flex">
          {nav.map((n, i) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              style={{ animationDelay: `${0.1 + i * 0.08}s` }}
            >
              {({ isActive }) => (
                <span
                  className={`group relative font-display font-bold text-[13px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                    isActive
                      ? "text-gold"
                      : scrolled
                      ? "text-stone-dark/90 hover:text-stone-dark"
                      : "text-gold-soft/90 hover:text-gold-soft"
                  }`}
                >
                  {n.label}
                  {/* Gold active/hover underline */}
                  <span
                    className={`pointer-events-none absolute -bottom-1.5 left-0 h-[1.5px] bg-gradient-to-r from-gold to-gold/50 transition-all duration-500 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </span>
              )}
            </Link>
          ))}
        </nav>

        {/* Enquire CTA */}
        <Link
          to="/contact"
          className={`hidden items-center gap-2 border px-6 py-2.5 font-display font-bold text-[12px] uppercase tracking-[0.24em] transition-all duration-300 lg:inline-flex ${
            scrolled
              ? "border-stone-dark/30 text-stone-dark hover:border-stone-dark/60 hover:bg-stone-dark/5"
              : "border-gold/30 text-gold-soft gold-shimmer hover:border-gold/60 hover:bg-gold/5"
          }`}
        >
          Enquire
        </Link>

        {/* Mobile menu toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden transition-colors duration-300 ${
            scrolled ? "text-stone-dark" : "text-gold-soft"
          }`}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu — white or dark depending on scroll */}
      <div
        className={`lg:hidden overflow-hidden border-t transition-[max-height] duration-500 ${
          scrolled
            ? "bg-white border-stone/10"
            : "bg-basalt border-gold/10"
        } ${open ? "max-h-96" : "max-h-0"}`}
      >
        <nav className="container-x mx-auto flex flex-col gap-1 py-6">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
            >
              {({ isActive }) => (
                <div
                  className={`py-3 font-display font-bold text-[13px] uppercase tracking-[0.18em] transition-colors ${
                    isActive
                      ? "text-gold"
                      : scrolled
                      ? "text-stone-dark/90 hover:text-stone-dark"
                      : "text-gold-soft/90 hover:text-gold-soft"
                  }`}
                >
                  {n.label}
                </div>
              )}
            </Link>
          ))}
          <Link
            to="/contact"
            className={`mt-3 inline-flex items-center justify-center border px-5 py-3 font-display font-bold text-[11px] uppercase tracking-[0.24em] transition-all ${
              scrolled
                ? "border-stone-dark/30 text-stone-dark hover:bg-stone-dark/5"
                : "border-gold/30 text-gold-soft hover:bg-gold/10"
            }`}
          >
            Enquire
          </Link>
        </nav>
      </div>
    </header>
  );
}
