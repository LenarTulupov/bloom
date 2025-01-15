import Container from "@/components/ui/container/container";
import Title from "@/components/ui/title/title";
import Description from "@/components/ui/description/description";
import Button from "@/components/ui/button/button";
import ProcessSteps from "@/components/process-steps/process-steps";
import { steps } from "@/constants/steps";
import styles from "./process.module.scss";
import BackgroundColor from "@/components/ui/background-color/background-color";

export default function Process() {
  return (
    <section className={styles["process-section"]}>
      <BackgroundColor color="gray">
        <Container>
          <div className={styles["process-section__content"]}>
            <Title className={styles["process-section__content-title"]}>
              Surrogacy Process
            </Title>
            <Description className={styles["process-section__content-descr"]}>
              We understand that building a family is one of life’s most
              precious journeys.
            </Description>
            <ProcessSteps steps={steps} />
            <Button className={styles["process-section__content-button"]}>
              Learn More
            </Button>
          </div>
        </Container>
      </BackgroundColor>
    </section>
  );
}
