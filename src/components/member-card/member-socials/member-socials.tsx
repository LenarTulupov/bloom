import SocialButton from "@/components/ui/social-button/social-button";
import { ComponentType, SVGProps } from "react";
import styles from "./member-socials.module.scss";

interface IMemberSocials {
  socials: {
    id: number;
    url: string;
    icon: ComponentType<SVGProps<SVGSVGElement>>;
  }[];
}

export default function MemberSocials({ socials }: IMemberSocials) {
  return (
    <div className={styles["member-socials"]}>
      {socials.map((item) => (
        <SocialButton 
          key={item.id} 
          href={item.url} 
          icon={item.icon} 
        />
      ))}
    </div>
  );
}
