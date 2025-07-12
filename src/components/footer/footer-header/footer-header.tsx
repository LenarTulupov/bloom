import Icon from "@/components/icon/icon";
import Logo from "@/components/ui/logo/logo";
import { footerLinks } from "@/constants/footer-links";
import Link from "next/link";
import styles from "./footer-header.module.scss";

export default function FooterHeader() {
  const email = "support@mireshop.com";
  return (
    <header className={styles["footer-header"]}>
      <div className={styles["footer-header__content"]}>
        <Logo width={251} height={120} />
        <div className={styles["footer-header__social-icons"]}>
          {footerLinks.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={styles["footer-header__social-icon"]}
            >
              <Icon name={item.name} className={styles.icon}/>
            </Link>
          ))}
        </div>
        <div className={styles["footer-header__contacts"]}>
          <div>{email}</div>
          <button 
            className={styles["footer-header__copy-button"]}
            onClick={() => {
              navigator.clipboard.writeText(email);
              alert("Email copied");
            }}
          >
            <Icon name="copy" className={styles['copy-button-icon']}/>
          </button>
        </div>
      </div>
    </header>
  );
}
