import Button from "../../button/button";
import Hamburger from "../../hamburger/hamburger";
import Logo from "../../logo/logo";
import Navigation from "../../navigation/navigation";
import styles from './header-content.module.scss';

export default function HeaderContent() {
  return (
    <div className={styles.header__content}>
      <Logo className={styles['header__content-logo']}/>
      <Hamburger />
      <Navigation className={styles['header__content-navigation']}/>
      <Button 
        className={styles['header__content-button']}
        href='/contact-us' 
      >
        Contact us
      </Button>
  </div>
  )
}
