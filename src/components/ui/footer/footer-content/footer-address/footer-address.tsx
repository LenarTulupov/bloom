import Title from "@/components/ui/title/title";
import FooterAddressItem from "./footer-address-item/footer-address-item";
import { footerAddressItems } from "@/constants/footer-address-items";
import styles from './footer-address.module.scss';

export default function FooterAddress() {
  return (
    <div className={styles['footer-address']}>
      <Title size="xs" title="Our Address" />
      <ul className={styles['footer-address__list']}>
        {footerAddressItems.map((item) => (
          <FooterAddressItem 
            key={item.id} 
            icon={item.icon} 
            description={item.description}
          />
        ))}
      </ul>
    </div>
  );
}
