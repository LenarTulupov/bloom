import Link from "next/link";
import cn from "classnames";
import Icon from "@/components/ui/icon/icon";
import { ICONS } from "@/constants/icons";
import useHover from "@/hooks/use-hover";
import styles from "./navigation-link.module.scss";
import DropdownMenu from "@/components/dropdown-menu/dropdown-menu";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface INavigationLink {
  link: {
    name: string;
    href: string;
    subItems?: {
      id: number;
      name: string;
      href: string;
    }[];
  };
  column?: boolean;
  dropdown?: boolean;
}

export function NavigationLink({
  link,
  column,
  dropdown,
}: INavigationLink) {
  const pathname = usePathname();
  const { href, name, subItems } = link;
  const { hover, onMouseEnter, onMouseLeave } = useHover();
  const [isDropdownOpened, setIsDropdownOpened] = useState<boolean>(false);

  const nameLink = name.slice(0, 1).toUpperCase() + name.slice(1);

  const handleDropdownOpen = () => {
    setIsDropdownOpened(p => !p);
  }
  return (
    <Link
      className={cn(
        styles.navigation__link,
        pathname === href ? styles.navigation__link_active : "",
        column ? styles.navigation__link_column : ""
      )}
      href={href.toLowerCase()}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={handleDropdownOpen}
    >
      {nameLink}
      {dropdown && subItems && (
        <Icon icon={ICONS.down} color="black" isHovered={hover} />
      )}
      { isDropdownOpened && dropdown && subItems && 
        <DropdownMenu items={subItems} /> 
      }
    </Link>
  );
}
