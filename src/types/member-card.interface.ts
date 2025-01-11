import { ComponentType, SVGProps } from "react";

export interface IMemberCard {
  name: string;
  description: string;
  role: string;
  image: string;
  socials: {
    id: number;
    url: string;
    icon: ComponentType<SVGProps<SVGSVGElement>>
  }[];
}