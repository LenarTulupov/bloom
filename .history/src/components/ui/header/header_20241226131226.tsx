import { ReactNode } from "react"
import styles from './header.module.scss';

interface IHeader {
  children: ReactNode;
}

export default function Header({ children }: IHeader) {
  return (
    <header>
      {children}
    </header>
  )
};
