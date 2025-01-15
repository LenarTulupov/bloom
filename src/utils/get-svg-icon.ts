import { ICONS } from "@/constants/icons"

export function getSVGIcon(name: string) {
  const SVGIcon = ICONS[name];

  if (!SVGIcon) {
    console.error(`Icon "${name}" not found in ICONS.`);
    return null;
  }

  return SVGIcon
}