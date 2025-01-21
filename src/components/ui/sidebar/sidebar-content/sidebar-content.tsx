import { ReactNode } from "react";
import cn from "classnames";
import SidebarHeader from "./sidebar-header/sidebar-header";
import styles from "./sidebar-content.module.scss";

interface ISidebarContent {
  children: ReactNode;
  className?: string;
  isOpened: boolean;
}

export default function SidebarContent({
  children,
  className,
  isOpened,
}: ISidebarContent) {
  return (
    <div
      className={cn(
        styles["sidebar-content"],
        className || "",
        isOpened ? styles["sidebar-content_opened"] : ""
      )}
    >
      <SidebarHeader />
      {children}
    </div>
  );
}
