import { createFileRoute } from "@tanstack/react-router";
import { ProjectsPage } from "@/pages/ProjectsPage";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Ratnanjali Group" },
      { name: "description", content: "Explore Exclusive, Residential, Commercial, Hospitality and Mixed-Use developments by Ratnanjali Group across Ahmedabad." },
    ],
  }),
  component: ProjectsPage,
});
