import { navItems } from "@/constants/nav-items";
import { Navigation, NavigationItem, NavigationLink, NavigationList } from "../ui/navigation";

interface INavigationMenu {
  className?: string;
}

export default function NavigationMenu({ className }: INavigationMenu) {
  return (
    <Navigation className={className || ''}>
      <NavigationList>
        {navItems.map((item) => (
          <NavigationItem key={item.id}>
            <NavigationLink link={item} dropdown/>
        </NavigationItem>
        ))}
      </NavigationList>
    </Navigation>
  );
}
