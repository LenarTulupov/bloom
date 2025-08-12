export interface INavigationLink {
  link: {
    id: number;
    name: string;
    href: string;
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
  };
  column?: boolean;
  icon?: boolean;
  isScrolled?: boolean;
  counter?: number;
}