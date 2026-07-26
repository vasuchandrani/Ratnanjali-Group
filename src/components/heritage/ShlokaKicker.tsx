/**
 * ShlokaKicker — Verse-cadence inscription labels
 *
 * Small kicker labels above section headings styled like an engraved plaque,
 * borrowing the cadence of shloka/verse-style phrasing for gravitas.
 * Set in italic Cormorant Garamond for an inscription feel.
 */

interface ShlokaKickerProps {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

export function ShlokaKicker({ children, className = "", light = false }: ShlokaKickerProps) {
  return (
    <p
      className={`shloka-kicker ${light ? "text-gold-soft/70" : ""} ${className}`}
      aria-hidden="true"
    >
      — {children} —
    </p>
  );
}
