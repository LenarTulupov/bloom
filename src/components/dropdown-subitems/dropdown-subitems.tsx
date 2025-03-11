import Link from "next/link";
import cn from "classnames";
import styles from './dropdown-subitems.module.scss';

interface IDropdownSubitems {
  items: {
    id: number;
    href: string;
    name: string;
  }[];
}

export default function DropdownSubitems({ items }: IDropdownSubitems) {
  return (
    <ul
    className={cn(
      styles["dropdown-panel__list-subitems"],
      styles.subitems
    )}
  >
    {items?.map((categoryItem) => (
      <li className={styles.subitems__item} key={categoryItem.id}>
        <Link
          href={categoryItem.href}
          className={styles.subitems__link}
        >
          {categoryItem.name}
        </Link>
      </li>
    ))}
  </ul>
  )
}
