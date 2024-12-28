import { ReactNode } from 'react';
import styles from './container.module.scss';

interface IContainer {
  children: ReactNode;
  className?: string;
}

export default function Container() {
  return (
    <div className={styles.container}>
      { children }
    </div>
  )
};
