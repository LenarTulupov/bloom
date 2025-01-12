import Link from "next/link";
import Title from "@/components/ui/title/title";
import { usefulLinks } from "@/constants/useful-links";
import Icon from "@/components/ui/icon/icon";
import DobbleArrowIcon from '@icons/DobbleArrow.svg'
import styles from "./footer-links.module.scss";

export default function FooterLinks() {
  return (
    <div className={styles["footer__links"]}>
      <Title size="xs" title="Useful Links" />
      <ul className={styles["footer__links-list"]}>
        {usefulLinks.map((item) => (
          <li key={item.id} className={styles["footer__links-item"]}>
            <Link href={item.href} className={styles["footer__links-link"]}>
              <Icon icon={DobbleArrowIcon}/>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
