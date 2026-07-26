import { createFileRoute, notFound } from "@tanstack/react-router";
import { projects } from "@/data/projects";
import { ProjectDetailPage } from "@/pages/ProjectDetailPage";

export const Route = createFileRoute("/projects_/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) {
      throw notFound();
    }
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.project?.name || "Project"} — Ratnanjali Group` },
      { name: "description", content: loaderData?.project?.description || "" },
    ],
  }),
  component: ProjectDetailPageWrapper,
});

function ProjectDetailPageWrapper() {
  const { project } = Route.useLoaderData();
  return <ProjectDetailPage project={project} />;
}
