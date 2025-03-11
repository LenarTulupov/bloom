import { ReactNode } from "react";
import cn from 'classnames'
import { usePathname } from "next/navigation";
import { useAppSelector } from "@/store/hooks";
import styles from "./navigation-list.module.scss";

interface INavigationList {
  children: ReactNode;
  column?: boolean;
}

export function NavigationList({ 
  children, 
  column = false}: INavigationList) {
  const pathname = usePathname();
  const isDropdownOpened = useAppSelector(state => state.dropdownState.isDropdownOpened);
  const isScrolled = useAppSelector(state => state.scrollState.isScrolled);
  return (
    <ul 
      className={cn(
        styles.navigation__list, 
        column ? styles.column : '',
        pathname === '/' ? isScrolled ? "" : styles.navigation__list_scrolled : "",
        isDropdownOpened ? styles.navigation__list_dropdown : ""
    )}>
      {children}
    </ul>
  )
}
