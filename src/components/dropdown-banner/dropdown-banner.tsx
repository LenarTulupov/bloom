import Image from "next/image";
import Link from "next/link";
import styles from './dropdown-banner.module.scss';

export default function DropdownBanner() {
  return (
    <Link href="/catalog">
      <Image className={styles["dropdown-banner"]}
        alt="dropdown catalog banner"
        src="/dropdown-banners/dropdown-catalog.jpg"
        width={320}
        height={250}
        priority
      />
    </Link>
  );
}
