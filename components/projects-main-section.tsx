"use client";

import Image from "next/image";
import Link from "next/link";

import { GitHub } from "@/lib/icons";
import { motion } from "framer-motion";

import { CustomTechnology } from "@/components/custom-technology";
import { ProjectDialog } from "@/components/project-dialog";
import { ExternalLinkIcon, LinkIcon } from "lucide-react";

interface Props {
  projects: ProjectWithRelations[];
}

export function ProjectsMainSection({ projects }: Props) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 py-12 space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.article
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.3 * projects.indexOf(project),
              ease: "easeInOut",
            }}
            key={project.id}
            className="rounded-xl group flex flex-col items-center text-center hover:bg-muted/50 p-4 md:p-8 gap-4 transition-colors"
          >
            <ProjectDialog project={project}>
              <div className="p-1.5 rounded-full border w-fit shadow-xs bg-white dark:bg-zinc-800 cursor-pointer">
                <div className="relative size-8 rounded-full overflow-clip shadow-xs shrink-0">
                  <Image
                    src={project.image.url}
                    alt={project.name}
                    className="object-contain bg-muted"
                    fill
                  />
                </div>
              </div>
            </ProjectDialog>

            <Link
              target="_blank"
              href={project.demo ?? project.sourceCode}
              className="flex items-center gap-1 font-medium"
            >
              {project.name}{" "}
              <ExternalLinkIcon className="size-4 text-muted-foreground" />
            </Link>

            <div className="text-sm text-muted-foreground font-light line-clamp-5 lg:line-clamp-3 cursor-default">
              {project.description}
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {project.demo && (
                <Link
                  target="_blank"
                  href={project.demo}
                  className="flex items-center gap-2 text-xs font-medium text-muted-foreground py-1.5 px-4 bg-muted/50 rounded-xl hover:bg-muted"
                >
                  <LinkIcon className="size-4" />
                  Live Demo
                </Link>
              )}
              <Link
                target="_blank"
                href={project.sourceCode}
                className="flex items-center gap-2 text-xs font-medium text-muted-foreground py-1.5 px-4 bg-muted/50 rounded-xl hover:bg-muted"
              >
                <GitHub className="size-4 dark:fill-muted-foreground" />
                Source Code
              </Link>
              {project.technologies.slice(0, 3).map((technology, i) => (
                <CustomTechnology key={i} technology={technology} />
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
