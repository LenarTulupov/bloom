import styles from './header.module.scss';
import Navigation from "../navigation/navigation";

export default function Header() {
  return (
    <header className={styles.header}>
      <Navigation>
        <div>
          <Image src/>
        </div>

      </Navigation>
    </header>
  )
};
