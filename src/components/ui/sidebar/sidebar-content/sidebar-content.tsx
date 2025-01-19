import { ReactNode } from "react";
import cn from "classnames";
import styles from "./sidebar-content.module.scss";
import CloseButton from "../../close-button/close-button";
import { useHamburger } from "@/hooks/use-hamburger";

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
  const { handleHamburgerClick } = useHamburger();
  return (
    <div
      className={cn(
        styles["sidebar-content"],
        className || "",
        isOpened ? styles["sidebar-content_opened"] : ""
      )}
    >
      {children}
      <CloseButton onClose={handleHamburgerClick} />
    </div>
  );
}
