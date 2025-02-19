import HeaderBody from "./header-body/header-body";
import HeaderTop from "./header-top/header-top";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <HeaderTop />
      <HeaderBody />
    </header>
  );
}
