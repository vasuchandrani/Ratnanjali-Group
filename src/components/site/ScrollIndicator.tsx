import { ArrowDown } from "lucide-react";

export function ScrollIndicator() {
  return (
    <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 cursor-pointer pointer-events-none select-none opacity-0 animate-[fade-in_1.6s_ease-out_2s_forwards]">
      <div className="flex flex-col items-center gap-2">
        <ArrowDown size={20} strokeWidth={3} className="text-gold animate-bounce" />
        <span className="font-display text-[10px] font-bold uppercase tracking-[0.3em] text-gold/80">Scroll</span>
      </div>
    </div>
  );
}
