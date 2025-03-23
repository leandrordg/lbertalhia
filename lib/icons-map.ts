import {
  CPlusPlus,
  CSharp,
  Facebook,
  GitHub,
  Instagram,
  Java,
  Javascript,
  Linkedin,
  NextJs,
  Python,
  ReactJs,
  ReactNative,
  Typescript,
  X,
  Youtube,
} from "@/lib/icons";

const TECNOLOGY_ICONS: Record<TechnologyType, React.ElementType> = {
  nextJs: NextJs,
  reactJs: ReactJs,
  typescript: Typescript,
  javascript: Javascript,
  python: Python,
  java: Java,
  cpp: CPlusPlus,
  csharp: CSharp,
  reactNative: ReactNative,
};

const SOCIAL_ICONS: Record<SocialType, React.ElementType> = {
  x: X,
  github: GitHub,
  linkedin: Linkedin,
  instagram: Instagram,
  facebook: Facebook,
  youtube: Youtube,
};

export { SOCIAL_ICONS, TECNOLOGY_ICONS };
