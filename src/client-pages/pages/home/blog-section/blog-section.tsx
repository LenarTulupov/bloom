import Container from "@/components/ui/container/container";
import styles from "./blog-section.module.scss";
import Title from "@/components/ui/title/title";
import Blog from "@/components/blog/blog";
import { blogs } from "@/constants/blogs";
import ViewAllLink from "@/components/ui/view-all-link/view-all-link";

export default function BlogSection() {
  return (
    <section className={styles["blog-section"]}>
      <Container>
        <div className={styles["blog-section__content"]}>
          <div className={styles["blog-section__content-header"]}>
            <Title uppercase>our blog</Title>
            <ViewAllLink href="#!" text="View All"/>
          </div>
          <div className={styles["blog-section__content-blogs"]}>
            <div className={styles["blog-section__row-top"]}>
              <Blog {...blogs[0]} />
              <Blog {...blogs[1]} />
            </div>
            <div className={styles["blog-section__row-bottom"]}>
              <Blog {...blogs[2]} />
              <Blog {...blogs[3]} />
              <Blog {...blogs[4]} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
