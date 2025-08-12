import Image from "next/image";
import { IProduct } from "@/types/product.interface";
import { MouseEvent, useState } from "react";
import Link from "next/link";
import Icon from "../icon/icon";
import Button from "../ui/buttons/button/button";
import ColorIndicator from "../ui/color-indicator/color-indicator";
import Price from "../ui/price/price";
import styles from "./product-card.module.scss";
import ItemTitle from "../ui/item-title/item-title";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  addToFavorites,
  isProductInFavorites,
} from "@/store/features/favorite-slice";
import { IFavorites } from "@/types/favorites.interface";

export default function ProductCard({ product }: { product: IProduct }) {
  const { title, thumbnail, price_new, price_old, color } = product;
  const [showQuickView, setShowQuickView] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const isFavorites = useAppSelector((state: { favoritesState: IFavorites }) =>
    isProductInFavorites(state, product.id)
  );

  const onMouseEnter = () => {
    setShowQuickView(true);
  };

  const onMouseLeave = () => {
    setShowQuickView(false);
  };

  const handleFavorite = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(addToFavorites(product));
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
          <button
            onClick={handleFavorite}
            className={styles["product-card__favorite"]}
          >
            {isFavorites ? <Icon name="favoriteActive" /> : <Icon name="favorite" />}
          </button>
        </div>
        <div className={styles["product-card__info"]}>
          <ItemTitle className={styles["product-card__info-title"]}>
            {title}
          </ItemTitle>
          <Price
            className={styles["product-card__info-price"]}
            price_new={price_new}
            price_old={price_old}
          />
          <ColorIndicator
            color={color}
            className={styles["product-card__info-color"]}
          />
        </div>
      </Link>
    </article>
  );
}
