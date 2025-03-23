import Link from "next/link";

export function Footer() {
  return (
    <footer className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 py-12 border-t border-zinc-100 dark:border-zinc-800">
      <section className="flex flex-col items-center text-center lg:flex-row gap-4 justify-between">
        <div className="flex flex-wrap items-center justify-center gap-4 *:text-sm *:font-medium">
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/articles">Articles</Link>
          <Link href="/uses">Uses</Link>
        </div>

        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} lbertalhia. All rights reserved.
        </p>
      </section>
    </footer>
  );
}
