import ProcessSteps from "@/components/process-steps/process-steps";
import Button from "@/components/ui/button/button";
import Description from "@/components/ui/description/description";
import Title from "@/components/ui/title/title";
import { steps } from "@/constants/steps";
import styles from './process-content.module.scss';

export default function ProcessContent() {
  return (
    <div className={styles["process-section__content"]}>
      <Title className={styles["process-section__content-title"]}>
        Surrogacy Process
      </Title>
      <Description className={styles["process-section__content-descr"]}>
        We understand that building a family is one of life’s most precious
        journeys.
      </Description>
      <ProcessSteps steps={steps} />
      <Button className={styles["process-section__content-button"]}>
        Learn More
      </Button>
    </div>
  );
}
