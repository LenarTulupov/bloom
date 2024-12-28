import { ReactNode } from "react";
import styles from './footer.module.scss';

interface IFooter {
  children: ReactNode;
}

export default function Footer() {
  return (
    <footer className={styles.footer}/>
  )
};
