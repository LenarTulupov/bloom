import { ReactNode } from "react";

interface IFooter {
  children: ReactNode;
}

export default function Footer({ children }) {
  return (
    <footer className={styles.footer}>
      { children }
    </footer>
  )
};
