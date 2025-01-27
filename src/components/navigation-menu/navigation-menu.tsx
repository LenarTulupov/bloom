import { navItems } from "@/constants/nav-items";
import {
  Navigation,
  NavigationItem,
  NavigationLink,
  NavigationList,
} from "../ui/navigation";
import cn from 'classnames'
import styles from './navigation-menu.module.scss';

interface INavigationMenu {
  className?: string;
  column?: boolean;
}

export default function NavigationMenu({ className, column = false }: INavigationMenu) {
  return (
    <div className={cn(styles['navigation-menu'], className || '')}>
      <Navigation>
        <NavigationList column={column}>
          {navItems.map((item) => (
            <NavigationItem key={item.id} column={column}>
              <NavigationLink link={item} column={column}/>
            </NavigationItem>
          ))}
        </NavigationList>
      </Navigation>
    </div>
  );
}
