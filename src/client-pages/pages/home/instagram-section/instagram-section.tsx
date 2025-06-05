import Container from "@/components/ui/container/container";
import styles from "./instagram-section.module.scss";
import Image from "next/image";
import { instagramItems } from "@/constants/instagram-items";
import Title from "@/components/ui/title/title";

export default function InstagramSection() {
  return (
    <section className={styles["instagram-section"]}>
      <Container>
        <div className={styles["instagram-section__content"]}>
          <Title>Our Instagram</Title>
          <div className={styles["instagram-section__content-images"]}>
            {instagramItems.map((image) => (
              <div
                key={image.id}
                className={styles["instagram-section__content-wrapper"]}
              >
                <Image
                  alt="instagram image"
                  src={image.image}
                  width={100}
                  height={100}
                  priority
                  className={styles["instagram-section__content-image"]}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
