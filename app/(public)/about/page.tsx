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
        <div className="h-dvh w-full max-w-7xl mx-auto bg-white border-x border-zinc-100" />
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
              As a kid, I was also captivated by the idea of building things
              from the ground up, whether it was coding, tinkering with
              electronics, or learning to repair machines. My curiosity led me
              to study Computer Science and develop a strong foundation in both
              software and hardware. Combining my technical expertise and
              entrepreneurial mindset, I became the founder of Bertalhia
              Shopping, where I create tailored digital solutions and offer
              innovative products to individuals and businesses.
            </p>

            <p className="leading-relaxed text-muted-foreground">
              Along the way, I&apos;ve gained experience working on diverse
              projects, from helping improve operational efficiency at Suzano
              Papel e Celulose to launching my own ventures. Every project I
              take on is an opportunity to push the boundaries of what&apos;s
              possible with technology, and I&apos;m always looking forward to
              the next challenge.
            </p>
          </div>
        </div>

        <aside className="w-full flex-1 md:flex-[2] space-y-16">
          <div className="relative place-self-center mx-auto aspect-square w-full rounded-xl overflow-clip shadow-sm rotate-4 max-w-80 lg:max-w-96">
            <Image
              src="/profile-square.png"
              alt="Leandro Bertalhia"
              className="object-cover bg-muted"
              quality={100}
              fill
            />
          </div>

          <div className="flex flex-wrap lg:flex-col gap-0.5">
            {socials.map((social) => (
              <Link key={social.id} target="_blank" href={social.url}>
                <div className="flex items-center gap-4 group px-2 lg:px-4 py-2 rounded-xl hover:bg-muted/50">
                  <div className="relative size-4 shrink-0">
                    <Image
                      src={social.image.url}
                      alt={social.name}
                      className="object-cover"
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
