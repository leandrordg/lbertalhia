import Link from "next/link";

import { SOCIAL_ICONS } from "@/lib/icons-map";
import { cn } from "@/lib/utils";

interface Props {
  type?: "default" | "rounded";
  social: Social;
}

export function SocialLink({ social, type }: Props) {
  const Icon = SOCIAL_ICONS[social.type];

  return (
    <Link key={social.id} target="_blank" href={social.url}>
      <div
        className={cn(
          "flex items-center gap-2 group",
          type === "rounded" &&
            "gap-4 px-2 lg:px-4 py-2 rounded-xl hover:bg-muted/50"
        )}
      >
        <Icon className="size-4 dark:fill-muted-foreground" />
        <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground">
          {social.name}
        </span>
      </div>
    </Link>
  );
}
