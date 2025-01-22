import cn from "classnames";
import { INavigationItem } from "@/types/navigation-item.interface";
import styles from "./navigation-item.module.scss";

export function NavigationItem({
  column = false,
  children
}: INavigationItem) {
  return (
    <li
      className={cn(
        styles.navigation__item,
        column ? styles["navigation__item_column"] : ""
      )}
    >
      { children }
    </li>
  );
}
