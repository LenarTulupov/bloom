import Link from "next/link";
import cn from "classnames";
import { INavigationLink } from "@/types/navigation-link.interface";
import NavigationLinkText from "../navigation-text/navigation-link-text";
import { usePathname } from "next/navigation";
import styles from "./navigation-link.module.scss";

export function NavigationLink({ 
  link, 
  column, 
  icon = false,
  counter }: INavigationLink) {
  const { href, name, categories } = link;
  const pathname = usePathname();
  const hasDropdown = Boolean(categories && categories.length > 0);
  return (
    <Link
      className={cn(
        styles.navigation__link, 
        pathname === href ? styles.navigation__link_active : '',
        column ? styles.navigation__link_column : '',
      )}
      href={href}
    >
      <NavigationLinkText 
        name={name} 
        hasDropdown={hasDropdown} 
        icon={icon}
        counter={counter}
      />
    </Link>
  );
}
