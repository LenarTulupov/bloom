import { footerColumns } from "@/constants/footer-columns";
import Link from "next/link";
import styles from './footer-columns.module.scss';

export default function FooterColumns() {
  return (
    <div className={styles["footer-columns"]}>
      {footerColumns.map((columnTitle) => (
        <div className={styles["footer-columns__column"]} key={columnTitle.id}>
          <div className={styles["footer-columns__column-title"]}>{columnTitle.title}</div>
          <ul className={styles["footer-columns__column-list"]}>
            {columnTitle.subItems.map((subItem) => (
              <li key={subItem.id}>
                <Link href={subItem.href}>{subItem.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
