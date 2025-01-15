import Title from "../ui/title/title";
import { IProduct } from "@/types/product.interface";
import styles from "./product-card.module.scss";

interface IProductCard {
  productData: IProduct;
}

export default function ProductCard({ productData }: IProductCard) {
  const { title, thumbnail } = productData;
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
