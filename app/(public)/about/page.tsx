import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { getSocials } from "@/hooks/get-socials";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "About - Leandro Bertalhia",
  description:
    "I'm Leandro Bertalhia. I live in São Paulo, where I create digital solutions for the future.",
};

export default async function AboutPage() {
  const socials = await getSocials();

  return (
    <main>
      <div className="fixed inset-0 -z-10 md:mx-4 lg:mx-8">
        <div className="h-dvh w-full max-w-7xl mx-auto bg-white dark:bg-zinc-900 border-x border-zinc-100 dark:border-zinc-800" />
      </div>

      <section className="flex flex-col-reverse lg:flex-row items-start gap-8 max-w-7xl mx-auto px-4 sm:px-8 md:px-16 py-12 space-y-4">
        <div className="flex-[3]">
          <div className="max-w-xl space-y-6">
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
              Beyond web development, I&apos;ve always been interested in
              solving technical problems and improving system efficiency. My
              experience extends beyond software, encompassing electrical
              maintenance and automation, which has given me a broader
              understanding of technology. This knowledge has allowed me to
              create robust and efficient solutions, combining hardware and
              software to solve real-world challenges.
            </p>

            <p className="leading-relaxed text-muted-foreground">
              Along the way, I&apos;ve gained experience working on diverse
              projects, from helping improve operational efficiency at Suzano
              Papel e Celulose to launching my own ventures. Every project I
              take on is an opportunity to push the boundaries of what&apos;s
              possible with technology, and I&apos;m always looking forward to
              the next challenge.
            </p>

            <div className="md:hidden flex flex-wrap gap-0.5">
              {socials.map((social) => (
                <Link key={social.id} target="_blank" href={social.url}>
                  <div className="flex items-center gap-4 group px-2 lg:px-4 py-2 rounded-xl hover:bg-muted/50">
                    <div className="relative size-4 shrink-0">
                      <Image
                        src={social.image.url}
                        alt={social.name}
                        className="mix-blend-multiply object-contain dark:grayscale"
                        fill
                      />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {social.name}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <aside className="w-full flex-1 md:flex-[2] space-y-8 lg:space-y-16">
          <div className="relative aspect-square w-full rounded-xl overflow-clip shadow-sm rotate-4 max-w-80 lg:max-w-96 mx-auto md:mx-0">
            <Image
              src="/profile-square.png"
              alt="Leandro Bertalhia"
              className="object-cover bg-muted"
              quality={100}
              fill
            />
          </div>

          <div className="hidden md:flex flex-wrap lg:flex-col gap-0.5">
            {socials.map((social) => (
              <Link key={social.id} target="_blank" href={social.url}>
                <div className="flex items-center gap-4 group px-2 lg:px-4 py-2 rounded-xl hover:bg-muted/50">
                  <div className="relative size-4 shrink-0">
                    <Image
                      src={social.image.url}
                      alt={social.name}
                      className="mix-blend-multiply object-contain dark:grayscale"
                      fill
                    />
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {social.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </aside>
      </section>
    </main>
  );
}
