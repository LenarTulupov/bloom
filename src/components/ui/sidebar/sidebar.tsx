import { ReactNode, useEffect, useState } from "react";
import styles from "./sidebar.module.scss";
import { createPortal } from "react-dom";
import Overlay from "../overlay/overlay";
import SidebarContent from "./sidebar-content/sidebar-content";

interface ISidebar {
  children: ReactNode;
  isOpened: boolean;
}

export default function Sidebar({ children, isOpened }: ISidebar) {
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(isOpened);
  const [animate, setAnimate] = useState<boolean>(false);

  useEffect(() => {
    setPortalTarget(document.body);
  }, []);

  useEffect(() => {
    if (isOpened) {
      setIsVisible(true);
      setTimeout(() => setAnimate(true), 10);
    } else {
      setAnimate(false);
      const timeout = setTimeout(() => setIsVisible(false), 10);
      return () => clearTimeout(timeout);
    }
  }, [isOpened]);

  if (!portalTarget || !isVisible) return null;

  return createPortal(
    <div className={styles.sidebar}>
      <Overlay isOpened={isOpened} />
      <SidebarContent isOpened={animate}>
        {children}
      </SidebarContent>
    </div>,
    portalTarget
  );
}
