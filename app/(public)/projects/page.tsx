import { Metadata } from "next";

import { getProjects } from "@/hooks/get-projects";

import { ProjectsHeadingSection } from "@/components/projects-heading-section";
import { ProjectsMainSection } from "@/components/projects-main-section";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Projects - Leandro Bertalhia",
  description:
    "Projects that reflect my journey in the universe of technology.",
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main>
      <div className="fixed inset-0 -z-10 md:mx-4 lg:mx-8">
        <div className="h-dvh w-full max-w-7xl mx-auto bg-white dark:bg-zinc-900 border-x border-zinc-100 dark:border-zinc-800" />
      </div>

      <ProjectsHeadingSection />

      <ProjectsMainSection projects={projects} />
    </main>
  );
}
