import { ElementType, HTMLAttributes, ReactNode } from 'react';
import styles from './title.module.scss';
import { ITitle } from '@/types/title.interface';

export default function Title({
  title,
  children,
  className,
  color = 'black',
  size = 'md',
  background = false,
  h = 2,
  ...props }: ITitle) {
    const Tag: ElementType = `h${h}`
  return (
    <Tag
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
    </Tag>
  )
};
