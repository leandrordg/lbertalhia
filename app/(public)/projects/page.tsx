import Image from "next/image";
import Link from "next/link";

import { getProjects } from "@/hooks/get-projects";
import { GitHub } from "@/lib/icons";

export const revalidate = 3600;

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main>
      <div className="fixed inset-0 -z-10 md:mx-4 lg:mx-8">
        <div className="h-dvh w-full max-w-7xl mx-auto bg-white border-x border-zinc-100" />
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 py-12 space-y-12">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl font-bold tracking-tight leading-snug text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Projects that reflect my journey in the universe of technology.
          </h1>

          <p className="leading-relaxed text-muted-foreground">
            Over the years, I&apos;ve worked on many projects, and these are the
            ones I&apos;m most proud of. Many of them are open-source, so if
            something catches your eye, check out the code and contribute with
            your ideas for improvements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {projects.map((project) => (
            <article
              key={project.id}
              className="relative rounded-xl group flex flex-col items-center text-center md:items-start md:text-left gap-4"
            >
              <div className="absolute -inset-8 bg-muted/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-10" />

              <Link href={project.demo ?? project.sourceCode}>
                <div className="p-1.5 rounded-full border w-fit shadow-xs bg-white">
                  <div className="relative size-8 rounded-full overflow-clip shadow-xs shrink-0">
                    <Image
                      src={project.image.url}
                      alt={project.name}
                      className="object-contain bg-muted"
                      fill
                    />
                  </div>
                </div>
              </Link>

              <Link
                href={project.demo ?? project.sourceCode}
                className="font-medium"
              >
                {project.name}
              </Link>

              <div className="text-sm text-muted-foreground font-light line-clamp-2">
                {project.description}
              </div>

              <Link
                href={project.sourceCode}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <GitHub className="size-4 fill-muted-foreground" />
                {project.sourceCode.split("/")[4]}
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
