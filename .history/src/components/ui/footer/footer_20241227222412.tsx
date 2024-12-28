import Link from 'next/link';
import styles from './footer.module.scss';
import { navItems } from '@/constants/nav-items';
import Container from '../container/container';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>

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
