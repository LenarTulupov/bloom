import Container from '@/components/ui/container/container';
import styles from './ready.module.scss';
import Title from '@/components/ui/title/title';
import Description from '@/components/ui/description/description';
import Button from '@/components/ui/button/button';

export default function Ready() {
  return (
    <section className={styles['ready-section']}>
      <Container>
        <div className={styles['ready-section__text']}>
          <Title color='white'>Ready to start your journey?</Title>
          <Description color='white'>Don’t wait and sign up now!</Description>
        </div>
        <div className={styles['ready-section__buttons']}>
          <Button>Become a parents</Button>
          <Button color='accent'>Become a surrogate</Button>
        </div>
      </Container>
    </section>
  )
};
