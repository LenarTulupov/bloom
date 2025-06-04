"use client";

import CarouselHeader from "@/components/carousel-header/carousel-header";
import ProductCard from "@/components/product-card/product-card";
import Container from "@/components/ui/container/container";
import { fetchProducts } from "@/store/features/products-slice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect, useRef, useState } from "react";
import styles from "./trending-section.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

export default function TrendingSection() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { products, loading, error } = useAppSelector(
    (state) => state.products
  );
  const swiperRef = useRef<SwiperType | null>(null);
  const dispatch = useAppDispatch();

  const ITEMS_PER_PAGE = 4;

  const pages = Math.ceil(products.length / ITEMS_PER_PAGE);

  const handleNext = () => {
    if (!swiperRef.current || currentPage >= pages) return;
    const targetIndex = currentPage * ITEMS_PER_PAGE;
    swiperRef.current.slideTo(targetIndex);
    setCurrentPage((p) => p + 1);
  };

  const handlePrev = () => {
    if (!swiperRef.current || currentPage <= 1) return;
    const targetIndex = (currentPage - 2) * ITEMS_PER_PAGE;
    swiperRef.current.slideTo(targetIndex);
    setCurrentPage((p) => p - 1);
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <section className={styles["trending-section"]}>
      <Container>
        <CarouselHeader
          title="Trending Now"
          currentPage={currentPage}
          pages={pages}
          onNext={handleNext}
          onPrev={handlePrev}
        />
         <Swiper
            slidesPerView={4}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className={styles["trending-section__swiper"]}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
      </Container>
    </section>
  );
}
