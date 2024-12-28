import { ReactNode } from 'react';
import styles from './navigation.module.scss';
import { navItems } from '@/constants/nav-items';
import Link from 'next/link';

export default function Navigation({ children }: INavigation) {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigation__list}>
        {navItems.map((item) => (
          <li key={item.id} className={styles.navigation__item}>
            <Link href={item.href} className={styles.navigation__link}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
};
