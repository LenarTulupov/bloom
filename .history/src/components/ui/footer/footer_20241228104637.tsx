import Container from '../container/container';
import Divider from '../divider/divider';
import FooterCompany from './footer-company/footer-company';
import FooterLinks from './footer-links/footer-links';
import FooterAddress from './footer-address/footer-address';
import FooterContact from './footer-contact/footer-contact';
import styles from './footer.module.scss';
import FooterPrivacy from './footer-privacy/footer-privacy';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer__content}>
          <FooterCompany />
          <FooterLinks />
          <FooterAddress />
          <FooterContact />
        </div>
      </Container>
      <Divider />
      <Container>
        <FooterPrivacy />
      </Container>
    </footer>
  )
};
