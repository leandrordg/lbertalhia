import { Metadata } from "next";
import Image from "next/image";

import { getPostBySlug } from "@/hooks/get-post-by-slug";
import { components } from "@/lib/components";
import { formatDate } from "@/lib/utils";
import { MDXRemote } from "next-mdx-remote/rsc";

import { BackButton } from "@/components/back-button";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Reading an article - Leandro Bertalhia",
  description: "See the latest articles from Leandro Bertalhia.",
};

interface Props {
  params: Promise<{ articleSlug: string }>;
}

export default async function ArticlePage({ params }: Props) {
  const { articleSlug } = await params;

  const post = await getPostBySlug(articleSlug);

  return (
    <main>
      <div className="fixed inset-0 -z-10 md:mx-4 lg:mx-8">
        <div className="h-dvh w-full max-w-7xl mx-auto bg-white dark:bg-zinc-900 border-x border-zinc-100 dark:border-zinc-800" />
      </div>

      <section className="max-w-4xl mx-auto px-4 sm:px-8 md:px-16 py-12 space-y-12">
        <div className="flex items-center gap-4 relative">
          <BackButton />

          <div className="w-px h-5 bg-zinc-200 dark:bg-zinc-700 rounded-xl" />
          <div className="text-sm text-muted-foreground">
            {formatDate(post.createdAt, {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </div>
        </div>
        <h1 className="text-4xl font-bold tracking-tight leading-snug text-zinc-800 sm:text-5xl dark:text-zinc-100">
          {post.title}
        </h1>

        <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
          {post.description}
        </p>

        <div className="relative w-full h-96 rounded-xl overflow-clip">
          <Image
            src={post.image.url}
            alt={post.title}
            className="object-cover bg-muted"
            fill
          />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-8 md:px-16 py-12 space-y-12">
        <MDXRemote source={post.content} components={components} />
      </section>
    </main>
  );
}
