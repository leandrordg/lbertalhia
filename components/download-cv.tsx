"use client";

import Link from "next/link";

import confetti from "canvas-confetti";

import { Button } from "@/components/ui/button";
import { ArrowDownIcon } from "lucide-react";

export function DownloadCV() {
  const handleClick = () => {
    const count = 200;

    const defaults = {
      origin: { y: 0.7, x: 0.7 },
    };

    function fire(
      particleRatio: number,
      opts: {
        particleCount?: number;
        spread?: number;
        startVelocity?: number;
        decay?: number;
        scalar?: number;
      }
    ) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

  return (
    <Button
      variant="secondary"
      className="w-full"
      onClick={handleClick}
      asChild
    >
      <Link href="/leandro-bertalhia-cv.pdf" target="_blank" download>
        Download CV
        <ArrowDownIcon className="size-4 text-muted-foreground" />
      </Link>
    </Button>
  );
}
