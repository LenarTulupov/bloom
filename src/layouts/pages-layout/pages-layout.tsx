"use client";

import Footer from "@/components/ui/footer/footer";
import Header from "@/components/ui/header/header";
import { ReactNode, useEffect } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/ui/sidebar/sidebar";
import { useHamburger } from "@/hooks/use-hamburger";
import NavigationMenu from "@/components/navigation-menu/navigation-menu";
import { navItemsLeft } from "@/constants/nav-items";
import styles from "./pages-layout.module.scss";

interface IPagesLayout {
  children: ReactNode;
}

export default function LayoutsPagesLayout({ children }: IPagesLayout) {
  const pathname = usePathname();
  const { isHamburgerOpened } = useHamburger();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <>
        <Header />
        <main className={styles.children}>{children}</main>
        <Footer />
      </>
      <>
        <Sidebar isOpened={isHamburgerOpened}>
          <NavigationMenu column items={navItemsLeft}/>
        </Sidebar>
      </>
    </>
  );
}
