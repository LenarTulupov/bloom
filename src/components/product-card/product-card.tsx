import Image from "next/image";
import Title from "../ui/title/title";
import { IProduct } from "@/types/product.interface";
import styles from "./product-card.module.scss";
import { useState } from "react";
import Link from "next/link";
import Icon from "../ui/icon/icon";
import { ICONS } from "@/constants/icons";
import Button from "../ui/button/button";

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
          <Icon icon={ICONS.favorite} className={styles['product-card__favorite']}/>
        </div>
        <Title>{title}</Title>
        <div>{price_new}</div>
        <div>{color}</div>
      </Link>
    </article>
  );
}
