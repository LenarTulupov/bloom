import Image from "next/image";
import styles from "./sales-banner.module.scss";
import Container from "../ui/container/container";
import Link from "next/link";

interface ISalesBanner {
  banner: string;
}

export default function SalesBanner({ banner }: ISalesBanner) {
  return (
    <Link href="/catalog/sales">
      <Container>
        <div className={styles["sales-banner"]}>
          <Image
            className={styles["sales-banner__img"]}
            alt="spring sales"
            src={banner}
            width={1000}
            height={1000}
            priority
          />
        </div>
      </Container>
    </Link>
  );
}
