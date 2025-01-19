import Image from "next/image";
import Title from "../ui/title/title";
import Description from "../ui/description/description";
import { IMemberCard } from "@/types/member-card.interface";
import MemberSocials from "./member-socials/member-socials";
import styles from "./member-card.module.scss";

export default function MemberCard({
  name,
  description,
  role,
  image,
  socials,
}: IMemberCard) {
  return (
    <article className={styles["member-card"]}>
      <Image
        alt="photo of the team member"
        src={image}
        width={186}
        height={186}
        className={styles['member-card__img']}
      />
      <div className={styles["member-card__content"]}>
        <div className={styles["member-card__content-role"]}>{role}</div>
        <Title h={4} size="sm" className={styles['member-card__content-title']}>
          {name}
        </Title>
        <Description text={description} />
        <MemberSocials socials={socials}/>
      </div>
    </article>
  );
}
