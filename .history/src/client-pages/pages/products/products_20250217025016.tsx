"use client";

import Container from "@/components/ui/container/container";
import ProductCard from "@/components/product-card/product-card";
import ProductsGrid from "@/components/ui/products-grid/products-grid";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect } from "react";
import { fetchProducts } from "@/store/features/products-slice";
import ProductSkeleton from "@/components/ui/product-skeleton/product-skeleton";
import styles from "./products.module.scss";

export default function Products() {
  const dispatch = useAppDispatch();
  const { products, loading, error } = useAppSelector(state => state.products);
  
  loading = false
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if(error) {
    return <div>Error: {error}</div>
  }

  return (
    <div className={styles["products"]}>
      <Container>
        <ProductsGrid>
          {loading ? (
            Array.from({ length: 10 }).map((_, index) => (
              <ProductSkeleton key={index} />
            ))
          ) : (
            products && products.length > 0 ? (
              products.map((product) => (
                <ProductCard key={product.id} data={product} />
              ))
            ) : (
              <div>No products available</div>
            )
          )}
        </ProductsGrid>
      </Container>
    </div>
  );
}
