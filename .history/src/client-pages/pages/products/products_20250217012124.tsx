"use client";

// import { useProducts } from "@/hooks/use-products";
import Container from "@/components/ui/container/container";
import ProductCard from "@/components/product-card/product-card";
import ProductsGrid from "@/components/ui/products-grid/products-grid";
import styles from "./products.module.scss";

export default function Products() {
  // const { products } = useProducts();
  return (
    <div className={styles["products"]}>
      <Container>
        <ProductsGrid>
          {products.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </ProductsGrid>
      </Container>
    </div>
  );
}
