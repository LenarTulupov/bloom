import Link from "next/link";
import Logo from "../../logo/logo";
import NavigationMenu from "@/components/navigation-menu/navigation-menu";
import HamburgerButton from "../../hamburger-button/hamburger-button";
import { navItemsLeft, navItemsRight } from "@/constants/nav-items";
import cn from "classnames"
import styles from './header-content.module.scss';

export default function HeaderContent() {
  return (
    <div className={styles.header__content}>
      <HamburgerButton className={styles['header__content-hamburger-button']}/>
      <NavigationMenu 
        className={styles['header__content-navigation']} 
        items={navItemsLeft}
      />
      <Link href="/" className={styles['header__content-logo']}>
        <Logo/>
      </Link>
      <NavigationMenu 
        className={cn(styles['header__content-navigation'], styles['header__content-navigation-end'])} 
        items={navItemsRight}
        icon
      />
  </div>
  )
}
