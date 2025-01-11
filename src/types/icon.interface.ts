import { ComponentType, SVGProps } from "react";

export interface IIcon {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  color?: "accent" | "white";
  size?: "sm" | "md";
}