export interface INavigationLink {
  link: {
    name: string;
    href: string;
    categories?: {
      id: number;
      name: string;
      href: string;
    }[];
  }
  column?: boolean;
  icon?: boolean;
  isScrolled?: boolean;
}