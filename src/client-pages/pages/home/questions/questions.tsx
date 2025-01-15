import BackgroundColor from "@/components/ui/background-color/background-color";
import Container from "@/components/ui/container/container";
import QuestionsContent from "./questions-content/questions-content";
import styles from "./questions.module.scss";

export default function Questions() {

  return (
    <section className={styles["questions-section"]}>
      <BackgroundColor color="gray">
        <Container>
          <QuestionsContent/>
        </Container>
      </BackgroundColor>
    </section>
  );
}
