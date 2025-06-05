"use client";

import Container from "@/components/ui/container/container";
import React, { useMemo, useRef, useState } from "react";
import styles from "./catalog-section.module.scss";
import CarouselHeader from "@/components/carousel-header/carousel-header";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { navItemsLeft } from "@/constants/nav-items";
import CatalogCard from "@/components/catalog-card/catalog-card";
import { chunkArray } from "@/utils/chunk-array";
import type { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";

interface ICategory {
  id: number;
  category: string;
  href: string;
}

export default function CatalogSection() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const categoryChunks = useMemo(() => {
    const categories: ICategory[] = navItemsLeft[0]?.categories ?? [];
    return chunkArray(categories, 5);  
  }, []);

  const allPages = categoryChunks.length;

  const handleNext = () => {
    if (!swiperRef.current || currentPage >= allPages) return;
    swiperRef.current.slideTo(currentPage); 
    setCurrentPage(p => p + 1);
  };

  const handlePrev = () => {
    if (!swiperRef.current || currentPage <= 1) return;
    swiperRef.current.slideTo(currentPage - 2);
    setCurrentPage(p => p - 1);
  };

  return (
    <section className={styles["catalog-section"]}>
      <Container>
        <div className={styles["catalog-section__content"]}>
          <CarouselHeader
            title="Catalog"
            uppercase
            bold
            pages={allPages}
            currentPage={currentPage}
            onNext={handleNext}
            onPrev={handlePrev}
            isNextDisabled={currentPage === allPages}
            isPrevDisabled={currentPage === 1}
          />

          <Swiper
            slidesPerView={1}
            spaceBetween={24}
            modules={[Navigation]}
            onSwiper={swiper => (swiperRef.current = swiper)}
            className={styles.swiper}
          >
            {categoryChunks.map((chunk, idx) => (
              <SwiperSlide key={idx} className={styles.slide}>
                {chunk.map(cat => (
                  <CatalogCard
                    key={cat.id}
                    name={cat.category}
                    href={cat.href}
                  />
                ))}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
}
