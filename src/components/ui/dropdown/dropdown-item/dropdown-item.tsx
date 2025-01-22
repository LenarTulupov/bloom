import { ReactNode } from 'react';
import styles from './dropdown-item.module.scss';

interface IDropdownItem {
  children: ReactNode;
}

export function DropdownItem({ children }: IDropdownItem) {
  return (
    <li className={styles['dropdown__item']}>
      { children }
    </li>
  )
}
