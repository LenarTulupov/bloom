import { ReactNode } from 'react';
import cn from 'classnames'
import styles from './dropdown-list.module.scss';

interface IDropdownList {
  children: ReactNode;
  isPortal: boolean;
}

export function DropdownList({ children, isPortal }: IDropdownList) {
  return (
    <ul className={cn(
        styles['dropdown__list'], 
        !isPortal ? styles.dropdown__list_portal : ''
      )}
    >
      { children }
    </ul>
  )
}
