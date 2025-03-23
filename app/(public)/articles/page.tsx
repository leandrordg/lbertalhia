import { Metadata } from "next";
import Link from "next/link";

import { getPosts } from "@/hooks/get-posts";
import { formatDate } from "@/lib/utils";

import { ChevronRightIcon } from "lucide-react";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Articles - Leandro Bertalhia",
  description:
    "Writing on web development, entrepreneurship, and technology innovation.",
};

export default async function ArticlesPage() {
  const posts = await getPosts();

  return (
    <main>
      <div className="fixed inset-0 -z-10 md:mx-4 lg:mx-8">
        <div className="h-dvh w-full max-w-7xl mx-auto bg-white dark:bg-zinc-900 border-x border-zinc-100 dark:border-zinc-800" />
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 py-12 space-y-12">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl font-bold tracking-tight leading-snug text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Insights on Web Development and Technological Innovation.
          </h1>

          <p className="leading-relaxed text-muted-foreground">
            Sharing my thoughts on programming, technology trends, and more,
            organized in a chronological order.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 py-12">
        <div className="grid grid-cols-1 lg:border-l border-zinc-100 dark:border-zinc-800 gap-16">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col lg:flex-row gap-4 lg:gap-16 rounded-xl lg:pl-8"
            >
              <div className="flex gap-2">
                <div className="w-px h-5 lg:hidden bg-zinc-200 dark:bg-zinc-800 rounded-xl" />
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
                className="flex-[4] flex flex-col gap-4 relative group"
              >
                <div className="absolute -inset-4 md:-inset-8 bg-muted/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-10" />

                <div className="font-medium">{post.title}</div>
                <div className="text-sm text-muted-foreground">
                  {post.description}
                </div>
                <p className="flex items-center gap-1 text-sm font-medium text-indigo-700">
                  Ver artigo <ChevronRightIcon className="size-4" />
                </p>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
