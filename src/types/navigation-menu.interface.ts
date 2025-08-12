export interface INavigationMenu {
  className?: string;
  column?: boolean;
  items: {
    id: number;
    href: string;
    name: string;
    key?: "favorites" | "cart";
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
    favorites?: number;
    cart?: number;
  };
}