import Title from "../ui/title/title";
import { IProduct } from "@/types/product.interface";
import styles from "./product-card.module.scss";

interface IProductCard {
  data: IProduct;
}

export default function ProductCard({ data }: IProductCard) {
  const { title, thumbnail } = data;
  return (
    <article className={styles["product-card"]}>
        <img
          src={thumbnail}
          alt={title}
          className={styles["product-card__img"]}
        />
      <Title size="xxs">{title}</Title>
    </article>
  );
}
