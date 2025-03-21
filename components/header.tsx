import Image from "next/image";
import Link from "next/link";

import { MobileMenu } from "@/components/mobile-menu";
import { Button } from "@/components/ui/button";
import { MoonIcon } from "lucide-react";

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

        <nav className="hidden md:flex items-center justify-center border border-zinc-100 rounded-xl overflow-clip shadow-xs">
          <Link
            href="/about"
            className="text-sm text-muted-foreground hover:text-indigo-700 transition-colors px-4 py-2"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="text-sm text-muted-foreground hover:text-indigo-700 transition-colors px-4 py-2"
          >
            Projects
          </Link>
          <Link
            href="/articles"
            className="text-sm text-muted-foreground hover:text-indigo-700 transition-colors px-4 py-2"
          >
            Articles
          </Link>
          <Link
            href="/uses"
            className="text-sm text-muted-foreground hover:text-indigo-700 transition-colors px-4 py-2"
          >
            Uses
          </Link>
        </nav>

        <div className="flex-1 flex items-center gap-4 justify-end">
          <div className="md:hidden">
            <MobileMenu />
          </div>
          <Button type="submit" variant="outline" disabled>
            <MoonIcon className="text-indigo-700" />
          </Button>
        </div>
      </section>
    </header>
  );
}
