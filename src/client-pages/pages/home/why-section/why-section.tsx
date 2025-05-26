import Container from "@/components/ui/container/container";
import styles from "./why-section.module.scss";
import Title from "@/components/ui/title/title";
import Description from "@/components/ui/description/description";
import { whyItems } from "@/constants/why-items";

export default function WhySection() {
  return (
    <section className={styles["why-section"]}>
      <Container>
        <div className={styles["why-section__content"]}>
          <Title>Why MIRÉ</Title>
          <div className={styles["why-section__content-items"]}>
            {whyItems.map((item) => (
              <div
                key={item.id}
                className={`${styles["why-section__content-item"]} ${styles["content-item"]}`}
              >
                <Title size="sm">{item.title}</Title>
                <Description className={styles["content-item__description"]}>
                  {item.description}
                </Description>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
