import Link from "next/link";

import { getPosts } from "@/hooks/get-posts";
import { formatDate } from "@/lib/utils";

import { ChevronRightIcon } from "lucide-react";

export const revalidate = 3600;

export default async function ArticlesPage() {
  const posts = await getPosts();

  return (
    <main>
      <div className="fixed inset-0 -z-10 md:mx-4 lg:mx-8">
        <div className="h-dvh w-full max-w-7xl mx-auto bg-white border-x border-zinc-100" />
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 py-12 space-y-12">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl font-bold tracking-tight leading-snug text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Writing on web development, entrepreneurship, and technology
            innovation.
          </h1>

          <p className="leading-relaxed text-muted-foreground">
            Sharing my insights on programming, business development, technology
            trends, and more, organized chronologically.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:border-l border-zinc-100 gap-16">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col lg:flex-row gap-4 rounded-xl lg:pl-8"
            >
              <div className="flex items-start gap-4 flex-1">
                <div className="w-px h-5 lg:hidden bg-zinc-200 rounded-xl" />
                <div className="text-sm text-muted-foreground">
                  {formatDate(post.createdAt, {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
              </div>
              <Link
                href={`/articles/${post.slug}`}
                className="flex-[4] relative"
              >
                <div className="space-y-4 group">
                  <div className="absolute -inset-8 bg-muted/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-10" />

                  <div className="font-medium">{post.title}</div>
                  <div className="text-sm text-muted-foreground">
                    {post.description}
                  </div>
                  <p className="flex items-center gap-1 text-sm font-medium text-indigo-700">
                    Ver artigo <ChevronRightIcon className="size-4" />
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
