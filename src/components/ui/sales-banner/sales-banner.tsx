import Image from "next/image";
import styles from "./sales-banner.module.scss";
import Container from "../container/container";

export default function SalesBanner() {
  const banner = "/sales-banners/spring-banner.jpg";
  return (
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
  );
}
