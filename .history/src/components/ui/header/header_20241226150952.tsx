import styles from './header.module.scss';
import Navigation from "../navigation/navigation";
import Image from 'next/image';

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
            <Link
          </li>
        </ul>

      </Navigation>
    </header>
  )
};
