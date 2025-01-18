import NavigationItem from "../navigation/navigation-list/navigation-item/navigation-item";
import NavigationList from "../navigation/navigation-list/navigation-list";
import styles from "./hamburger-menu.module.scss";

interface IHamburgerMenu {
  items: {
    id: number;
    href: string;
    name: string;
  }[];
  pathname: string;
}

export default function HamburgerMenu({ items, pathname }: IHamburgerMenu) {
  return (
    <div className={styles.hamburger__menu}>
      <NavigationList column>
        {items.map((item) => (
          <NavigationItem 
            key={item.id} 
            item={item} 
            pathname={pathname} 
            className={styles['hamburger__menu-item']}
          />
        ))}
      </NavigationList>
    </div>
  );
}
