"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Review from "../review/review";
import { RefObject } from "react";
import type {Swiper as SwiperType} from "swiper"

interface IReviews {
  reviews: {
    id: number;
    name: string;
    date: string;
    comment: string;
    link: string;
    avatar: string;
  }[];
  swiperRef: RefObject<SwiperType | null>
}

export default function ReviewCarousel({ reviews, swiperRef }: IReviews) {

  return (
    <Swiper 
      slidesPerView={3.5} 
      spaceBetween={24}
      onSwiper={swiper => (swiperRef.current = swiper)}
    >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <Review review={review} />
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
