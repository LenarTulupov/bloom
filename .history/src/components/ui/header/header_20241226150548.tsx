import styles from './header.module.scss';
import Navigation from "../navigation/navigation";

export default function Header() {
  const logo = './logo.png'
  return (
    <header className={styles.header}>
      <Navigation>
        <div>
          <Image
            alt=""
          />
        </div>

      </Navigation>
    </header>
  )
};
