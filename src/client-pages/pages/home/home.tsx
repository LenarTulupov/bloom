import SalesBanner from "@/components/sales-banner/sales-banner";
import CatalogSection from "./catalog-section/catalog-section";
import CollectionsCarousel from "./collections-carousel/collections-carousel";
import NewInSection from "./new-in-section/new-in-section";
import TrendingSection from "./trending-section/trending-section";
import BlogSection from "./blog-section/blog-section";
import ReviewsSection from "./reviews-section/reviews-section";
import WhySection from "./why-section/why-section";

export default function Home() {
  return (
    <>
      <CollectionsCarousel/>
      <CatalogSection/>
      <NewInSection/>
      <TrendingSection/>  
      <SalesBanner/>
      <BlogSection/>
      <ReviewsSection/>
      <WhySection/>
    </>
  );
}