import Divider from "../ui/divider/divider";
import Container from "../ui/container/container";
import { IDropdownPanel } from "@/types/dropdown-panel.interface";
import DropdownPanelList from "../dropdown-panel-list/dropdown-panel-list";
import styles from "./dropdown-panel.module.scss";

export default function DropdownPanel({ items }: IDropdownPanel) {
  return (
    <div className={styles["dropdown-panel"]}>
      <Divider />
      <Container>
        <DropdownPanelList items={items}/>
      </Container>
    </div>
  );
}
