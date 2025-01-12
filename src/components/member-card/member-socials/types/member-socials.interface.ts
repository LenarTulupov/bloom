import { ComponentType, SVGProps } from "react";

export interface IMemberSocials {
  socials: {
    id: number;
    url: string;
    icon: ComponentType<SVGProps<SVGSVGElement>>;
  }[];
}