import Link from "next/link";
import cn from 'classnames'
import styles from "./navigation-item.module.scss";

interface INavigationItem {
  item: {
    id: number;
    href: string;
    name: string;
  };
  pathname: string;
}

export default function NavigationItem({ item, pathname }: INavigationItem) {
  const { href, name } = item;

  return (
    <li className={styles.navigation__item}>
      <Link
        href={href.toLowerCase()}
        className={cn(
          styles.navigation__link, 
          pathname === href ? styles.navigation__link_active : ""
        )}
      >
        {name.slice(0, 1).toUpperCase() + name.slice(1)}
      </Link>
    </li>
  );
}
