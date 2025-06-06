import Footer from "@/components/ui/footer/footer";
import Header from "@/components/ui/header/header";
import { ReactNode } from "react";
import styles from './layout.module.scss';

interface IPagesLayout {
  children: ReactNode;
}

export default function PagesLayout({ children }: IPagesLayout) {
  return (
    <>
      <Header />
      <div className={styles.children}>{children}
      </div>
      <Footer />
    </>
  )
};
