"use client";

import Link from "next/link";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 relative py-8 md:py-12 lg:py-16 border-t border-zinc-100 dark:border-zinc-800"
    >
      <section className="flex flex-col gap-4 items-center text-center lg:flex-row lg:justify-between text-muted-foreground">
        <div className="flex flex-wrap items-center justify-center gap-4 *:text-sm *:font-medium">
          <Link href="/about" className="hover:text-foreground">
            About
          </Link>
          <Link href="/projects" className="hover:text-foreground">
            Projects
          </Link>
          <Link href="/articles" className="hover:text-foreground">
            Articles
          </Link>
          <Link href="/uses" className="hover:text-foreground">
            Uses
          </Link>
        </div>

        <p className="text-sm">
          &copy; {new Date().getFullYear()} lbertalhia. All rights reserved.
        </p>
      </section>
    </motion.footer>
  );
}
