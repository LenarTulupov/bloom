import { IDropdownPanel } from "@/types/dropdown-panel.interface";
import DropdownSubitems from "../dropdown-subitems/dropdown-subitems";
import Link from "next/link";
import DropdownBanner from "../dropdown-banner/dropdown-banner";
import styles from "./dropdown-panel-list.module.scss";

export default function DropdownPanelList({
  item,
  activeCategory,
}: IDropdownPanel) {
  const showDropdownItems = item.name === activeCategory;

  if (!showDropdownItems || item.categories?.length === 0) {
    return null;
  }
  return (
    <div className={styles["dropdown-panel__wrapper"]}>
      <ul className={styles["dropdown-panel__list"]}>
        {item?.categories?.map((category) => (
          <li key={category.id} className={styles["dropdown-panel__item"]}>
            {category.href ? (
              <Link
                href={category.href}
                className={styles["dropdown-panel__item-title"]}
              >
                {category.category}
              </Link>
            ) : (
              <div className={styles["dropdown-panel__item-title"]}>
                {category.category}
              </div>
            )}
            <DropdownSubitems subitems={category.categoryItems || []} />
          </li>
        ))}
      </ul>
      <DropdownBanner />
    </div>
  );
}
