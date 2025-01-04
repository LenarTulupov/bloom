import Link from "next/link";
import Title from "@/components/ui/title/title";
import { usefulLinks } from "@/constants/useful-links";
import ArrowIcon from "@/components/ui/arrow-icon/arrow-icon";
import styles from "./footer-links.module.scss";

export default function FooterLinks() {
  return (
    <div className={styles["footer__links"]}>
      <Title size="xs" title="Useful Links" />
      <ul className={styles["footer__links-list"]}>
        {usefulLinks.map((item) => (
          <li key={item.id} className={styles["footer__links-item"]}>
            <Link
              href={item.href}
              className={styles["footer__links-link"]}
            >
              <ArrowIcon color="white"/>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
