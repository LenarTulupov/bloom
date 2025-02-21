import SalesBanner from "@/components/ui/sales-banner/sales-banner";
import CatalogSection from "./catalog-section/catalog-section";
import styles from "./home.module.scss";
import CollectionsCarousel from "./collections-carousel/collections-carousel";

export default function Home() {
  const springBanner = '/sales-banners/spring-banner.jpg'
  return (
    <div className={styles.home}>
      <CollectionsCarousel/>
      <CatalogSection/>
      <SalesBanner banner={springBanner}/>
    </div>
  );
}
