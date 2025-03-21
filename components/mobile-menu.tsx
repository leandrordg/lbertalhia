import Link from "next/link";

import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ChevronRightIcon, MenuIcon } from "lucide-react";

export function MobileMenu() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="button" variant="outline">
          <MenuIcon />
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 gap-0 overflow-clip">
        <VisuallyHidden>
          <DialogHeader>
            <DialogTitle>Menu</DialogTitle>
            <DialogDescription>
              See all the pages and features available on this site.
            </DialogDescription>
          </DialogHeader>
        </VisuallyHidden>

        <h2 className="text-sm font-medium text-muted-foreground p-6">
          Navigation
        </h2>

        <nav className="flex flex-col">
          <DialogClose asChild>
            <Link
              href="/about"
              className="flex items-center gap-4 text-sm text-muted-foreground hover:text-indigo-700 transition-colors px-6 py-4 hover:bg-muted/50"
            >
              About
              <ChevronRightIcon className="size-4 ml-auto" />
            </Link>
          </DialogClose>
          <DialogClose asChild>
            <Link
              href="/projects"
              className="flex items-center gap-4 text-sm text-muted-foreground hover:text-indigo-700 transition-colors px-6 py-4 hover:bg-muted/50"
            >
              Projects
              <ChevronRightIcon className="size-4 ml-auto" />
            </Link>
          </DialogClose>
          <DialogClose asChild>
            <Link
              href="/articles"
              className="flex items-center gap-4 text-sm text-muted-foreground hover:text-indigo-700 transition-colors px-6 py-4 hover:bg-muted/50"
            >
              Articles
              <ChevronRightIcon className="size-4 ml-auto" />
            </Link>
          </DialogClose>
          <DialogClose asChild>
            <Link
              href="/uses"
              className="flex items-center gap-4 text-sm text-muted-foreground hover:text-indigo-700 transition-colors px-6 py-4 hover:bg-muted/50"
            >
              Uses
              <ChevronRightIcon className="size-4 ml-auto" />
            </Link>
          </DialogClose>
        </nav>

        <p className="text-xs text-muted-foreground p-6">
          Thanks for visiting! 👋
        </p>
      </DialogContent>
    </Dialog>
  );
}
