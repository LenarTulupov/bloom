import { ComponentType, SVGProps } from "react";

export interface IIcon {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  color?: "primary" | "white" | "gray" | "black";
  size?: "sm" | "md" | 'lg';
  className?: string;
  isHovered?: boolean;
}