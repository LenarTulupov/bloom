import Link from "next/link";
import cn from "classnames";
import styles from './dropdown-subitems.module.scss';

interface IDropdownSubitems {
  subitems: {
    id: number;
    href: string;
    name: string;
  }[];
}

export default function DropdownSubitems({ subitems }: IDropdownSubitems) {
  return (
    <ul
    className={cn(
      styles["dropdown-panel__list-subitems"],
      styles.subitems
    )}
  >
    {subitems.map((subitem) => (
      <li className={styles.subitems__item} key={subitem.id}>
        <Link
          href={subitem.href}
          className={styles.subitems__link}
        >
          {subitem.name}
        </Link>
      </li>
    ))}
  </ul>
  )
}
