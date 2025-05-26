"use client";

import Carousel from "@/components/ui/carousel/carousel";
import CarouselSlide from "@/components/ui/carousel/carousel-slide/carousel-slide";
import CarouselBanner from "@/components/ui/carousel/carousel-banner/carousel-banner";
import TransparentButton from "@/components/ui/buttons/transparent-button/transparent-button";
import CarouselInfo from "@/components/ui/carousel/carousel-info/carousel-info";
import { slides } from "@/constants/carousel-slides";
import { useEffect, useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { SwiperSlide } from "swiper/react";
import Container from "@/components/ui/container/container";
import CarouselText from "@/components/carousel-text/carousel-text";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./collections-carousel.module.scss";
import CarouselControls from "@/components/ui/carousel/carousel-controls/carousel-controls";

export default function CollectionsCarousel() {
  const swiperRef = useRef<SwiperType | null>(null);
  // Pagination
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const progressInterval = useRef<NodeJS.Timeout | null>(null);
  const autoplayDelay = 5000;

  const startProgressAnimation = () => {
    if (progressInterval.current) {
      clearInterval(progressInterval.current);
    }

    setProgress(0);
    const startTime = Date.now();

    progressInterval.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const calculatedProgress = Math.min((elapsed / autoplayDelay) * 100, 100);
      setProgress(calculatedProgress);

      if (calculatedProgress >= 100) {
        clearInterval(progressInterval.current as NodeJS.Timeout);
      }
    }, 16);
  };

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveSlideIndex(swiper.activeIndex);
    startProgressAnimation();
  };

  const goToSlide = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  const handleNext = () => {
    if (!swiperRef.current) return;
    const swiper = swiperRef.current;
    const isLast = swiper.activeIndex === slides.length - 1;
    swiper.slideTo(isLast ? 0 : swiper.activeIndex + 1);
  };

  const handlePrev = () => {
    if (!swiperRef.current) return;
    const swiper = swiperRef.current;
    const isFirst = swiper.activeIndex === 0;
    swiper.slideTo(isFirst ? slides.length - 1 : swiper.activeIndex - 1);
  };

  useEffect(() => {
    return () => {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    };
  }, []);

  useEffect(() => {
    startProgressAnimation();
  }, []);
  return (
    <section className={styles["collections-carousel"]}>
      <Carousel
        handleSlideChange={handleSlideChange}
        swiperRef={swiperRef}
        setActiveSlideIndex={setActiveSlideIndex}
        startProgressAnimation={startProgressAnimation}
        autoplayDelay={autoplayDelay}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <CarouselSlide>
              <CarouselBanner banner={slide.banner}>
                <CarouselInfo className={styles["collections-carousel__info"]}>
                  <Container>
                    <div className={styles["collections-carousel__info-inner"]}>
                      <CarouselText
                        title={slide.title}
                        description={slide.description}
                        slidesLength={slides.length}
                        goToSlide={goToSlide}
                        activeSlideIndex={activeSlideIndex}
                        progress={progress}
                      />
                      <TransparentButton text="Shop Now" href={slide.href} />
                    </div>
                  </Container>
                </CarouselInfo>
              </CarouselBanner>
            </CarouselSlide>
          </SwiperSlide>
        ))}
        <CarouselControls onNext={handleNext} onPrev={handlePrev}/>
      </Carousel>
    </section>
  );
}
