import { ReactNode } from "react";
import cn from 'classnames'
import styles from "./navigation-list.module.scss";

interface INavigationList {
  children: ReactNode;
  column?: boolean;
}

export default function NavigationList({ children, column = false }: INavigationList) {
  return (
    <ul 
      className={cn(
        styles.navigation__list, 
        column ? styles.column : ''
    )}>
      {children}
    </ul>
  )
}
