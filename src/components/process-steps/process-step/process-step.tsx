import Description from "@/components/ui/description/description";
import Title from "@/components/ui/title/title";
import { IStep } from "@/types/step.interface";
import cn from "classnames";
import styles from './process-step.module.scss';

export default function ProcessStep({ id, title, description, parentWidth }: IStep) {
  const isEven = id % 2 === 0;
  return (
    <div className={styles['process-step']}>
      <Title
        background
        className={cn(
          styles['process-step__subheader'],
          isEven ? "" : styles["process-step__subheader_odd"]
        )}
      >
        Step 0{id}
      </Title>
      <Title
        size="xs"
        className={cn(
          styles['process-step__title'],
          isEven ? styles["process-step__title_even"] : styles["process-step__title_odd"]
        )}
        style={
          parentWidth ? { '--parent-width': `${parentWidth}px` } as React.CSSProperties 
          : undefined
        }
      >
        {title}
      </Title>
      <Description text={description} />
    </div>
  );
}
