import Image from "next/image";
import { IProduct } from "@/types/product.interface";
import { useState } from "react";
import Link from "next/link";
import Icon from "../icon/icon";
import Button from "../ui/buttons/button/button";
import styles from "./product-card.module.scss";
import ColorIndicator from "../ui/color-indicator/color-indicator";
import Title from "../ui/title/title";
import Price from "../ui/price/price";

export default function ProductCard({ product }: { product: IProduct }) {
  const { title, thumbnail, price_new, price_old, color } = product;
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
            <Button className={styles["product-card__quick-view"]}>
              Quick View
            </Button>
          )}
          <Icon name="favorite" className={styles["product-card__favorite"]} />
        </div>
        <div className={styles["product-card__info"]}>
          <Title size="xl" className={styles["product-card__info-title"]}>{title}</Title>
          <Price 
            className={styles["product-card__info-price"]}
            price_new={price_new} 
            price_old={price_old} 
          />
          <ColorIndicator color={color} className={styles["product-card__info-color"]}/>
        </div>
      </Link>
    </article>
  );
}
