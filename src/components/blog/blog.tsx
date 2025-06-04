import Image from "next/image";
import Description from "../ui/description/description";
import Link from "next/link";
import ItemTitle from "../ui/item-title/item-title";
import styles from "./blog.module.scss";

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
          <ItemTitle size="sm">{title}</ItemTitle>
          <Description className={styles["blog__info-description"]}>
            {description}
          </Description>
          <div className={styles["blog__info-date"]}>{date}</div>
        </div>
      </Link>
    </article>
  );
}
