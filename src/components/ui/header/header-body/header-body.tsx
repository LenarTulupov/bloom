import Link from "next/link";
import Logo from "../../logo/logo";
import NavigationMenu from "@/components/navigation-menu/navigation-menu";
import HamburgerButton from "../../hamburger-button/hamburger-button";
import { navItemsLeft, navItemsRight } from "@/constants/nav-items";
import cn from "classnames";
import Container from "../../container/container";
import styles from "./header-body.module.scss";

export default function HeaderBody() {
  return (
    <div className={styles.header__body}>
      <Container>
        <div className={styles['header__body-content']}>
          <HamburgerButton
            className={styles["header__body-hamburger-button"]}
          />
          <NavigationMenu
            className={styles["header__body-navigation"]}
            items={navItemsLeft}
          />
          <Link href="/" className={styles["header__body-logo"]}>
            <Logo />
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
