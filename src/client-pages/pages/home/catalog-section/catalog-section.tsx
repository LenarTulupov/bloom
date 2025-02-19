import CatalogCard from "@/components/catalog-card/catalog-card";
import Container from "@/components/ui/container/container";
import ProductsGrid from "@/components/ui/products-grid/products-grid";
import Title from "@/components/ui/title/title";
import { navItemsLeft } from "@/constants/nav-items";
import React from "react";
import styles from './catalog-section.module.scss'
import Link from "next/link";

export default function CatalogSection() {
  return (
    <section>
      <Container>
        <div className={styles['catalog-section__content']}>
          <div className={styles['catalog-section__text']}>
            <Title>Catalog</Title>
            <Link href="/catalog">
            <Title>View All</Title>
            </Link>
          </div>
          <ProductsGrid>
            {navItemsLeft.map((item) =>
              item.subItems
                ?.slice(0, 5)
                .map((subItem) => (
                  <CatalogCard
                    key={subItem.id}
                    name={subItem.name}
                    link={subItem.href}
                  />
                ))
            )}
          </ProductsGrid>
        </div>
      </Container>
    </section>
  );
}
