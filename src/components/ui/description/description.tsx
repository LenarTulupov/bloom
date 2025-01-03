import { ReactNode } from 'react';
import cn from 'classnames';
import styles from './description.module.scss';

interface IDescription {
  children?: ReactNode;
  color?: 'white' | 'black';
  className?: string;
  size?: 'sm' | 'md';
  text?: string;
}

export default function Description({ 
  children, 
  color = 'black', 
  className, 
  size = 'sm',
  text }: IDescription) {
  return (
    <p className={cn(
      styles.description, 
      styles[color],
      className || '',
      styles[size],
      )}
    >
      { children || text }
    </p>
  )
}
