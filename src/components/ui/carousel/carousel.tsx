import { ReactNode, RefObject } from "react";
import styles from "./carousel.module.scss";
import { Swiper } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

interface ICarousel {
  children: ReactNode;
  autoplayDelay: number;
  handleSlideChange: (swiper: SwiperType) => void;
  swiperRef: RefObject<SwiperType | null>;
  setActiveSlideIndex: (index: number) => void;
  startProgressAnimation: () => void;
}

export default function Carousel({ 
  children, 
  handleSlideChange, 
  swiperRef, 
  setActiveSlideIndex,
  startProgressAnimation,
  autoplayDelay }: ICarousel) {

  return (
    <div className={styles.carousel}>
      <Swiper
        slidesPerView={1}
        modules={[Navigation, Autoplay]}
        loop
        navigation={{
          prevEl: null,
          nextEl: null,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setActiveSlideIndex(swiper.activeIndex);
          startProgressAnimation();
        }}
        onSlideChange={handleSlideChange}
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: false,
        }}
        allowTouchMove={false}
      >
        { children }
      </Swiper>
    </div>
  );
}
