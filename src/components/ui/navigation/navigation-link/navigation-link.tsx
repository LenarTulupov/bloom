import Link from "next/link";
import cn from "classnames";
import { INavigationLink } from "@/types/navigation-link.interface";
import NavigationLinkText from "../navigation-text/navigation-link-text";
import DropdownMenu from "@/components/dropdown-menu/dropdown-menu";
import { useEffect, useRef, useState } from "react";
import styles from "./navigation-link.module.scss";

export function NavigationLink({ link, column }: INavigationLink) {
  const { href, name, subItems } = link;
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [dropdownPosition, setDropdownPosition] = useState<{ top: number; left: number} | null>(null);
  const linkRef = useRef<HTMLAnchorElement | null>(null);
  
  const handleDropdownOpen = () => {
    if (column) {
      setIsDropdownOpen((p) => !p);
    }
  };

  const onMouseEnter = () => {
    if (!column) {
      setIsDropdownOpen(true);
    }
  };

  const onMouseLeave = () => {
    if (!column) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    if(isDropdownOpen && linkRef.current) {
      const rect = linkRef.current.getBoundingClientRect();
      setDropdownPosition({ top: rect.top, left: rect.left})
    }
  }, [isDropdownOpen]);
  return (
    <Link
      className={cn(styles.navigation__link)}
      href={href}
      onClick={handleDropdownOpen}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ref={linkRef}
    >
      <NavigationLinkText name={name} hasDropdown={!!subItems} />
      {isDropdownOpen && subItems && (
        <DropdownMenu 
          items={subItems} 
          isPortal={!column}
          position={dropdownPosition}
        />
      )}
    </Link>
  );
}
