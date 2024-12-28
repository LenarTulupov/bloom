import { ReactNode } from "react"
import styles from './header.module.scss';

interface IHeader {
  children: ReactNode;
}

export default function Header({ children }: IHeader) {
  return (
    <header className={styles.header}>
      <Navigation
      {children}
    </header>
  )
};
