import Container from "@/components/ui/container/container";
import BackgroundColor from "@/components/ui/background-color/background-color";
import ProcessContent from "./process-content/process-content";
import styles from "./process.module.scss";

export default function Process() {
  return (
    <section className={styles["process-section"]}>
      <BackgroundColor color="gray">
        <Container>
          <ProcessContent/>
        </Container>
      </BackgroundColor>
    </section>
  );
}
