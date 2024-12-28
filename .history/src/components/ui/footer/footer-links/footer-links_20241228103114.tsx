import { navItems } from '@/constants/nav-items';
import styles from './footer-links.module.scss';

export default function FooterLinks() {
  return (
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
  )
};
