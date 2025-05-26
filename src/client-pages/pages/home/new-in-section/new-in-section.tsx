"use client"

import CarouselHeader from "@/components/carousel-header/carousel-header";
import Container from "@/components/ui/container/container";
import styles from './new-in-section.module.scss';
import { useEffect } from "react";
import ProductsGrid from "@/components/ui/products-grid/products-grid";
import ProductCard from "@/components/product-card/product-card";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchProducts } from "@/store/features/products-slice";

export default function NewInSection() {
  // const [currentPage, setCurrentPage] = useState<number>(1);
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
    <section className={styles["new-in-section"]}>
      <Container>
        <div className={styles["new-in-section__content"]}>
          <CarouselHeader title="new in" currentPage={1}/>
          <ProductsGrid className={styles["new-in-section__content-products"]}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product}/>
            ))}
          </ProductsGrid>
        </div>
      </Container>
    </section>
  );
}
