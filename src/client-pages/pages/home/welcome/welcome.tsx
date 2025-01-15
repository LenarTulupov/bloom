import Container from "@/components/ui/container/container";
import WelcomeContent from "./welcome-content/welcome-content";
import WelcomeImage from "./welcome-image/welcome-image";
import styles from "./welcome.module.scss";
import BackgroundColor from "@/components/ui/background-color/background-color";

export default function Welcome() {
  return (
    <section className={styles["welcome-section"]}>
      <BackgroundColor color="gray">
        <Container>
          <WelcomeContent />
        </Container>
        <WelcomeImage />
      </BackgroundColor>
    </section>
  );
}
