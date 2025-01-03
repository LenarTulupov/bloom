import Title from "../ui/title/title";
import Description from "../ui/description/description";
import styles from "./feature-card.module.scss";

export interface IFeatureCard {
  id: number;
  title: string;
  description?: boolean;
  text?: string;
  items: {
    id: number;
    title: string;
  }[];
}

export default function FeatureCard({
  title,
  description,
  text,
  items,
}: IFeatureCard) {
  return (
    <div className={styles["feature-card"]}>
      <Title
        h={3}
        className={styles["feature-card__title"]}
        size="small"
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
    </div>
  );
}
