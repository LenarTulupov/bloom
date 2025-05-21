import SalesBanner from "@/components/sales-banner/sales-banner";
import CatalogSection from "./catalog-section/catalog-section";
import CollectionsCarousel from "./collections-carousel/collections-carousel";
import styles from "./home.module.scss";

export default function Home() {
  const banner = '/sales-banners/spring-banner.jpg'
  return (
    <div className={styles.home}>
      <CollectionsCarousel/>
      <CatalogSection/>
      <SalesBanner banner={banner}/>
    </div>
  );
}