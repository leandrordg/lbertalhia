"use client";

import Link from "next/link";

import { formatDate } from "@/lib/utils";
import { motion } from "framer-motion";

import { ChevronRightIcon } from "lucide-react";

interface Props {
  posts: PostWithRelations[];
}

export function ArticlesMainSection({ posts }: Props) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 py-12">
      <div className="grid grid-cols-1 lg:border-l border-zinc-100 dark:border-zinc-800 gap-16">
        {posts.map((post) => (
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.3 * posts.indexOf(post),
              ease: "easeInOut",
            }}
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
          </motion.article>
        ))}
      </div>
    </section>
  );
}
