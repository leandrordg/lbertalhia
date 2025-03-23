import Image from "next/image";
import Link from "next/link";

import { MobileMenu } from "@/components/mobile-menu";
import { ThemeToggle } from "@/components/theme-toggle";
import { HeaderLink } from "./header-link";

export async function Header() {
  return (
    <header className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 relative py-8 md:py-12 lg:py-16">
      <section className="flex items-center h-full">
        <div className="flex-1 flex items-center">
          <Link href="/">
            <div className="relative size-10 rounded-full overflow-clip shadow-sm group">
              <Image
                src="/profile-square.png"
                alt="profile"
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                fill
              />
            </div>
          </Link>
        </div>

        <nav className="hidden md:flex items-center justify-center bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-800 rounded-xl overflow-clip">
          <HeaderLink name="About" href="/about" />
          <HeaderLink name="Projects" href="/projects" />
          <HeaderLink name="Articles" href="/articles" />
          <HeaderLink name="Uses" href="/uses" />
        </nav>

        <div className="flex-1 flex items-center gap-4 justify-end">
          <div className="md:hidden">
            <MobileMenu />
          </div>
          <ThemeToggle />
        </div>
      </section>
    </header>
  );
}
