"use client";

import CarouselHeader from "@/components/carousel-header/carousel-header";
import ProductCard from "@/components/product-card/product-card";
import Container from "@/components/ui/container/container";
import ProductsGrid from "@/components/ui/products-grid/products-grid";
import { fetchProducts } from "@/store/features/products-slice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect } from "react";
import styles from './trending-section.module.scss';

export default function TrendingSection() {
  const { products, loading, error } = useAppSelector(
    (state) => state.products
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if(loading) return <div>Loading...</div>
  if(error) return <div>Error: {error}</div>
  return (
    <section className={styles["trending-section"]}>
      <Container>
        <CarouselHeader title="Trending Now" />
        <ProductsGrid className={styles["trending-section__products"]}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductsGrid>
      </Container>
    </section>
  );
}
