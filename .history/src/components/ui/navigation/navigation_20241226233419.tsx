'use client'

import { navItems } from '@/constants/nav-items';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './navigation.module.scss';

export default function Navigation() {
  const navItemsUpper = navItems.filter((item) => item.)at(1);
  const pathname = usePathname();
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigation__list}>
        {navItemsUpper.map((item) => (
          <li key={item.id} className={styles.navigation__item}>
            <Link
              href={item.href}
              className={`
                ${styles.navigation__link} 
                ${pathname === item.href ? styles.navigation__link_active : ''}
              `}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
};
