"use client";

import { motion } from "framer-motion";

export function UsesHeadingSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 py-12 space-y-12"
    >
      <div className="max-w-3xl space-y-6">
        <h1 className="text-4xl font-bold tracking-tight leading-snug text-zinc-800 sm:text-5xl dark:text-zinc-100">
          The tools and technologies I use to build my projects.
        </h1>

        <p className="leading-relaxed text-muted-foreground">
          Here&apos;s a list of my favorite tools and resources that help me
          stay productive and build software efficiently, while avoiding
          procrastination.
        </p>
      </div>
    </motion.section>
  );
}
