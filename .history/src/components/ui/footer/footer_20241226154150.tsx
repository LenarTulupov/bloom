import Link from 'next/link';
import styles from './footer.module.scss';
import { navItems } from '@/constants/nav-items';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul>
        {navItems.map((item))}
        <li>
          <Link>
          
          </Link>
        </li>
      </ul>
    </footer>
  )
};
