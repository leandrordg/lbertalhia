import { TECNOLOGY_ICONS } from "@/lib/icons-map";

interface Props {
  technology: TechnologyType;
}

export function CustomTechnology({ technology }: Props) {
  const Icon = TECNOLOGY_ICONS[technology];

  const formattedTechnology = technology
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/^./, (str) => str.toUpperCase());

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl dark:bg-zinc-800">
      <Icon className="size-4 dark:fill-muted-foreground rounded-xs overflow-clip" />
      <span className="text-xs text-muted-foreground pointer-events-none">
        {formattedTechnology}
      </span>
    </div>
  );
}
