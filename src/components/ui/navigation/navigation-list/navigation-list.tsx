import { ReactNode } from "react";
import cn from 'classnames'
import styles from "./navigation-list.module.scss";

interface INavigationList {
  children: ReactNode;
  column?: boolean;
  isScrolled?: boolean;
}

export function NavigationList({ children, column = false, isScrolled = false }: INavigationList) {
  return (
    <ul 
      className={cn(
        styles.navigation__list, 
        column ? styles.column : '',
        isScrolled ? "" : styles.navigation__list_scrolled 
    )}>
      {children}
    </ul>
  )
}
