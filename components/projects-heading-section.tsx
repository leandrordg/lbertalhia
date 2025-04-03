"use client";

import { motion } from "framer-motion";

export function ProjectsHeadingSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 py-12 space-y-12"
    >
      <div className="max-w-3xl space-y-6">
        <h1 className="text-4xl font-bold tracking-tight leading-snug text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Projects That Showcase My Journey in Technology.
        </h1>

        <p className="leading-relaxed text-muted-foreground">
          Over the years, I&apos;ve worked on many projects, and these are the
          ones I&apos;m most proud of. Many of them are open-source, so if
          something catches your eye, check out the code and contribute with
          your ideas for improvements.
        </p>
      </div>
    </motion.section>
  );
}
