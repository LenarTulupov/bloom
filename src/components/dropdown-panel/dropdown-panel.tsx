import Divider from "../ui/divider/divider";
import Container from "../ui/container/container";
import { IDropdownPanel } from "@/types/dropdown-panel.interface";
import DropdownPanelList from "../dropdown-panel-list/dropdown-panel-list";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import styles from "./dropdown-panel.module.scss";

export default function DropdownPanel({
  item,
  activeCategory,
}: IDropdownPanel) {
  const [dropdownRoot, setDropdownRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setDropdownRoot(document.body);
  }, []);

  if(!dropdownRoot) {
    return null;
  }

  return createPortal(
    <div className={styles["dropdown-panel"]}>
      <Divider />
      <Container>
        <DropdownPanelList item={item} activeCategory={activeCategory} />
      </Container>
    </div>,
    dropdownRoot
  );
}
