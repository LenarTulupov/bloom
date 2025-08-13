export interface INavigationMenu {
  className?: string;
  column?: boolean;
  items: {
    id: number;
    href: string;
    name: string;
    key?: "wishlist" | "cart";
    categories?: {
      id: number;
      href?: string;
      category: string;
      categoryItems?: {
        id: number;
        name: string;
        href: string;
      }[];
    }[];
  }[];
  icon?: boolean;
  isScrolled?: boolean;
  isDropdownOpened?: boolean;
  counters?: {
    wishlist?: number;
    cart?: number;
  };
}