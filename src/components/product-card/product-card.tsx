import Image from "next/image";
import Title from "../ui/title/title";
import { IProduct } from "@/types/product.interface";
import { useState } from "react";
import Link from "next/link";
import Icon from "../icon/icon";
import Button from "../ui/buttons/button/button";
import styles from "./product-card.module.scss";

export default function ProductCard({ product }: { product: IProduct }) {
  const { title, thumbnail, price_new, color } = product;
  const [showQuickView, setShowQuickView] = useState<boolean>(false);

  const onMouseEnter = () => {
    setShowQuickView(true);
  };

  const onMouseLeave = () => {
    setShowQuickView(false);
  };
  return (
    <article
      className={styles["product-card"]}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Link href="#!">
        <div className={styles["product-card__img-wrapper"]}>
          <Image
            className={styles["product-card__img"]}
            alt={title}
            src={thumbnail}
            width={1000}
            height={1000}
            priority
          />
          {showQuickView && (
            <Button className={styles["product-card__quick-view"]}>Quick View</Button>
          )}
          <Icon name="favorite" className={styles['product-card__favorite']}/>
        </div>
        <Title>{title}</Title>
        <div>{price_new}</div>
        <div>{color}</div>
      </Link>
    </article>
  );
}
