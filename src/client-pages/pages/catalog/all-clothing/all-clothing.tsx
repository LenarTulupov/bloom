"use client"

import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import ProductCard from "@/components/product-card/product-card";
import Container from "@/components/ui/container/container";
import ProductsGrid from "@/components/ui/products-grid/products-grid";
import { fetchProducts } from "@/store/features/products-slice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect } from "react";

export default function AllClothing() {
  const { products, loading, error } = useAppSelector(state => state.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if(loading) {
    return <div>Loading...</div>
  }
  
  if(error) {
    return <div>Error: {error}</div>
  }
  return (
    <>
      <Container>
        <Breadcrumbs/>
        <ProductsGrid>
          {products.map((product) => (
            <ProductCard key={product.id} product={product}/>
          ))}
        </ProductsGrid>
      </Container>
    </>
  )
}
