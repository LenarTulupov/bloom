import Link from "next/link";
import Button from "../../button/button";
import Logo from "../../logo/logo";
import NavigationMenu from "@/components/navigation-menu/navigation-menu";
import HamburgerButton from "../../hamburger-button/hamburger-button";
import styles from './header-content.module.scss';

export default function HeaderContent() {
  return (
    <div className={styles.header__content}>
      <Link href="/">
        <Logo className={styles['header__content-logo']}/>
      </Link>
      <HamburgerButton className={styles['header__content-hamburger-button']}/>
      <NavigationMenu className={styles['header__content-navigation']}/>
      <Button 
        className={styles['header__content-button']}
        href='/contact-us' 
      >
        Contact us
      </Button>
  </div>
  )
}
