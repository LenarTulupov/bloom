import { ElementType, HTMLAttributes, ReactNode } from 'react';
import styles from './title.module.scss';

interface ITitle extends HTMLAttributes<HTMLHeadingElement> {
  title?: string;
  children?: ReactNode;
  className?: string;
  color?: 'white' | 'black';
  size: 'large' | 'big' | 'middle' | 'small';
  background?: boolean;
  h?: 1 | 2 | 3 | 4 | 5 | 6;
}

export default function Title({
  title,
  children,
  className,
  color = 'black',
  size,
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
