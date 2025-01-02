import Container from "@/components/ui/container/container";
import WelcomeContent from "./welcome-content/welcome-content";
import WelcomeImage from "./welcome-image/welcome-image";
import styles from "./welcome.module.scss";

export default function Welcome() {
  return (
    <section className={styles["welcome-section"]}>
      <Container>
        <WelcomeContent />
      </Container>
      <WelcomeImage />
    </section>
  );
}
