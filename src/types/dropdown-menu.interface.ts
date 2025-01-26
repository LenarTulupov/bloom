export interface IDropdownMenu {
  items: {
    id: number;
    name: string;
    href: string;
  }[];
  className?: string;
  isPortal?: boolean;
  position: { top: number; left: number; width: number; height: number;} | null;
}