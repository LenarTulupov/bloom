import Container from "@/components/ui/container/container";
import styles from "./about.module.scss";
import AboutContent from "./about-content/about-content";
import Image from "next/image";
import BackgroundColor from "@/components/ui/background-color/background-color";

export default function About() {
  return (
    <section className={styles.about}>
      <BackgroundColor>
        <div className={styles["about__img-mother"]}>
          <Image
            alt="mother"
            src="/home/about/mother.png"
            width={355}
            height={371}
          />
        </div>
        <div className={styles["about__img-love"]}>
          <Image
            alt="love"
            src="/home/about/love.png"
            width={361}
            height={463}
            priority
          />
        </div>
        <Container>
          <div className={styles.about__row}>
            <Image
              alt="family photos"
              src="/home/about/family.png"
              width={584}
              height={533}
            />
            <AboutContent />
          </div>
        </Container>
      </BackgroundColor>
    </section>
  );
}
