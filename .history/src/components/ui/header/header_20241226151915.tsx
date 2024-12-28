import styles from './header.module.scss';
import Navigation from "../navigation/navigation";
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const logo = './logo.png'
  return (
    <header className={styles.header}>
      <Navigation>
        <div>
          <Image
            alt="logo"
            src={logo}
          />
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

      </Navigation>
    </header>
  )
};
