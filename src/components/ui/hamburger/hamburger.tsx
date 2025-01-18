import HamburgerButton from './hamburger-button/hamburger-button';
import styles from './hamburger.module.scss';

export default function Hamburger() {
  return (
    <div className={styles.hamburger}>
      <HamburgerButton />
    </div>
  );
}
