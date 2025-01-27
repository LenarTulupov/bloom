import cn from "classnames";
import styles from "./navigation-item.module.scss";
import { ReactNode } from "react";

interface INavigationItem {
  children: ReactNode;
  column?: boolean;
}

export function NavigationItem({
  children,
  column = false
}: INavigationItem) {
  return (
    <li
      className={cn(
        styles.navigation__item,
        column ? styles.navigation__item_column : ''
      )}
    >
      { children }
    </li>
  );
}
