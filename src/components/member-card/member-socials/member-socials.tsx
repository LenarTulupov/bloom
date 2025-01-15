import SocialButton from "@/components/ui/social-button/social-button";
import { IMemberSocials } from "@/components/member-card/member-socials/types/member-socials.interface";
import styles from "./member-socials.module.scss";

export default function MemberSocials({ socials }: IMemberSocials) {
  return (
    <div className={styles["member-socials"]}>
      {socials.map((item) => (
        <SocialButton
          key={item.id}
          href={item.url}
          name={item.name}
          color="primary"
          rounded
        />
      ))}
    </div>
  );
}
