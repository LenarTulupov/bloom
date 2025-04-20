import CatalogCard from "@/components/catalog-card/catalog-card";
import Container from "@/components/ui/container/container";
import ProductsGrid from "@/components/ui/products-grid/products-grid";
import { navItemsLeft } from "@/constants/nav-items";

export default function CatalogPageClient() {
  return (
    <div>
      <Container>
        <ProductsGrid>
          {navItemsLeft.map((item) =>
            item.categories?.map((category) =>
              category.href ? (
                <CatalogCard
                  key={category.id}
                  name={category.category}
                  link={category.href}
                />
              ) : null
            )
          )}
        </ProductsGrid>
      </Container>
    </div>
  );
}
