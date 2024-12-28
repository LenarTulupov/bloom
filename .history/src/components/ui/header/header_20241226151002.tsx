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
          <li>
            <Link>
            </Link>
          </li>
        </ul>

      </Navigation>
    </header>
  )
};
