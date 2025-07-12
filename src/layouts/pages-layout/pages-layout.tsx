"use client";

import Header from "@/components/header/header";
import { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/sidebar/sidebar";
import { useHamburger } from "@/hooks/use-hamburger";
import NavigationMenu from "@/components/navigation-menu/navigation-menu";
import { navItemsLeft } from "@/constants/nav-items";
import Footer from "@/components/footer/footer";
import styles from "./pages-layout.module.scss";
import cn from "classnames";
import CookieBanner from "@/components/cookie-banner/cookie-banner";

interface IPagesLayout {
  children: ReactNode;
  footer?: boolean;
}

export default function LayoutsPagesLayout({ children, footer = true }: IPagesLayout) {
  const pathname = usePathname();
  const { isHamburgerOpened } = useHamburger();
  const [isCookieChosen, setIsCookieChosen] = useState<boolean>(false);

  const handleCookie = () => {
    setIsCookieChosen(true);
    localStorage.setItem("cookieConsent", "true");
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if(consent === "true") {
      setIsCookieChosen(true);
    }
  }, []);
  return (
    <>
      <Header />
      <main
        className={cn(
          styles.children,
          pathname === "/" || "/not-found" ? styles.children_home : ""
        )}
      >
        {children}
      </main>
      {footer ? (
        <Footer />
      ) : null }
      <Sidebar isOpened={isHamburgerOpened}>
        <NavigationMenu column items={navItemsLeft} />
      </Sidebar>
      {!isCookieChosen && (
        <CookieBanner onClick={handleCookie}/>
      )}
    </>
  );
}
