import Image from "next/image";
import Title from "../ui/title/title";
import Description from "../ui/description/description";
import styles from "./blog.module.scss";
import Link from "next/link";

interface IBlog {
  src: string;
  title: string;
  description: string;
  date: string;
}

export default function Blog({ src, title, description, date }: IBlog) {
  return (
    <article className={styles.blog}>
      <Link href="#!">
        <div className={styles["blog__image-container"]}>
          <Image
            className={styles["blog__image"]}
            alt={title}
            src={src}
            width={1000}
            height={1000}
            priority
          />
        </div>
        <div className={styles.blog__info}>
          <Title size="sm" uppercase>
            {title}
          </Title>
          <Description className={styles["blog__info-description"]}>
            {description}
          </Description>
          <div className={styles["blog__info-date"]}>{date}</div>
        </div>
      </Link>
    </article>
  );
}
