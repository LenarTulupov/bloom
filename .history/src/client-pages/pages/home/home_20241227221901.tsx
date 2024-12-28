import Container from '@/components/ui/container/container';
import styles from './home.module.scss';
import Welcome from './welcome/welcome';
import About from './about/about';

export default function Home() {
  return (
    <div className={styles.home}>
        <Container>
          <Welcome/>
          <About
          <section className={styles.home__why}>

          </section>
          <section className={styles.home__team}>

          </section>
          <section className={styles.home__process}>

          </section>
          <section className={styles.home__blog}>

          </section>
          <section className={styles.home__ready}>

          </section>
          <section className={styles.home__questions}>

          </section>
        </Container>
    </div>
  )
};
