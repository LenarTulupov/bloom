import Image from "next/image";
import { IBlogCard } from "@/types/blog-card.interface";
import BlogCardContent from "./blog-card-content/blog-card-content";
import styles from "./blog-card.module.scss";

export default function BlogCard({ blog }: IBlogCard) {
  const { title, description, date, comments, image, href } = blog;
  return (
    <article className={styles["blog-card"]}>
      <div className={styles["blog-card__img-container"]}>
        <Image 
          className={styles.img}
          alt={title} 
          src={image} 
          width={424} 
          height={290} 
        />
      </div>
      <BlogCardContent
        description={description}
        date={date}
        comments={comments}
        href={href}
        title={title}
      />
    </article>
  );
}
