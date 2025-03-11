import Link from "next/link";
import styles from "./footer-bottom.module.scss";

export default function FooterBottom() {
  return (
    <footer className={styles["footer-bottom"]}>
      <p>© 2021–2025 MIRÉ. All rights reserved.</p>
      <div>
        <Link href="/privacy-policy">Privacy policy</Link>
        <Link href="/cookie-policy">Cookie policy</Link>
      </div>
    </footer>
  );
}
