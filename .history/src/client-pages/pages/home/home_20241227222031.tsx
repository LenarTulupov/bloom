import Container from '@/components/ui/container/container';
import styles from './home.module.scss';
import Welcome from './welcome/welcome';
import About from './about/about';
import Why from './why/why';
import Team from './team/team';
import Process from './process/process';
import Blog from './blog/blog';

export default function Home() {
  return (
    <div className={styles.home}>
        <Container>
          <Welcome/>
          <About/>
          <Why/>
          <Team/>
          <Process/>
          <Blog/>
          <section className={styles.home__ready}>

          </section>
          <section className={styles.home__questions}>

          </section>
        </Container>
    </div>
  )
};
