import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/pages/ContactPage";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ratnanjali Group" },
      { name: "description", content: "Speak with the Ratnanjali Group team about residential, commercial and hospitality opportunities." },
    ],
  }),
  component: ContactPage,
});
