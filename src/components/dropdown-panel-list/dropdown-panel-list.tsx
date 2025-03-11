import { IDropdownPanel } from "@/types/dropdown-panel.interface";
import DropdownSubitems from "../dropdown-subitems/dropdown-subitems";
import DropdownBanner from "../dropdown-banner/dropdown-banner";
import styles from './dropdown-panel-list.module.scss';

export default function DropdownPanelList({ items }: IDropdownPanel) {
  return (
    <ul className={styles["dropdown-panel__list"]}>
      {items.map((item) => (
        <li key={item.id} className={styles["dropdown-panel__item"]}>
          <div className={styles["dropdown-panel__item-title"]}>{item.category}</div>
          <DropdownSubitems items={item.categoryItems} />
        </li>
      ))}
      <DropdownBanner />
    </ul>
  );
}
