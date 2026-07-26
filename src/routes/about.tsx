import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/pages/AboutPage";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ratnanjali Group" },
      { name: "description", content: "Two decades of crafting landmark real estate developments across Ahmedabad." },
    ],
  }),
  component: AboutPage,
});
