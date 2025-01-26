import { ReactNode, useEffect, useState } from "react";
import cn from "classnames";
import styles from "./dropdown.module.scss";
import { createPortal } from "react-dom";

interface IDropdown {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  isPortal?: boolean;
  position: { top: number; left: number } | null;
}

export function Dropdown({
  children,
  className,
  isPortal = false,
  position
}: IDropdown) {
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (isPortal) {
      setPortalTarget(document.body);
    }
  }, [isPortal]);

  const dropdown = (
    <div 
      className={cn(
        styles.dropdown, 
        className || "", 
        isPortal ? styles.dropdown_portal : ''
      )} 
      style={
        position !== null 
          ? {top: position.top + 60, left: position.left + 10}
          : undefined
      }
    >
      {children}
    </div>
  );

  if (isPortal && portalTarget) {
    return createPortal(dropdown, portalTarget);
  }
  return dropdown;
}
