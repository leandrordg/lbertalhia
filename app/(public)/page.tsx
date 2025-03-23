import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { getCareers } from "@/hooks/get-careers";
import { getPosts } from "@/hooks/get-posts";
import { getProjects } from "@/hooks/get-projects";
import { getSocials } from "@/hooks/get-socials";
import { formatDate } from "@/lib/utils";

import { DownloadCV } from "@/components/download-cv";
import { ProjectDialog } from "@/components/project-dialog";
import { SocialLink } from "@/components/social-link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  BriefcaseBusinessIcon,
  ChevronRightIcon,
  MailIcon,
  SearchIcon,
} from "lucide-react";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Leandro Bertalhia - Web Developer Full Stack",
  description: "Bem vindo ao meu portfólio pessoal!",
};

export default async function HomePage() {
  const projects = await getProjects();
  const posts = await getPosts();
  const careers = await getCareers();
  const socials = await getSocials();

  return (
    <main>
      <div className="fixed inset-0 -z-10 md:mx-4 lg:mx-8">
        <div className="h-dvh w-full max-w-7xl mx-auto bg-white dark:bg-zinc-900 border-x border-zinc-100 dark:border-zinc-800" />
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 flex items-center">
        <div className="border border-zinc-100 dark:border-zinc-800 rounded-xl px-4 py-2">
          <p className="text-xs text-muted-foreground">
            <span className="font-medium">Update:</span> Added reading time, new
            social types, and layout improvements. 🚀
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 py-12 space-y-4">
        <div className="max-w-xl">
          <h1 className="text-balance text-4xl font-bold tracking-tight leading-snug text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Web Developer, Designer and Fórmula 1 Enthusiast.
          </h1>
        </div>

        <div className="max-w-2xl">
          <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
            Hello, I&apos;m Leandro! A full-stack web developer who loves
            crafting innovative and efficient digital solutions. Always striving
            for clean design and seamless functionality.
          </p>
        </div>

        <div className="flex flex-wrap gap-8 mt-8">
          {socials.map((social) => (
            <SocialLink key={social.id} social={social} />
          ))}
        </div>
      </section>

      <section className="py-12 flex items-center justify-center gap-4 md:gap-8 overflow-hidden">
        {projects.slice(0, 5).map((project) => (
          <ProjectDialog key={project.id} project={project}>
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
          </ProjectDialog>
        ))}
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 py-12 flex flex-col lg:flex-row gap-16 relative">
        <div className="flex-[3] flex flex-col gap-16">
          {posts.map((post) => (
            <Link href={`/articles/${post.slug}`} key={post.id}>
              <article className="relative flex flex-col gap-4 rounded-xl group">
                <div className="absolute -inset-8 bg-muted/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-10" />
                <div className="flex items-center gap-2">
                  <div className="w-px h-5 bg-zinc-200 dark:bg-zinc-800 rounded-xl" />
                  <div className="text-sm text-muted-foreground">
                    {formatDate(post.createdAt, {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>
                </div>
                <div className="font-medium">{post.title}</div>
                <div className="text-sm text-muted-foreground">
                  {post.description}
                </div>
                <p className="flex items-center gap-1 text-sm font-medium text-indigo-700">
                  Ver artigo <ChevronRightIcon className="size-4" />
                </p>
              </article>
            </Link>
          ))}
        </div>

        <aside className="flex-[2] flex flex-col gap-8 sticky top-8">
          <div className="border border-zinc-100 dark:border-zinc-800 rounded-xl p-8 space-y-6">
            <div className="flex items-center gap-4">
              <MailIcon className="size-5 text-muted-foreground fill-zinc-50 dark:fill-zinc-900" />
              <span className="text-sm font-medium">Stay up to date</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Get notified when I publish something new, and unsubscribe at any
              time.
            </p>
            <form className="flex items-center gap-4">
              <Input type="email" placeholder="Email address" required />
              <Button disabled>
                <SearchIcon />
              </Button>
            </form>
          </div>

          <div className="border border-zinc-100 dark:border-zinc-800 rounded-xl p-8 space-y-6">
            <div className="flex items-center gap-4">
              <BriefcaseBusinessIcon className="size-5 text-muted-foreground fill-zinc-50 dark:fill-zinc-900" />
              <span className="text-sm font-medium">Work</span>
            </div>

            <div className="flex flex-col gap-4">
              {careers.map((career) => (
                <div
                  key={career.id}
                  className="flex items-start md:items-center gap-4"
                >
                  <div className="p-1.5 rounded-full border w-fit shadow-xs bg-white dark:bg-zinc-800">
                    <div className="relative size-8 rounded-full overflow-clip shadow-xs shrink-0">
                      <Image
                        src={career.image.url}
                        alt={career.name}
                        className="object-contain bg-muted"
                        fill
                      />
                    </div>
                  </div>

                  <div className="w-full space-y-1">
                    <div className="text-sm font-medium">{career.company}</div>
                    <div className="flex flex-wrap gap-2 justify-between text-xs text-muted-foreground">
                      <p>{career.name}</p>
                      <p>
                        {formatDate(career.startDate, { year: "numeric" })}
                        {" - "}
                        {career.endDate
                          ? formatDate(career.endDate, { year: "numeric" })
                          : "Atual"}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <DownloadCV />
          </div>
        </aside>
      </section>
    </main>
  );
}
