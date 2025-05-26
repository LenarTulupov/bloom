"use client";

import Container from "@/components/ui/container/container";
import React, { useMemo, useRef, useState } from "react";
import styles from "./catalog-section.module.scss";
import CarouselHeader from "@/components/carousel-header/carousel-header";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { navItemsLeft } from "@/constants/nav-items";
import CatalogCard from "@/components/catalog-card/catalog-card";
import { chunkArray } from "@/utils/chunk-array";
import type { Swiper as SwiperType } from 'swiper';
import { Navigation } from "swiper/modules";

interface ICategory {
  id: number;
  category: string;
  href: string;
}

export default function CatalogSection() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const productsPerPage = 5;
  const allProducts = navItemsLeft
  .flatMap(item => item.categories ?? []).length;
  const allPages = Math.ceil(allProducts / productsPerPage);

  const categoryChunks = useMemo(() => {
    const categories: ICategory[] = navItemsLeft[0]?.categories ?? [];
    return chunkArray(categories, 5);
  }, []); 

  const handleNext = () => {
    if(!swiperRef.current) return;
    if(currentPage < allPages) {
      const nextPage = currentPage + 1;
      swiperRef.current.slideTo(nextPage - 1);
      setCurrentPage(nextPage);
    }
  }

  const handlePrev = () => {
    if(!swiperRef.current) return;
    if(currentPage > 1) {
      const prevPage = currentPage - 1;
      swiperRef.current.slideTo(prevPage - 1);
      setCurrentPage(prevPage);
    }
  }

  return (
    <section className={styles["catalog-section"]}>
      <Container>
        <div className={styles["catalog-section__content"]}>
          <CarouselHeader 
            title="Catalog"
            uppercase
            bold
            size="xs"
            allPages={allPages} 
            currentPage={currentPage}
            onNext={handleNext} 
            onPrev={handlePrev} 
          />
          <Swiper
            slidesPerView={1}
            spaceBetween={24}
            modules={[Navigation]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className={styles["swiper"]}
          >
            {categoryChunks.map((chunk, index) => (
              <SwiperSlide key={index} className={styles.slide}>
                {chunk.map((category) => (
                  <CatalogCard
                    key={category.id}
                    name={category.category}
                    href={category.href}
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
