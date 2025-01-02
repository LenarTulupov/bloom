import Logo from "@/components/ui/logo/logo";
import styles from "./footer-company.module.scss";
import FooterSocials from "./footer-socials/footer-socials";

export default function FooterCompany() {
  return (
    <div className={styles.footer__company}>
      <Logo />
      <p className={styles["footer__company-description"]}>
        NewBloom is your trusted partner for a smooth, secure, and joyful
        surrogacy journey in Georgia
      </p>
      <FooterSocials />
    </div>
  );
}
