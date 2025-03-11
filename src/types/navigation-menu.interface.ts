export interface INavigationMenu {
  className?: string;
  column?: boolean;
  items: {
    id: number;
    href: string;
    name: string;
    subitems?: {
      id: number;
      href: string;
      name: string;
    }[]
  }[];
  icon?: boolean;
  isScrolled?: boolean;
  isDropdownOpened?: boolean;
}