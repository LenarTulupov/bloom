import Link from 'next/link';
import { navItems } from '@/constants/nav-items';
import Container from '../container/container';
import Divider from '../divider/divider';
import Image from 'next/image';
import Title from '../title/title';
import FooterCompany from './footer-company/footer-company';
import styles from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        {/* Company */}
        <FooterCompany />
        {/* Links */}
        
        {/* Address */}
        <Title title='Our Address' />
        {/* Contact us */}
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
