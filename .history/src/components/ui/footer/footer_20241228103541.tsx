import Container from '../container/container';
import Divider from '../divider/divider';
import Title from '../title/title';
import FooterCompany from './footer-company/footer-company';
import styles from './footer.module.scss';
import FooterLinks from './footer-links/footer-links';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <FooterCompany />
        <FooterLinks/>
        <Title title='Our Address' />
        <Title title='Contact us' />
      </Container>
      <Divider />
      <Container>
        <div className={styles.footer__privacy}>
          <div>Terms and Conditions   |   Privacy Policy </div>
          <div>© Copyright | Designed  by Ayeman | All Rights Reserved</div>
        </div>
      </Container>
    </footer>
  )
};
