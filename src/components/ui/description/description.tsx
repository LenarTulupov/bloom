import { ReactNode } from 'react';
import cn from 'classnames';
import styles from './description.module.scss';

type IDescription = {
  color?: 'white' | 'black';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
} & (
  | { text: string; children?: never } // Либо text обязателен
  | { children: ReactNode; text?: never } // Либо children обязателен
);

export default function Description({ 
  children, 
  color = 'black', 
  className, 
  size = 'md',
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
