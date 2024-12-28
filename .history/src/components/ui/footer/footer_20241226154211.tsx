import Link from 'next/link';
import styles from './footer.module.scss';
import { navItems } from '@/constants/nav-items';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul>
        {navItems.map((item) => (
          <li key={item.id}>
            <Link href={item.href}>

            </Link>
          </li>
        ))}
      </ul>
    </footer>
  )
};
