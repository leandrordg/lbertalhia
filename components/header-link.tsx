"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

interface Props {
  name: string;
  href: string;
}

export function HeaderLink({ name, href }: Props) {
  const pathname = usePathname();

  const isActive = pathname === href || pathname.includes(href);

  return (
    <Link
      href={href}
      className={cn(
        "relative text-sm font-medium text-muted-foreground hover:text-indigo-700 transition-colors px-4 py-2",
        isActive && "text-indigo-700"
      )}
    >
      {name}
      <div
        className={cn(
          "absolute bottom-0 left-2 right-2 h-px bg-transparent",
          isActive &&
            "bg-gradient-to-r from-transparent via-indigo-700/50 to-transparent"
        )}
      />
    </Link>
  );
}
