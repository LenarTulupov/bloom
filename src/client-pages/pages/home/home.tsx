import SalesBanner from "@/components/sales-banner/sales-banner";
import CatalogSection from "./catalog-section/catalog-section";
import CollectionsCarousel from "./collections-carousel/collections-carousel";
import styles from "./home.module.scss";
import NewInSection from "./new-in-section/new-in-section";
import TrendingSection from "./trending-section/trending-section";

export default function Home() {
  const banner = '/sales-banners/banner.jpg'
  return (
    <div className={styles.home}>
      <CollectionsCarousel/>
      <CatalogSection/>
      <NewInSection/>
      <TrendingSection/>  
      <SalesBanner banner={banner}/>
    </div>
  );
}