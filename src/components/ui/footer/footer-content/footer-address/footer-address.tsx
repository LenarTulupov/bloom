import Title from "@/components/ui/title/title";
import Image from "next/image";
import styles from './footer-address.module.scss';

export default function FooterAddress() {
  return (
    <div className={styles['footer-address']}>
      <Title size="xs" title="Our Address" />
      <ul className={styles['footer-address__list']}>
        <li className={styles['footer-address__item']}>
          <Image alt="location" src="/icons/location.svg" width={24} height={24}/>
          <p className={styles['footer-address__item-text']}>
            Old Westbury 256, New York 11201, United States
          </p>
        </li>
        <li className={styles['footer-address__item']}>
          <Image alt="phone" src="/icons/Phone.svg" width={24} height={24}/>
          <p className={styles['footer-address__item-text']}>
            +995598785151
          </p>
        </li>
        <li className={styles['footer-address__item']}>
          <Image alt="mail" src="/icons/mail.svg" width={24} height={24}/>
          <p className={styles['footer-address__item-text']}>
            newbloomagency@gmail.com
          </p>
        </li>
      </ul>
    </div>
  );
}
