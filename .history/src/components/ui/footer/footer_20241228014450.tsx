import Link from 'next/link';
import { navItems } from '@/constants/nav-items';
import Container from '../container/container';
import Logo from '../logo/logo';
import FooterSocials from './footer-socials/footer-socials';
import styles from './footer.module.scss';
import Divider from '../divider/divider';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer__company}>
          <Logo />
          <p className={styles['footer__company-description']}>
            NewBloom is your trusted partner for a smooth, secure, and joyful surrogacy journey in Georgia
          </p>
          <FooterSocials />
        </div>
        <ul className={styles['footer__company-list']}>
          {navItems.map((item) => (
            <li key={item.id}>
              <Image
                alt="dobble arrow"
                src="/icon/DobbleArrow.svg"
              />
              <Link href={item.href}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
      <Divider />
    </footer>
  )
};
