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
            item.subItems?.map((subItem) => (
                <CatalogCard key={subItem.id} name={subItem.name} link={subItem.href} />
            ))
          )}
        </ProductsGrid>
      </Container>
    </div>
  );
}
