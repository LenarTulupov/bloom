import Button from "@/components/ui/button/button";
import Title from "@/components/ui/title/title";
import TeamContentCards from "./team-content-cards/team-content-cards";
import styles from "./team-content.module.scss";

export default function TeamContent() {
  return (
    <div className={styles["section-team__content"]}>
      <Title className={styles["section-team__content-title"]} color="white">
        Meet Out Team
      </Title>
      <TeamContentCards/>
      <Button className={styles["section-team__content-button"]} color="white">
        Learn More
      </Button>
    </div>
  );
}
