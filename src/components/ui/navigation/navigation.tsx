import { usePathname } from 'next/navigation';
import { navItems } from '@/constants/nav-items';
import NavigationList from './navigation-list/navigation-list';
import NavigationItem from './navigation-list/navigation-item/navigation-item';
import styles from './navigation.module.scss';

export default function Navigation() {
  const pathname = usePathname();
  return (
    <nav className={styles.navigation}>
      <NavigationList>
        {navItems.map((item) => (
          <NavigationItem key={item.id} item={item} pathname={pathname}/>
        ))}
      </NavigationList>
    </nav>
  )
};
