import Link from "next/link";
import Logo from "../../ui/logo/logo";
import NavigationMenu from "@/components/navigation-menu/navigation-menu";
import HamburgerButton from "../../hamburger-button/hamburger-button";
import { navItemsLeft, navItemsRight } from "@/constants/nav-items";
import cn from "classnames";
import Container from "../../ui/container/container";
import { useEffect, useState } from "react";
import styles from "./header-body.module.scss";

export default function HeaderBody() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);
  return (
    <div
      className={cn(
        styles.header__body,
        isScrolled ? styles.header__body_scrolled : ""
      )}
    >
      <Container>
        <div className={styles["header__body-content"]}>
          <HamburgerButton
            className={styles["header__body-hamburger-button"]}
          />
          <NavigationMenu
            className={styles["header__body-navigation"]}
            items={navItemsLeft}
            isScrolled={isScrolled}
          />
          <Link href="/" className={styles["header__body-logo"]}>
            <Logo isScrolled={isScrolled}/>
          </Link>
          <NavigationMenu
            className={cn(
              styles["header__body-navigation"],
              styles["header__body-navigation_end"]
            )}
            items={navItemsRight}
            icon
            isScrolled={isScrolled}
          />
        </div>
      </Container>
    </div>
  );
}
