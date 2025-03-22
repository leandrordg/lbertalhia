"use client";

import Image from "next/image";
import Link from "next/link";

import { GitHub } from "@/lib/icons";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LinkIcon } from "lucide-react";

interface Props {
  project: ProjectWithRelations;
}

export function ProjectDialog({ project }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          key={project.id}
          className="relative aspect-[9/10] w-56 md:w-72 flex-none rounded-xl overflow-hidden shadow-sm even:rotate-2 odd:-rotate-2 cursor-pointer select-none"
        >
          <Image
            src={project.image.url}
            alt={project.name}
            className="object-cover bg-muted"
            fill
          />
        </div>
      </DialogTrigger>
      <DialogContent className="p-0 gap-0 overflow-clip focus:outline-none !max-w-2xl">
        <VisuallyHidden>
          <DialogHeader>
            <DialogTitle>{project.name}</DialogTitle>
            <DialogDescription>{project.description}</DialogDescription>
          </DialogHeader>
        </VisuallyHidden>

        <div
          key={project.id}
          className="relative w-full aspect-video border-b border-zinc-100"
        >
          <Image
            src={project.image.url}
            alt={project.name}
            className="object-contain bg-muted/50"
            fill
          />
        </div>

        <div className="p-4 sm:p-8 space-y-4">
          <h2 className="lg:text-lg font-medium text-foreground">
            {project.name}
          </h2>

          <p className="text-sm lg:text-base text-muted-foreground">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-4">
            {project.technologies.map((technology) => (
              <div key={technology.id} className="flex items-center gap-2">
                <div className="relative size-4 shrink-0">
                  <Image
                    src={technology.image.url}
                    alt={technology.name}
                    className="object-cover"
                    fill
                  />
                </div>
                <span className="text-xs font-medium text-muted-foreground">
                  {technology.name}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
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
              <GitHub className="size-4" />
              Source Code
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
