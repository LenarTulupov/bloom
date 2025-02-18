export interface INavigationLink {
  link: {
    name: string;
    href: string;
    subItems?: {
      id: number;
      name: string;
      href: string;
    }[];
  }
  column?: boolean;
  icon?: boolean;
}