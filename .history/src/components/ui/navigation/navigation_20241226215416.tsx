'use client'

import styles from './navigation.module.scss';
import { navItems } from '@/constants/nav-items';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigation__list}>
        {navItems.map((item) => (
          <li key={item.id} className={styles.navigation__item}>
            <Link 
              href={item.href} 
              className={`${styles.navigation__link} `}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
};
