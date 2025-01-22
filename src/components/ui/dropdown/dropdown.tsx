import { ReactNode } from "react";
import styles from './dropdown.module.scss';

interface IDropdown {
  children: ReactNode;
}

export function Dropdown({ children }: IDropdown) {
  return (
    <div className={styles.dropdown}>
      { children }
    </div>
  )
}
