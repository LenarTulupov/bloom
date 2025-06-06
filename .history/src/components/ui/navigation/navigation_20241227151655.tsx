'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './navigation.module.scss';
import { navItems } from '@/constants/nav-items';

export default function Navigation() {
  const pathname = usePathname();
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigation__list}>
        {navItems.map((item) => (
          <li key={item.id} className={styles.navigation__item}>
            <Link
              href={item.href.toLowerCase()}
              className={`
                ${styles.navigation__link} 
                ${pathname === item.href ? styles.navigation__link_active : ''}
              `}
            >
              {item.name.slice(0, 1).toUpperCase() + item.name.slice()}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
};
