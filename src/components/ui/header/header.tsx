import Container from '../container/container';
import HeaderContent from './header-content/header-content';
import styles from './header.module.scss';

export default function Header() {

  return (
    <header className={styles.header}>
      <Container className={styles.header__container}>
        <HeaderContent/>
      </Container>
    </header>
  )
};