import { ICONS } from "@/constants/icons";
import Icon from "../icon/icon";
import NavigationItem from "../navigation/navigation-list/navigation-item/navigation-item";
import NavigationList from "../navigation/navigation-list/navigation-list";
import styles from "./hamburger-menu.module.scss";

interface IHamburgerMenu {
  items: {
    id: number;
    href: string;
    name: string;
    subItems?: {
      id: number;
      name: string;
      href: string;
    }[]
  }[];
  pathname: string;
}

export default function HamburgerMenu({ items, pathname }: IHamburgerMenu) {
  return (
    <div className={styles.hamburger__menu}>
      <NavigationList column>
        {items.map((item) => (
          <div className={styles['hamburger__menu-element']} key={item.id}>
            <NavigationItem
              item={item}
              pathname={pathname}
              className={styles["hamburger__menu-link"]}
              elementClass={styles["hamburger__menu-item"]}
              />
              {item.subItems && (
                <Icon icon={ICONS.down} />
              )}
          </div>
        ))}
      </NavigationList>
    </div>
  );
}
