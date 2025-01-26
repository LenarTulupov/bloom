import {
  Dropdown,
  DropdownItem,
  DropdownLink,
  DropdownList,
} from "../ui/dropdown";
import cn from "classnames";
import { IDropdownMenu } from "@/types/dropdown-menu.interface";
import styles from './dropdown-menu.module.scss';

export default function DropdownMenu({
  items,
  className,
  isPortal = false,
  position
}: IDropdownMenu) {
  return (
    <Dropdown
      className={cn(
        className || "",
        isPortal ? styles.dropdown_portal : ''
      )}
      isPortal={isPortal}
      position={position}
    >
      <DropdownList>
        {items.map((item) => (
          <DropdownItem key={item.id}>
            <DropdownLink link={item} />
          </DropdownItem>
        ))}
      </DropdownList>
    </Dropdown>
  );
}
