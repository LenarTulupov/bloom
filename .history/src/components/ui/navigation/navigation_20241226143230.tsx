import { ReactNode } from 'react';
import styles from './navigation.module.scss';

interface INavigation {
  children: ReactNode;
}

export default function Navigation() {
  return (
    <nav className={styles.navigation}/>
  )
};
