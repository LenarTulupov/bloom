"use client";

import CarouselHeader from "@/components/carousel-header/carousel-header";
import Container from "@/components/ui/container/container";
import styles from "./new-in-section.module.scss";
import { useEffect, useRef, useState } from "react";
import ProductCard from "@/components/product-card/product-card";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchProducts } from "@/store/features/products-slice";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

export default function NewInSection() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const swiperRef = useRef<SwiperType | null>(null);
  const { products, loading, error } = useAppSelector(
    (state) => state.products
  );
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
    <section className={styles["new-in-section"]}>
      <Container>
        <div className={styles["new-in-section__content"]}>
          <CarouselHeader
            title="new in"
            currentPage={currentPage}
            pages={pages}
            onNext={handleNext}
            onPrev={handlePrev}
            isNextDisabled={currentPage === pages}
            isPrevDisabled={currentPage === 1}
          />
          <Swiper
            slidesPerView={4}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className={styles["new-in-section__content-swiper"]}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
}
