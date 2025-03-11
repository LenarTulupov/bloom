import Link from "next/link";
import cn from "classnames";
import { INavigationLink } from "@/types/navigation-link.interface";
import NavigationLinkText from "../navigation-text/navigation-link-text";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import DropdownPanel from "@/components/dropdown-panel/dropdown-panel";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setIsDropdownOpened } from "@/store/features/dropdown-slice";
import styles from "./navigation-link.module.scss";

export function NavigationLink({ 
  link, 
  column, 
  icon = false}: INavigationLink) {
  const { href, name, categories } = link;
  const dispatch = useAppDispatch();
  const isDropdownOpened = useAppSelector(state => state.dropdownState.isDropdownOpened)
  const isScrolled = useAppSelector(state => state.scrollState.isScrolled);
  const pathname = usePathname();
  const [dropdownPosition, setDropdownPosition] = useState<{
    top: number;
    left: number;
    width: number;
    height: number;
  } | null>(null);
  const linkRef = useRef<HTMLAnchorElement | null>(null);

  const handleDropdownOpen = () => {
    if (column) {
      dispatch(setIsDropdownOpened(!isDropdownOpened));
    }
  };

  const onMouseEnter = () => {
    if (!column) {
      dispatch(setIsDropdownOpened(true));
    }
  };

  const onMouseLeave = () => {
    if (!column) {
      dispatch(setIsDropdownOpened(false));
    }
  };

  useEffect(() => {
    if (isDropdownOpened && linkRef.current) {
      const rect = linkRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom,
        left: rect.left,
        width: rect.width,
        height: rect.height,
      });
    }
  }, [isDropdownOpened]);
  return (
    <Link
      className={cn(
        styles.navigation__link, 
        pathname === href ? styles.navigation__link_active : '',
        column ? styles.navigation__link_column : '',
        !isScrolled ? styles.navigation__link_scrolled : ""
      )}
      href={href}
      onClick={handleDropdownOpen}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ref={linkRef}
    >
      <NavigationLinkText 
        name={name} 
        hasDropdown={!!categories} 
        icon={icon}
      />
      {isDropdownOpened && categories && (
        <DropdownPanel items={categories}/>
      )}
    </Link>
  );
}
