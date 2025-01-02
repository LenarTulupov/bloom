import { HTMLAttributes, ReactNode } from 'react';
import styles from './title.module.scss';

interface ITitle extends HTMLAttributes<HTMLHeadingElement> {
  title?: string;
  children?: ReactNode;
  className?: string;
  color?: 'white' | 'black';
  size: 'large' | 'big' | 'middle' | 'small';
  background?: boolean;
}

export default function Title({
  title,
  children,
  className,
  color = 'white',
  size,
  background = false,
  ...props }: ITitle) {
  return (
    <h1
      className={`
        ${styles.title} 
        ${className || ''}
        ${styles[color]}
        ${styles[size]}
        ${background ? styles.background : ''}
      `}
      {...props}
    >
      {title || children }
    </h1>
  )
};
