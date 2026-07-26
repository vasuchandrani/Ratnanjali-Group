import { commonData } from "@/data/common";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
}

export function Logo({ className = "h-12 w-auto", variant = "dark" }: LogoProps) {
  return (
    <img
      src={commonData.logo}
      alt={commonData.brandName}
      className={`${className} select-none ${variant === "light" ? "brightness-0 invert" : ""}`}
      draggable={false}
    />
  );
}

