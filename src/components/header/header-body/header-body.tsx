import Link from "next/link";
import Logo from "../../ui/logo/logo";
import NavigationMenu from "@/components/navigation-menu/navigation-menu";
import HamburgerButton from "../../hamburger-button/hamburger-button";
import { navItemsLeft, navItemsRight } from "@/constants/nav-items";
import cn from "classnames";
import Container from "../../ui/container/container";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setIsScrolled } from "@/store/features/scroll-slice";
import styles from "./header-body.module.scss";

export default function HeaderBody() {
  const isScrolled = useAppSelector(state => state.scrollState.isScrolled);
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const isDropdownOpened = useAppSelector(state => state.dropdownState.isDropdownOpened);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        dispatch(setIsScrolled(true));
      } else {
        dispatch(setIsScrolled(false));
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch]);
  return (
    <div
      className={cn(
        styles.header__body,
        isScrolled ? styles.header__body_scrolled : "",
        isDropdownOpened ? styles.header__body_dropdown : ""
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
          />
          <Link href="/" className={styles["header__body-logo"]}>
            <Logo
              color={pathname === "/" ? "white" : "black"}
            />
          </Link>
          <NavigationMenu
            className={cn(
              styles["header__body-navigation"],
              styles["header__body-navigation_end"]
            )}
            items={navItemsRight}
            icon
          />
        </div>
      </Container>
    </div>
  );
}
