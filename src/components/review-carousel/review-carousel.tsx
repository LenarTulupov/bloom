"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Review from "../review/review";
import { reviews } from "@/constants/reviews";

export default function ReviewCarousel() {
  return (
    <Swiper slidesPerView={3.5} spaceBetween={24}>
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <Review review={review} />
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
