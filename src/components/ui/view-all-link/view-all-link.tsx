import Link from "next/link";
import styles from './view-all-link.module.scss';

interface IViewAllLink {
  href: string;
  text: string;
}

export default function ViewAllLink({ href, text }: IViewAllLink) {
  return (
    <Link className={styles["view-all-link"]} href={href}>
      { text }
    </Link>
  )
}
