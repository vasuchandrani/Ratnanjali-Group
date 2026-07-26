import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/pages/HomePage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ratnanjali Group — Building Landmarks. Creating Value." },
      { name: "description", content: "Ahmedabad-based real estate developer crafting landmark residential, commercial, hospitality and mixed-use developments." },
    ],
  }),
  component: HomePage,
});
