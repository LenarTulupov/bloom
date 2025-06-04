import Image from "next/image";
import styles from "./sales-banner.module.scss";
import Container from "../ui/container/container";
import Link from "next/link";

export default function SalesBanner() {
  const banner = "/sales-banners/banner.jpg";
  return (
    <div className={styles["sales-banner"]}>
      <Container>
        <Link href="/catalog/sales" className={styles["sales-banner__link"]}>
          <Image
            className={styles["sales-banner__image"]}
            alt="spring sales"
            src={banner}
            width={1000}
            height={1000}
            priority
          />
        </Link>
      </Container>
    </div>
  );
}
