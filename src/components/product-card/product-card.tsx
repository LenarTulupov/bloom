import Title from "../ui/title/title";
import { IProduct } from "@/types/product.interface";
import Link from "next/link";
import Button from "../ui/button/button";
import SizeSelectButtons from "../ui/size-select-buttons/size-select-buttons";
import ProductColor from "../ui/product-color/product-color";
import ProductCardImage from "./product-card-image/product-card-image";
import ProductPrices from "../ui/product-prices/product-prices";
import styles from "./product-card.module.scss";

interface IProductCard {
  data: IProduct;
}

export default function ProductCard({ data }: IProductCard) {
  const { id, title, thumbnail, price_new, price_old, sizes, color } = data;
  return (
    <article className={styles["product-card"]}>
      <Link href={`/product/${id}`}>
        <ProductCardImage src={thumbnail} alt={title} />
        <Title size="xxs">{title}</Title>
        <SizeSelectButtons sizes={sizes} />
        <ProductColor color={color} />
        <ProductPrices oldPrice={price_old} newPrice={price_new}/>
        <Button>Add to cart</Button>
      </Link>
    </article>
  );
}
