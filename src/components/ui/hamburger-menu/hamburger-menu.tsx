import { IHamburgerMenu } from "@/types/hamburger-menu.interface";
import styles from "./hamburger-menu.module.scss";
import {
  Navigation,
  NavigationItem,
  NavigationLink,
  NavigationList,
} from "../navigation";

export default function HamburgerMenu({ items }: IHamburgerMenu) {
  return (
    <div className={styles.hamburger__menu}>
      <Navigation>
        <NavigationList column>
          {items.map((item) => (
            <NavigationItem key={item.id}>
              <NavigationLink link={item} dropdown column/>
            </NavigationItem>
          ))}
        </NavigationList>
      </Navigation>
    </div>
  );
}
