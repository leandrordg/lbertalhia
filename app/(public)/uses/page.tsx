import { Metadata } from "next";

import { UsesHeadingSection } from "@/components/uses-heading-section";
import { UsesMainSection } from "@/components/uses-main-section";

export const metadata: Metadata = {
  title: "Uses - Leandro Bertalhia",
  description: "The tools and technologies I use to build my projects.",
};

export default function UsesPage() {
  return (
    <main>
      <div className="fixed inset-0 -z-10 md:mx-4 lg:mx-8">
        <div className="h-dvh w-full max-w-7xl mx-auto bg-white dark:bg-zinc-900 border-x border-zinc-100 dark:border-zinc-800" />
      </div>

      <UsesHeadingSection />

      <UsesMainSection />
    </main>
  );
}
