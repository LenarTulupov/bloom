import { ReactNode } from 'react';
import cn from 'classnames'
import styles from './container.module.scss';

interface IContainer {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className }: IContainer) {
  return (
    <div className={cn(styles.container, className || '')}>
      {children}
    </div>
  )
};
