import Link from "next/link";
import Logo from "../../../ui/logo/logo";
import styles from "./sidebar-header.module.scss";

export default function SidebarHeader() {
  return (
    <header className={styles["sidebar-content__header"]}>
      <Link href="/">
        <Logo />
      </Link>
    </header>
  );
}
