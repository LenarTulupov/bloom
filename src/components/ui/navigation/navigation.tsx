import cn from "classnames";
import { ReactNode } from "react";
import styles from "./navigation.module.scss";

interface INavigation {
  children: ReactNode;
  className?: string;
}

export function Navigation({ children, className = "" }: INavigation) {
  return (
    <nav className={cn(styles.navigation, className)}>
      { children }
    </nav>
  );
}
