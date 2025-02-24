import {
  Navigation,
  NavigationItem,
  NavigationLink,
  NavigationList,
} from "../ui/navigation";
import cn from 'classnames'
import { INavigationMenu } from "@/types/navigation-menu.interface";
import styles from './navigation-menu.module.scss';

export default function NavigationMenu({ 
  className, 
  column = false, 
  items, 
  icon = false,
  isScrolled = false }: INavigationMenu) {
  return (
    <div className={cn(styles['navigation-menu'], className || '')}>
      <Navigation>
        <NavigationList column={column} isScrolled={isScrolled}>
          {items.map((item) => (
            <NavigationItem key={item.id} column={column}>
              <NavigationLink link={item} column={column} icon={icon} isScrolled={isScrolled}/>
            </NavigationItem>
          ))}
        </NavigationList>
      </Navigation>
    </div>
  );
}
