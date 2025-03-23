"use client";

import { ArrowLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export function BackButton() {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <button
      className="rounded-full border border-zinc-100 dark:border-zinc-800 p-2 overflow-clip cursor-pointer text-muted-foreground hover:text-foreground hover:bg-muted/50"
      onClick={handleClick}
    >
      <ArrowLeftIcon className="size-4" />
    </button>
  );
}
