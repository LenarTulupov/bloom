import Link from 'next/link';
import { navItems } from '@/constants/nav-items';
import Container from '../container/container';
import styles from './footer.module.scss';
import Divider from '../divider/divider';
import Image from 'next/image';
import Title from '../title/title';
import FooterCompany from './footer-company/footer-company';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        {/* Company */}
        <FooterCompany />
        {/* Links */}
        <div className={styles['footer__company-links']}>
          <Title title='Useful Links' />
          <ul className={styles['footer__company-list']}>
            {navItems.map((item) => (
              <li key={item.id} className={styles['footer__company-item']}>
                <Link href={item.href} className={styles['footer__company-link']}>
                  <Image
                    alt="dobble arrow"
                    src="/icons/DobbleArrow.svg"
                    width={20}
                    height={20}
                  />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
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
