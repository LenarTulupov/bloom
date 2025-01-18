import { usePathname } from 'next/navigation';
import { navItems } from '@/constants/nav-items';
import NavigationList from './navigation-list/navigation-list';
import NavigationItem from './navigation-list/navigation-item/navigation-item';
import cn from 'classnames'
import styles from './navigation.module.scss';

interface INavigation {
  className?: string;
}

export default function Navigation({ className }: INavigation) {
  const pathname = usePathname();
  return (
    <nav className={cn(
      styles.navigation,
      className || ''
    )}>
      <NavigationList>
        {navItems.map((item) => (
          <NavigationItem key={item.id} item={item} pathname={pathname}/>
        ))}
      </NavigationList>
    </nav>
  )
};
