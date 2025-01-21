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
  className?: string;
  elementClass?: string;
}

export default function NavigationItem({ item, pathname, className, elementClass }: INavigationItem) {
  const { href, name } = item;

  return (
    <li className={cn(styles.navigation__item, elementClass || '')}>
      <Link
        href={href.toLowerCase()}
        className={cn(
          styles.navigation__link, 
          pathname === href ? styles.navigation__link_active : "",
          className || ''
        )}
      >
        {name.slice(0, 1).toUpperCase() + name.slice(1)}
      </Link>
    </li>
  );
}
