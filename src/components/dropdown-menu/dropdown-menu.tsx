import {
  Dropdown,
  DropdownItem,
  DropdownLink,
  DropdownList,
  DropdownTransparentZone,
} from "../ui/dropdown";
import cn from "classnames";
import { IDropdownMenu } from "@/types/dropdown-menu.interface";

export default function DropdownMenu({
  items,
  className,
  isPortal = false,
  position,
}: IDropdownMenu) {
  return (
    <DropdownTransparentZone position={position} isPortal={isPortal}>
      <Dropdown
        className={cn(className || "")}
        isPortal={isPortal}
      >
        <DropdownList>
          {items.map((item) => (
            <DropdownItem key={item.id}>
              <DropdownLink link={item} />
            </DropdownItem>
          ))}
        </DropdownList>
      </Dropdown>
    </DropdownTransparentZone>
  );
}
