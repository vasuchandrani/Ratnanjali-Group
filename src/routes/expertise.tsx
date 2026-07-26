import { createFileRoute } from "@tanstack/react-router";
import { ExpertisePage } from "@/pages/ExpertisePage";

export const Route = createFileRoute("/expertise")({
  head: () => ({
    meta: [
      { title: "Our Expertise — Ratnanjali Group" },
      { name: "description", content: "Capabilities across Vastu, Limestone materials, Biophilic living, Sustainable and Heritage design." },
    ],
  }),
  component: ExpertisePage,
});
