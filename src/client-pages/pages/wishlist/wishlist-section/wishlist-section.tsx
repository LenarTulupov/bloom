"use client";

import Container from "@/components/ui/container/container";
import Title from "@/components/ui/title/title";
import ProductsGrid from "@/components/ui/products-grid/products-grid";
import ProductCard from "@/components/product-card/product-card";
import { useAppSelector } from "@/store/hooks";
import styles from "./wishlist-section.module.scss";
import { IWishlist } from "@/types/wishlist.interface";

export default function WishlistSection() {
  const wishlist = useAppSelector(
    (state: { wishlistState: IWishlist }) => state.wishlistState.wishlist
  );

  return (
    <section>
      <Container>
        <div className={styles["wishlist-section__content"]}>
          <Title uppercase>Wishlist</Title>
          {wishlist.length === 0 ? (
            <p>Вы пока что не добавили продукты в желаемое</p>
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
