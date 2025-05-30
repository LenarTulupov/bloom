import styles from './header.module.scss';
import Navigation from "../navigation/navigation";
import Link from 'next/link';
import { navItems } from '@/constants/nav-items';
import Logo from '../logo/logo';
import Button from '../button/button';
import Container from '../container/container';

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header__content}>
          <Logo />
          <Navigation/>
          <Button href='/contact-us'>Contact us</Button>
        </div>
      </Container>
    </header>
  )
};
