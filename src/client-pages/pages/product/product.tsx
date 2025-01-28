"use client";

import Container from "@/components/ui/container/container";
import { useProduct } from "@/hooks/use-product";
import ProductContent from "./product-content/product-content";
import styles from "./product.module.scss";

export default function Product() {
  const { product, loading } = useProduct();

  if (loading) return <div>Product is loading</div>;

  if (!product) return null;

  return (
    <div className={styles.product}>
      <Container>
        <ProductContent product={product}/>
      </Container>
    </div>
  );
}
