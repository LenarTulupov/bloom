import FooterAddress from "./footer-address/footer-address";
import FooterCompany from "./footer-company/footer-company";
import FooterContact from "./footer-contact/footer-contact";
import FooterLinks from "./footer-links/footer-links";
import styles from './footer-content.module.scss'

export default function FooterContent() {
  return (
    <div className={styles.footer__content}>
      <FooterCompany />
      <FooterLinks />
      <FooterAddress />
      <FooterContact />
    </div>
  );
}
