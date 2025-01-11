import Image from "next/image";
import Description from "../ui/description/description";
import Divider from "../ui/divider/divider";
import Title from "../ui/title/title";
import Date from "../ui/date/date";
import Comments from "../ui/comments/comments";
import Link from "next/link";
import { IBlogCard } from "@/types/blog-card.interface";
import styles from "./blog-card.module.scss";
import ArrowIcon from "../ui/icons/arrow-icon/arrow-icon";

export default function BlogCard({ blog }: IBlogCard) {
  const { title, description, date, comments, image, href } = blog;
  return (
    <article className={styles["blog-card"]}>
      <Image alt={title} src={image} width={424} height={290} />
      <div className={styles["blog-card__content"]}>
        <div className={styles["blog-card__date-comments"]}>
          <Date date={date} />
          <Comments comments={comments} />
        </div>
        <Title className={styles["blog-card__title"]}>{title}</Title>
        <Description className={styles["blog-card__descr"]}>
          {description}
        </Description>
        <Divider />
        <Link href={href} className={styles["blog-card__button"]}>
          Read More
          <ArrowIcon/>
        </Link>
      </div>
    </article>
  );
}
