import Container from "@/components/ui/container/container";
import Image from "next/image";
import BackgroundColor from "@/components/ui/background-color/background-color";
import TeamContent from "./team-content/team-content";
import styles from "./team.module.scss";

export default function Team() {
  return (
    <section className={styles["section-team"]}>
      <BackgroundColor>
        <div className={styles["section-team__img-left"]}>
          <Image
            alt="mother shows love"
            src="/home/team/mother.png"
            width={475}
            height={1062}
          />
        </div>
        <div className={styles["section-team__img-right"]}>
          <Image
            alt="mother shows love"
            src="/home/team/mother.png"
            width={475}
            height={1062}
          />
        </div>
        <Container className={styles["section-team__container"]}>
          <TeamContent/>
        </Container>
      </BackgroundColor>
    </section>
  );
}
