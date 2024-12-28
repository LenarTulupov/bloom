import styles from './header.module.scss';
import Navigation from "../navigation/navigation";
import Link from 'next/link';
import { navItems } from '@/constants/nav-items';
import Logo from '../logo/logo';

export default function Header() {
  return (
    <header className={styles.header}>
      <Navigation>
        <Logo/>
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
