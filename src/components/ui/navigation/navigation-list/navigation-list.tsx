import { ReactNode } from "react";
import cn from 'classnames'
import styles from "./navigation-list.module.scss";
import { usePathname } from "next/navigation";

interface INavigationList {
  children: ReactNode;
  column?: boolean;
  isScrolled?: boolean;
}

export function NavigationList({ children, column = false, isScrolled = false }: INavigationList) {
  const pathname = usePathname();
  return (
    <ul 
      className={cn(
        styles.navigation__list, 
        column ? styles.column : '',
        pathname === '/' ? isScrolled ? "" : styles.navigation__list_scrolled : ""
    )}>
      {children}
    </ul>
  )
}
