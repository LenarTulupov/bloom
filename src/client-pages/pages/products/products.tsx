"use client";

import { useProducts } from "@/hooks/use-products";
import Container from "@/components/ui/container/container";
import ProductCard from "@/components/product-card/product-card";
import styles from "./products.module.scss";
import ProductsGrid from "@/components/ui/products-grid/products-grid";

export default function Products() {
  const { products } = useProducts();
  return (
    <div className={styles["products"]}>
      <Container>
        <ProductsGrid>
          {products.map((product) => (
            <ProductCard key={product.id} productData={product} />
          ))}
        </ProductsGrid>
      </Container>
    </div>
  );
}
