import Container from '../container/container';
import Divider from '../divider/divider';
import FooterCompany from './footer-company/footer-company';
import FooterLinks from './footer-links/footer-links';
import FooterAddress from './footer-address/footer-address';
import FooterContact from './footer-contact/footer-contact';
import styles from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <FooterCompany />
        <FooterLinks />
        <FooterAddress />
        <FooterContact />
      </Container>
      <Divider />
      <Container>
        
      </Container>
    </footer>
  )
};
