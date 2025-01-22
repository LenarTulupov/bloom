import Link from "next/link";
import Button from "../../button/button";
import Hamburger from "../../hamburger/hamburger";
import Logo from "../../logo/logo";
import styles from './header-content.module.scss';
import NavigationMenu from "@/components/navigation-menu/navigation-menu";

export default function HeaderContent() {
  return (
    <div className={styles.header__content}>
      <Link href="/">
        <Logo className={styles['header__content-logo']}/>
      </Link>
      <Hamburger />
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
