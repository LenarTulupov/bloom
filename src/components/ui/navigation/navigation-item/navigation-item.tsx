import cn from "classnames";
import styles from "./navigation-item.module.scss";
import { ReactNode } from "react";

interface INavigationItem {
  children: ReactNode;
}

export function NavigationItem({
  children,
}: INavigationItem) {
  return (
    <li
      className={cn(
        styles.navigation__item,
      )}
    >
      { children }
    </li>
  );
}
