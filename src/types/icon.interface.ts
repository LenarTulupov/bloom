import { ComponentType, SVGProps } from "react";

export interface IIcon {
  icon: ComponentType<SVGProps<SVGSVGElement>> | string;
  color?: "primary" | "white" | "gray" | "black";
  size?: "sm" | "md" | 'lg' | 'xl';
  className?: string;
  isHovered?: boolean;
  isHoverIcon?: boolean;
}