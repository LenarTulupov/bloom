import Icon from "@/components/ui/icon/icon";
import { ICONS } from "@/constants/icons";
import Image from "next/image";
import styles from "./product-card-image.module.scss";

interface IProductCardImage {
  src: string;
  alt: string;
}

export default function ProductCardImage({ src, alt }: IProductCardImage) {
  return (
    <div className={styles["product-card__img-container"]}>
      <Image
        alt={alt}
        src={src}
        width={1000}
        height={1000}
        className={styles["product-card__img"]}
        priority
      />
      <Icon
        icon={ICONS.favorite}
        className={styles["product-card__favorite-icon"]}
        size="lg"
        color="black"
      />
    </div>
  );
}
