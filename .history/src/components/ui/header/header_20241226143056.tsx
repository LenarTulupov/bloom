import { ReactNode } from "react"
import styles from './header.module.scss';
import Navigation from "../navigation/navigation";

interface IHeader {
  children: ReactNode;
}

export default function Header({ children }: IHeader) {
  return (
    <header className={styles.header}>
      <Navigation>
        {children}
      </Navigation>
    </header>
  )
};
