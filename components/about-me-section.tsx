"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import { SocialLink } from "@/components/social-link";

interface Props {
  socials: Social[];
}

export function AboutMeSection({ socials }: Props) {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-start gap-8 max-w-7xl mx-auto px-4 sm:px-8 md:px-16 py-12 space-y-4">
      <div className="flex-[3]">
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="max-w-xl space-y-6"
        >
          <h1 className="text-4xl font-bold tracking-tight leading-snug text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I&apos;m Leandro Bertalhia. I live in São Paulo, where I create
            digital solutions for the future.
          </h1>

          <p className="leading-relaxed text-muted-foreground">
            I&apos;ve always had a passion for creating things, and I wrote my
            first program at the age of 16. From there, my fascination with
            technology grew, and I dove deep into web development, mastering
            tools like Next.js, TypeScript, and AWS. Over the years, I&apos;ve
            worked on everything from building complex e-commerce platforms to
            optimizing backend services, and even creating real-time
            collaborative applications.
          </p>

          <p className="leading-relaxed text-muted-foreground">
            Beyond web development, I&apos;ve always been interested in solving
            technical problems and improving system efficiency. My experience
            extends beyond software, encompassing electrical maintenance and
            automation, which has given me a broader understanding of
            technology. This knowledge has allowed me to create robust and
            efficient solutions, combining hardware and software to solve
            real-world challenges.
          </p>

          <p className="leading-relaxed text-muted-foreground">
            Along the way, I&apos;ve gained experience working on diverse
            projects, from helping improve operational efficiency at Suzano
            Papel e Celulose to launching my own ventures. Every project I take
            on is an opportunity to push the boundaries of what&apos;s possible
            with technology, and I&apos;m always looking forward to the next
            challenge.
          </p>

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="md:hidden flex items-center flex-wrap gap-0.5"
          >
            {socials.map((social) => (
              <SocialLink key={social.id} social={social} type="rounded" />
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.aside
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="w-full flex-1 md:flex-[2] space-y-8 lg:space-y-16"
      >
        <div className="relative aspect-square w-full rounded-xl overflow-clip shadow-sm rotate-4 max-w-80 lg:max-w-96 mx-auto md:mx-0">
          <Image
            src="/profile-square.png"
            alt="Leandro Bertalhia"
            className="object-cover bg-muted"
            quality={100}
            fill
          />
        </div>

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
          className="hidden md:flex flex-wrap lg:flex-col gap-0.5"
        >
          {socials.map((social) => (
            <SocialLink key={social.id} social={social} type="rounded" />
          ))}
        </motion.div>
      </motion.aside>
    </section>
  );
}
