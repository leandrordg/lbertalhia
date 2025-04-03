import { Metadata } from "next";

import { getSocials } from "@/hooks/get-socials";

import { AboutMeSection } from "@/components/about-me-section";

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

      <AboutMeSection socials={socials} />
    </main>
  );
}
