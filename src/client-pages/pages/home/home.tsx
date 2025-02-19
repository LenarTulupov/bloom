import SalesBanner from "@/components/ui/sales-banner/sales-banner";
import CatalogSection from "./catalog-section/catalog-section";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <div className={styles.home}>
      <CatalogSection/>
      <div className={styles.home__sales}>

      <SalesBanner/>
      </div>
    </div>
  );
}
