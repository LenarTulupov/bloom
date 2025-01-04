import Image from "next/image";
import Title from "../ui/title/title";
import Description from "../ui/description/description";
import { IMemberCard } from "@/types/member-card.interface";
import MemberLink from "./member-link/member-link";
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
      />
      <div className={styles["member-card__content"]}>
        <div className={styles["member-card__role"]}>{role}</div>
        <Title h={4} size="sm">
          {name}
        </Title>
        <Description text={description} />
        <div className={styles["member-card__content-socials"]}>
          {socials.map((item) => (
            <MemberLink
              key={item.id}
              name={item.name}
              url={item.url}
            />
          ))}
        </div>
      </div>
    </article>
  );
}
