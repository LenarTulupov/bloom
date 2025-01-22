import { ReactNode } from 'react';
import styles from './dropdown-list.module.scss';

interface IDropdownList {
  children: ReactNode;
}

export function DropdownList({ children }: IDropdownList) {
  return (
    <ul className={styles['dropdown__list']}>
      { children }
    </ul>
  )
}
