import { useState, type ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Preloader } from "@/components/heritage/Preloader";
import { useRouterState } from "@tanstack/react-router";

export function PageShell({ children }: { children: ReactNode }) {
  const { location } = useRouterState();
  const isHome = location.pathname === "/";
  const [preloaderDone, setPreloaderDone] = useState(!isHome);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {isHome && <Preloader onComplete={() => setPreloaderDone(true)} />}
      <Header />
      <main className={preloaderDone ? "" : "opacity-0"}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
