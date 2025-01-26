import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./dropdown-transparent-zone.module.scss";

interface IDropdownTransparentZone {
  children: ReactNode;
  position: { top: number; left: number; width: number; height: number; } | null;
  isPortal?: boolean;
}

export function DropdownTransparentZone({
  children,
  position,
  isPortal,
}: IDropdownTransparentZone) {
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (isPortal) {
      setPortalTarget(document.body);
    }
  }, [isPortal]);

  const dropdownTransparentZone = (
    <div
      className={styles["dropdown-transparent-zone"]}
      style={
        position !== null
          ? { 
            top: position.top, 
            left: position.left, 
            width: position.width + 10, 
            height: position.height 
          }
          : undefined
      }
    >
      {children}
    </div>
  );

  if (isPortal && portalTarget) {
    return createPortal(dropdownTransparentZone, portalTarget);
  }
  return dropdownTransparentZone;
}
