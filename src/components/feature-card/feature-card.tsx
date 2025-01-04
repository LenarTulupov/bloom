import Title from "../ui/title/title";
import Description from "../ui/description/description";
import { IFeatureCard } from "@/types/feature-card.interface";
import styles from "./feature-card.module.scss";

export default function FeatureCard({
  title,
  description,
  text,
  items,
}: IFeatureCard) {
  return (
    <article className={styles["feature-card"]}>
      <Title
        h={3}
        className={styles["feature-card__title"]}
        size="xs"
        title={title}
        color="black"
      />
      <div className={styles["feature-card__content"]}>
        {description && text && (
          <Description
            className={styles["feature-card__content-descr"]}
            size="sm"
            text={text}
          />
        )}
        <ul className={styles["feature-card__content-list"]}>
          {items.map((item) => (
            <li key={item.id} className={styles["feature-card__content-item"]}>
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
