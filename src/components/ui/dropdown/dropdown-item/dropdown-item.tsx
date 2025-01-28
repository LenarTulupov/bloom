import { ReactNode } from 'react';
import cn from 'classnames'
import styles from './dropdown-item.module.scss';

interface IDropdownItem {
  children: ReactNode;
  isPortal?: boolean;
}

export function DropdownItem({ children, isPortal = false }: IDropdownItem) {
  return (
    <li className={cn(
        styles.dropdown__item,
        !isPortal ? styles.dropdown__item_portal : ''
      )}
    >
      { children }
    </li>
  )
}
