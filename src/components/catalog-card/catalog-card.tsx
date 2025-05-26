import Image from "next/image";
import styles from "./catalog-card.module.scss";
import Link from "next/link";

interface ICatalogCard {
  name: string;
  href: string;
}

export default function CatalogCard({ name, href }: ICatalogCard) {
  console.log(href)
  return (
    <article className={styles["catalog-card"]}>
      <Link href={href}>
        <div className={styles["catalog-card__content"]}>
          <div className={styles['catalog-card__title']}>{name}</div>
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
