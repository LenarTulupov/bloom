import Link from 'next/link';
import styles from './footer.module.scss';
import { navItems } from '@/constants/nav-items';
import Container from '../container/container';
import Logo from '../logo/logo';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer__company}>
          <Logo />
          <p className={styles['footer__company-description']}>
          NewBloom is your trusted partner for a smooth, secure, and joyful surrogacy journey in Georgia
          </p>
        </div>
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <Link href={item.href}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  )
};
