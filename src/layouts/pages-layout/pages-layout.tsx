'use client'

import Footer from "@/components/ui/footer/footer";
import Header from "@/components/ui/header/header";
import styles from "./pages-layout.module.scss";
import { ReactNode, useEffect } from "react";
import { usePathname } from "next/navigation";

interface IPagesLayout {
  children: ReactNode;
}

export default function LayoutsPagesLayout({ children }: IPagesLayout) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])
  return (
    <>
      <Header />
      <main className={styles.children}>{children}</main>
      <Footer />
    </>
  );
}
