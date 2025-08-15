"use client";

import Container from "@/components/ui/container/container";
import Title from "@/components/ui/title/title";
import ProductsGrid from "@/components/ui/products-grid/products-grid";
import ProductCard from "@/components/product-card/product-card";
import { useAppSelector } from "@/store/hooks";
import { IWishlist } from "@/types/wishlist.interface";
import EmptyMessage from "@/components/ui/empty-message/empty-message";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import styles from "./wishlist-section.module.scss";

export default function WishlistSection() {
  const wishlist = useAppSelector(
    (state: { wishlistState: IWishlist }) => state.wishlistState.wishlist
  );

  return (
    <section>
      <Container>
        <div className={styles["wishlist-section__content"]}>
          <Breadcrumbs/>
          <Title uppercase bold>Wishlist</Title>
          {wishlist.length === 0 ? (
            <EmptyMessage className={styles['empty-message']}>Your wishlist is empty.</EmptyMessage>
          ) : (
            <ProductsGrid>
              {wishlist.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </ProductsGrid>
          )}
        </div>
      </Container>
    </section>
  );
}
