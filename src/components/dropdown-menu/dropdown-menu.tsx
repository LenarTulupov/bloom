import { Dropdown, DropdownItem, DropdownLink, DropdownList } from "../ui/dropdown";

interface IDropdownMenu {
  items: {
    id: number;
    name: string;
    href: string;
  }[]
}

export default function DropdownMenu({ items }: IDropdownMenu) {
  return (
    <Dropdown>
      <DropdownList>
        {items.map((item) => (
          <DropdownItem key={item.id}>
            <DropdownLink link={item}/>
          </DropdownItem>
        ))}
      </DropdownList>
    </Dropdown>
  )
}
