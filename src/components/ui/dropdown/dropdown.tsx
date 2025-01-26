import { ReactNode } from "react";
import cn from "classnames";
import styles from "./dropdown.module.scss";

interface IDropdown {
  children: ReactNode;
  className?: string;
  isPortal?: boolean;
}

export function Dropdown({
  children,
  className,
  isPortal
}: IDropdown) {

  return (
    <div 
      className={cn(
        styles.dropdown, 
        className || "", 
        isPortal ? styles.dropdown_portal : ""
      )} 
    >
      {children}
    </div>
  )
}
