export interface IHamburgerMenu {
  items: {
    id: number;
    href: string;
    name: string;
    subItems?: {
      id: number;
      name: string;
      href: string;
    }[]
  }[];
}