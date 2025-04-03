import { Metadata } from "next";

import { getPosts } from "@/hooks/get-posts";

import { ArticlesHeadingSection } from "@/components/articles-heading-section";
import { ArticlesMainSection } from "@/components/articles-main-section";

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

      <ArticlesHeadingSection />

      <ArticlesMainSection posts={posts} />
    </main>
  );
}
