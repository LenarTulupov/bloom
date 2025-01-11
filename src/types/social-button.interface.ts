import { ComponentType, SVGProps } from "react";

export interface ISocialButton {
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  size?: 'sm' | 'md';
  color?: "accent" | "white";
  rounded?: boolean;
}