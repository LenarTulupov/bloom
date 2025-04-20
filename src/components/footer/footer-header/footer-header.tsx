import Icon from "@/components/icon/icon";
import Logo from "@/components/ui/logo/logo";
import { footerLinks } from "@/constants/footer-links";
import Link from "next/link";
import styles from "./footer-header.module.scss";

export default function FooterHeader() {
  return (
    <header>
      <div>
        <Logo />
      </div>
      <div className={styles["footer-header__social-icons"]}>
        {footerLinks.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={styles["footer-header__social-icon"]}
          >
            <Icon name={item.name} />
          </Link>
        ))}
      </div>
    </header>
  );
}
