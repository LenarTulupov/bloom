import CatalogSection from "./catalog-section/catalog-section";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <div className={styles.home}>
      <CatalogSection/>
    </div>
  );
}
