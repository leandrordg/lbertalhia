"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import { ProjectDialog } from "@/components/project-dialog";

interface Props {
  projects: ProjectWithRelations[];
}

export function HomeProjectsSlide({ projects }: Props) {
  return (
    <motion.section
      initial={{ opacity: 0, x: -120 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="py-12 flex items-center justify-center gap-4 md:gap-8 overflow-hidden"
    >
      {projects.slice(0, 5).map((project) => (
        <ProjectDialog key={project.id} project={project}>
          <div
            key={project.id}
            className="relative aspect-[9/10] w-56 md:w-72 flex-none rounded-xl overflow-clip shadow-sm even:rotate-2 odd:-rotate-2 cursor-pointer select-none"
          >
            <Image
              src={project.image.url}
              alt={project.name}
              className="object-cover bg-muted"
              fill
            />
          </div>
        </ProjectDialog>
      ))}
    </motion.section>
  );
}
