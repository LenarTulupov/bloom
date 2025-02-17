"use client";

import Container from "@/components/ui/container/container";
import ProductCard from "@/components/product-card/product-card";
import ProductsGrid from "@/components/ui/products-grid/products-grid";
import styles from "./products.module.scss";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect } from "react";
import { fetchProducts } from "@/store/features/products-slice";

export default function Products() {
  const dispatch = useAppDispatch();
  const { products, loading } = useAppSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  
  return (
    <div className={styles["products"]}>
      <Container>
        <ProductsGrid>
          {isLoading ? (
            Array.from({length: 10}).map((_, index))
            <ProductSkeleton key={index}/>
          ) : (
            {products.map((product) => (
              <ProductCard key={product.id} data={product} />
            ))}
          )}
        </ProductsGrid>
      </Container>
    </div>
  );
}
