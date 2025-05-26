import Container from "@/components/ui/container/container";
import Title from "@/components/ui/title/title";
import CarouselControls from "@/components/carousel-controls/carousel-controls";
import PageIndicator from "@/components/ui/page-indicator/page-indicator";
import ReviewCarousel from "@/components/review-carousel/review-carousel";
import styles from "./reviews-section.module.scss";

export default function ReviewsSection() {
  return (
    <section className={styles["reviews-section"]}>
      <Container>
        <div className={styles["reviews-section__content"]}>
          <div className={styles["reviews-section__content-header"]}>
            <Title>Reviews</Title>
            <div>
              <PageIndicator currentPage={1} pages={1} />
              <CarouselControls />
            </div>
          </div>
          <ReviewCarousel/>
        </div>
      </Container>
    </section>
  );
}
