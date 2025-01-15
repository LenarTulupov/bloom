import { ReactNode } from "react";
import styles from "./navigation-list.module.scss";

interface INavigationList {
  children: ReactNode;
}

export default function NavigationList({ children }: INavigationList) {
  return <ul className={styles.navigation__list}>{children}</ul>;
}
