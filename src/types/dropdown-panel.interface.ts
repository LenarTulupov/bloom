export interface IDropdownPanel {
  item: {
    id: number;
    name: string;
    href?: string;
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
  },
  activeCategory: string | null;
};