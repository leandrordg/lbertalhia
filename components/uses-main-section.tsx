"use client";

import { motion } from "framer-motion";

export function UsesMainSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 py-12 space-y-16">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="grid grid-cols-1 lg:grid-cols-4 lg:border-l border-zinc-100 dark:border-zinc-800 gap-8"
      >
        <div className="flex items-start gap-4 col-span-1 lg:px-8">
          <div className="w-px h-5 lg:hidden bg-zinc-200 dark:bg-zinc-800 rounded-xl" />
          <div className="text-sm text-muted-foreground">Workstation</div>
        </div>

        <div className="col-span-3 space-y-12">
          <article className="flex flex-col lg:flex-row gap-4 rounded-xl">
            <div className="space-y-4 group">
              <div className="font-medium">
                Ryzen 7 5700X3D, 32GB RAM, RTX 2060 (2021)
              </div>
              <div className="text-sm text-muted-foreground">
                I built this workstation in 2021 to handle my development work
                and gaming needs. It&apos;s a custom build with a Ryzen 7
                5700x3d, 32GB of RAM, and an RTX 2060 GPU.
              </div>
            </div>
          </article>

          <article className="flex flex-col lg:flex-row gap-4 rounded-xl">
            <div className="space-y-4 group">
              <div className="font-medium">
                Target Altay 165Hz TN Full HD Monitor
              </div>
              <div className="text-sm text-muted-foreground">
                I use a 23.8&quot; Target Altay monitor with 165Hz refresh rate
                and a TN panel for my workstation. It&apos;s a great monitor for
                gaming and development work.
              </div>
            </div>
          </article>

          <article className="flex flex-col lg:flex-row gap-4 rounded-xl">
            <div className="space-y-4 group">
              <div className="font-medium">
                Delux M900 Pro Wireless Mouse 8K Polling Rate
              </div>
              <div className="text-sm text-muted-foreground">
                I use a Delux M900 Pro wireless mouse with an 8K polling rate
                for my workstation. It&apos;s a great mouse for gaming and
                productivity work.
              </div>
            </div>
          </article>

          <article className="flex flex-col lg:flex-row gap-4 rounded-xl">
            <div className="space-y-4 group">
              <div className="font-medium">
                Husky Blizzard Mechanical Keyboard 60% Switch Brown
              </div>
              <div className="text-sm text-muted-foreground">
                I use a Husky Blizzard mechanical keyboard with 60% layout and
                brown switches. It&apos;s a compact keyboard that&apos;s great
                for typing and gaming.
              </div>
            </div>
          </article>

          <article className="flex flex-col lg:flex-row gap-4 rounded-xl">
            <div className="space-y-4 group">
              <div className="font-medium">Redragon Zeus X 53mm Headset</div>
              <div className="text-sm text-muted-foreground">
                I use a Redragon Zeus X headset with 53mm drivers for my
                workstation. It&apos;s a great headset for gaming and conference
                calls.
              </div>
            </div>
          </article>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="grid grid-cols-1 lg:grid-cols-4 lg:border-l border-zinc-100 dark:border-zinc-800 gap-8"
      >
        <div className="flex items-start gap-4 col-span-1 lg:px-8">
          <div className="w-px h-5 lg:hidden bg-zinc-200 dark:bg-zinc-800 rounded-xl" />
          <div className="text-sm text-muted-foreground">Development Tools</div>
        </div>

        <div className="col-span-3 space-y-12">
          <article className="flex flex-col lg:flex-row gap-4 rounded-xl">
            <div className="space-y-4 group">
              <div className="font-medium">Visual Studio Code</div>
              <div className="text-sm text-muted-foreground">
                I use Visual Studio Code with the Min Theme (Dark) for my
                development work. It&apos;s a lightweight and customizable code
                editor that helps me stay productive.
              </div>
            </div>
          </article>

          <article className="flex flex-col lg:flex-row gap-4 rounded-xl">
            <div className="space-y-4 group">
              <div className="font-medium">GitHub</div>
              <div className="text-sm text-muted-foreground">
                I use GitHub to host my code repositories and collaborate with
                other developers. It&apos;s a great platform for version control
                and code reviews.
              </div>
            </div>
          </article>

          <article className="flex flex-col lg:flex-row gap-4 rounded-xl">
            <div className="space-y-4 group">
              <div className="font-medium">Docker</div>
              <div className="text-sm text-muted-foreground">
                I use Docker to containerize my applications and deploy them to
                production. It&apos;s a great tool for managing dependencies and
                scaling applications.
              </div>
            </div>
          </article>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="grid grid-cols-1 lg:grid-cols-4 lg:border-l border-zinc-100 dark:border-zinc-800 gap-8"
      >
        <div className="flex items-start gap-4 col-span-1 lg:px-8">
          <div className="w-px h-5 lg:hidden bg-zinc-200 dark:bg-zinc-800 rounded-xl" />
          <div className="text-sm text-muted-foreground">Design</div>
        </div>

        <div className="col-span-3 space-y-12">
          <article className="flex flex-col lg:flex-row gap-4 rounded-xl">
            <div className="space-y-4 group">
              <div className="font-medium">Figma</div>
              <div className="text-sm text-muted-foreground">
                I use Figma for designing user interfaces and prototyping
                applications. It&apos;s a great tool for collaborating with
                designers and developers.
              </div>
            </div>
          </article>
        </div>
      </motion.div>
    </section>
  );
}
