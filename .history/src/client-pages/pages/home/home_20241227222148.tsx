import Container from '@/components/ui/container/container';
import styles from './home.module.scss';
import Welcome from './welcome/welcome';
import About from './about/about';
import Why from './why/why';
import Team from './team/team';
import Process from './process/process';
import Blog from './blog/blog';
import Ready from './ready/ready';
import Questions from './questions/questions';

export default function Home() {
  return (
    <div className={styles.home}>
      <Container>
        <div>

          <Welcome />
          <About />
          <Why />
          <Team />
          <Process />
          <Blog />
          <Ready />
          <Questions />
        </div>
      </Container>
    </div>
  )
};
