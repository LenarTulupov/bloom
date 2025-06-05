"use client"

import Container from "@/components/ui/container/container";
import Title from "@/components/ui/title/title";
import ReviewCarousel from "@/components/review-carousel/review-carousel";
import CarouselHeaderControls from "@/components/carousel-header-controls/carousel-header-controls";
import styles from "./reviews-section.module.scss";
import { useRef, useState } from "react";
import { reviews } from "@/constants/reviews";
import type { Swiper as SwiperType } from "swiper"

export default function ReviewsSection() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const swiperRef = useRef<SwiperType | null>(null);

  const REVIEWS_PER_PAGE = 4;
  const pages = Math.ceil(reviews.length / REVIEWS_PER_PAGE);

  const handleNext = () => {
    if (!swiperRef.current || currentPage >= pages) return;
    const targetIndex = currentPage * REVIEWS_PER_PAGE; 
    swiperRef.current.slideTo(targetIndex);
    setCurrentPage(p => p + 1);
  }
  
  const handlePrev = () => {
    if (!swiperRef.current || currentPage <= 1) return;
    const targetIndex = (currentPage - 2) * REVIEWS_PER_PAGE;
    swiperRef.current.slideTo(targetIndex);
    setCurrentPage(p => p - 1);
  }
  
  return (
    <section className={styles["reviews-section"]}>
      <Container>
        <div className={styles["reviews-section__content"]}>
          <div className={styles["reviews-section__content-header"]}>
            <Title>Reviews</Title>
            <CarouselHeaderControls 
              currentPage={currentPage} 
              pages={pages}
              onNext={handleNext}
              onPrev={handlePrev}
              isNextDisabled={currentPage === pages}
              isPrevDisabled={currentPage === 1}
            />
          </div>
          <ReviewCarousel reviews={reviews} swiperRef={swiperRef}/>
        </div>
      </Container>
    </section>
  );
}
