import Container from "@/components/ui/container/container";
import Title from "@/components/ui/title/title";
import Description from "@/components/ui/description/description";
import BlogCard from "@/components/blog-card/blog-card";
import { blogs } from "@/constants/blogs";
import styles from "./blog.module.scss";

export default function Blog() {
  return (
    <section className={styles["blog-section"]}>
      <Container>
        <Title className={styles['blog-section__title']}>Learn from our blog</Title>
        <Description className={styles['blog-section__descr']}>
          We understand that building a family is one of life’s most precious
          journeys.
        </Description>
        <div className={styles["blog-section__blogs"]}>
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </Container>
    </section>
  );
}
