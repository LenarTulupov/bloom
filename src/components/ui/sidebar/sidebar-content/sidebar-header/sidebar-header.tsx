import Link from "next/link";
import Logo from "../../../logo/logo";
import CloseButton from "../../../close-button/close-button";
import { useHamburger } from "@/hooks/use-hamburger";
import styles from "./sidebar-header.module.scss";

export default function SidebarHeader() {
  const { handleHamburgerClick } = useHamburger();
  return (
    <header className={styles["sidebar-content__header"]}>
      <Link href="/">
        <Logo />
      </Link>
      <CloseButton onClose={handleHamburgerClick} />
    </header>
  );
}
