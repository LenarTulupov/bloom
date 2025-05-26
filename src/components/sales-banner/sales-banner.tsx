import Image from "next/image";
import styles from "./sales-banner.module.scss";
import Container from "../ui/container/container";
import Link from "next/link";

interface ISalesBanner {
  banner: string;
}

export default function SalesBanner({ banner }: ISalesBanner) {
  return (
    <div className={styles["sales-banner"]}>
      <Container>
        <Link href="/catalog/sales" className={styles["sales-banner__link"]}>
          <div className={styles["sales-banner__image-container"]}>
            <Image
              className={styles["sales-banner__image"]}
              alt="spring sales"
              src={banner}
              width={1000}
              height={1000}
              priority
            />
          </div>
        </Link>
      </Container>
    </div>
  );
}
