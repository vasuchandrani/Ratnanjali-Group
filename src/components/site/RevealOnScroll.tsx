import { useEffect, useRef, type ReactNode, type HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  as?: "div" | "section" | "article" | "header" | "footer" | "li";
  delay?: 0 | 1 | 2 | 3 | 4;
  children: ReactNode;
  variant?: "fade-up" | "blur" | "engrave";
}

export function Reveal({ as = "div", delay = 0, className = "", children, variant = "fade-up", ...rest }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = as as "div";
  const delayClass = delay ? ` reveal-delay-${delay}` : "";
  const variantClass = variant === "blur" ? "reveal-blur" : variant === "engrave" ? "reveal-engrave" : "reveal";
  return (
    <Tag ref={ref as never} className={`${variantClass}${delayClass} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
