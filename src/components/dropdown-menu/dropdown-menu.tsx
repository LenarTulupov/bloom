import {
  Dropdown,
  DropdownItem,
  DropdownLink,
  DropdownList,
  DropdownTransparentZone,
} from "../ui/dropdown";
import { IDropdownMenu } from "@/types/dropdown-menu.interface";

export default function DropdownMenu({
  items,
  className,
  isPortal = false,
  position,
}: IDropdownMenu) {
  console.log(items)
  const dropdownContent = (
    <Dropdown className={className || ""} isPortal={isPortal}>
      <DropdownList isPortal={isPortal}>
        {items.map((item) => (
          <DropdownItem key={item.id} isPortal={isPortal}>
            <DropdownLink link={item} />
          </DropdownItem>
        ))}
      </DropdownList>
    </Dropdown>
  );
  return isPortal ? (
    <DropdownTransparentZone position={position} isPortal={isPortal}>
      {dropdownContent}
    </DropdownTransparentZone>
  ) : (
    dropdownContent
  );
}
