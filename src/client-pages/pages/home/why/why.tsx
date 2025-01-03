import Container from "@/components/ui/container/container";
import Image from "next/image";
import Title from "@/components/ui/title/title";
import FeatureCard from "@/components/feature-card/feature-card";
import Description from "@/components/ui/description/description";
import { featureCards } from "@/constants/feature-cards";
import styles from "./why.module.scss";

export default function Why() {
  return (
    <section className={styles["why-section"]}>
      <Container>
        <div className={styles["why-section__content"]}>
          <Image
            className={styles["why-section__content-image"]}
            alt="kid"
            src="/home/why/kid-image.png"
            width={228}
            height={228}
          />
          <Title
            size="middle"
            title="Why Choose NewBloom?"
            className={styles["why-section__content-title"]}
          />
          <Description className={styles['why-section__content-descr']}>
            NewBloom is your trusted partner for a smooth, secure, and joyful
            surrogacy journey in Georgia. Here’s why:
          </Description>
          <div className={styles["why-section__content-cards"]}>
            {featureCards.map((card) => (
              <FeatureCard
                key={card.id}
                id={card.id}
                title={card.title}
                description={card.description}
                text={card.text}
                items={card.items}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
