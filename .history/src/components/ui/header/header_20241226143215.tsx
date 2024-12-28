import { ReactNode } from "react"
import styles from './header.module.scss';
import Navigation from "../navigation/navigation";

interface IHeader {
  children: ReactNode;
}

export default function Header() {
  return (
    <header className={styles.header}>
      <Navigation />
    </header>
  )
};
