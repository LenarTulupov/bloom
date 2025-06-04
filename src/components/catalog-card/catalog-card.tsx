import Image from "next/image";
import styles from "./catalog-card.module.scss";
import Link from "next/link";
import ItemTitle from "../ui/item-title/item-title";

interface ICatalogCard {
  name: string;
  href: string;
}

export default function CatalogCard({ name, href }: ICatalogCard) {
  return (
    <article className={styles["catalog-card"]}>
      <Link href={href}>
        <div className={styles["catalog-card__content"]}>
          <ItemTitle>{name}</ItemTitle>
          <div className={styles["catalog-card__img-wrapper"]}>
            <Image
              className={styles["catalog-card__img"]}
              alt={name}
              src={`/catalog/${href.replace(/^\/?catalog\//, "")}.png`}
              width={100}
              height={100}
            />
          </div>
        </div>
      </Link>
    </article>
  );
}
