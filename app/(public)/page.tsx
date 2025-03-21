import Image from "next/image";
import Link from "next/link";

import { getPosts } from "@/hooks/get-posts";
import { getProjects } from "@/hooks/get-projects";
import { GitHub, Instagram, Linkedin, X } from "@/lib/icons";
import { formatDate } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowDownIcon,
  BriefcaseBusinessIcon,
  ChevronRightIcon,
  MailIcon,
  SearchIcon,
} from "lucide-react";

export default async function HomePage() {
  const projects = await getProjects();
  const posts = await getPosts();

  return (
    <main>
      <div className="fixed inset-0 -z-10 md:mx-4 lg:mx-8">
        <div className="h-dvh w-full max-w-7xl mx-auto bg-white border-x border-zinc-100" />
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 py-12 space-y-4">
        <div className="max-w-xl">
          <h1 className="text-balance text-4xl font-bold tracking-tight leading-snug text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Web Developer, Designer and Fórmula 1 Enthusiast.
          </h1>
        </div>

        <div className="max-w-2xl">
          <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
            Olá, sou Leandro! Desenvolvedor web e empreendedor, sou o fundador e
            desenvolvedor do Bertalhia Shopping, onde vendo produtos e crio
            projetos personalizados para pessoas e empresas.
          </p>
        </div>

        <div className="flex items-center gap-8 mt-8">
          <Link target="_blank" href="https://instagram.com/leandro.rodriguesz">
            <Instagram className="size-5 fill-muted-foreground hover:fill-foreground transition-colors duration-200" />
          </Link>

          <Link target="_blank" href="https://github.com/leandrordg">
            <GitHub className="size-5 fill-muted-foreground hover:fill-foreground transition-colors duration-200" />
          </Link>

          <Link target="_blank" href="https://x.com/bertalhiaa">
            <X className="size-5 fill-muted-foreground hover:fill-foreground transition-colors duration-200" />
          </Link>

          <Link target="_blank" href="https://linkedin.com/in/lrbertalhia">
            <Linkedin className="size-5 fill-muted-foreground hover:fill-foreground transition-colors duration-200" />
          </Link>
        </div>
      </section>

      <section className="py-12 flex items-center justify-center gap-4 md:gap-8 overflow-hidden">
        {projects.slice(0, 5).map((project) => (
          <div
            key={project.id}
            className="relative aspect-[9/10] w-56 md:w-72 flex-none rounded-xl overflow-hidden shadow-sm even:rotate-2 odd:-rotate-2"
          >
            <Image
              src={project.image.url}
              alt={project.name}
              className="object-cover"
              fill
            />
          </div>
        ))}
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 py-12 flex flex-col lg:flex-row gap-16 relative">
        <div className="flex-[3] flex flex-col gap-16">
          {posts.map((post) => (
            <Link href={`/articles/${post.slug}`} key={post.id}>
              <article className="relative flex flex-col gap-4 rounded-xl group">
                <div className="absolute -inset-8 bg-muted/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-10" />
                <div className="flex items-center gap-2">
                  <div className="w-[2px] h-5 bg-zinc-200 rounded-xl" />
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
                  {post.content.slice(0, 100)}{" "}
                </div>
                <p className="flex items-center gap-1 text-sm font-medium text-indigo-700">
                  Ver artigo <ChevronRightIcon className="size-4" />
                </p>
              </article>
            </Link>
          ))}
        </div>

        <aside className="flex-[2] flex flex-col gap-8 sticky top-8">
          <div className="border border-zinc-100 rounded-xl p-8 space-y-6">
            <div className="flex items-center gap-4">
              <MailIcon className="size-5 text-muted-foreground fill-zinc-50" />
              <span className="text-sm font-medium">
                Fique sempre atualizado
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Seja notificado sobre novos artigos e projetos. Sem spam, apenas
              conteúdo relevante.
            </p>
            <form className="flex items-center gap-4">
              <Input type="email" placeholder="Endereço de email" required />
              <Button>
                <SearchIcon />
              </Button>
            </form>
          </div>

          <div className="border border-zinc-100 rounded-xl p-8 space-y-6">
            <div className="flex items-center gap-4">
              <BriefcaseBusinessIcon className="size-5 text-muted-foreground fill-zinc-50" />
              <span className="text-sm font-medium">Carreira</span>
            </div>

            <div className="flex flex-col gap-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="p-1.5 rounded-full border">
                    <div className="relative size-8 rounded-full overflow-clip shadow-sm shrink-0">
                      <Image
                        src="/profile-square.png"
                        alt="profile"
                        className="object-cover shadow-sm"
                        fill
                      />
                    </div>
                  </div>
                  <div className="w-full space-y-1">
                    <div className="text-sm font-medium">Vaga de emprego</div>
                    <div className="text-sm text-muted-foreground flex justify-between">
                      <span>Empresa</span>
                      <span>
                        202{index} - 202{index + 1}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="secondary" className="w-full">
              Baixar currículo{" "}
              <ArrowDownIcon className="size-4 text-muted-foreground" />
            </Button>
          </div>
        </aside>
      </section>
    </main>
  );
}
