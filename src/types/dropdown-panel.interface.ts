export interface IDropdownPanel {
  items: {
    id: number;
    category: string;
    categoryItems: {
      id: number;
      href: string;
      name: string;
    }[];
  }[];
}