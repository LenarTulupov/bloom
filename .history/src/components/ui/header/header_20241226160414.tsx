import styles from './header.module.scss';
import Navigation from "../navigation/navigation";
import Image from 'next/image';
import Link from 'next/link';
import { navItems } from '@/constants/nav-items';

export default function Header() {
  const logo = './logo.png'
  return (
    <header className={styles.header}>
      <Navigation>
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <Link href={item.href}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

      </Navigation>
    </header>
  )
};
