import { HTMLAttributes } from 'react';
import styles from './title.module.scss';

interface ITitle extends HTMLAttributes<HTMLHeadingElement> {
  title: string;
  className?: string;
  color: 'white' | 'black';
}

export default function Title({
  title,
  className,
  color,
  ...props }: ITitle) {
  return (
    <h1
      className={`
        ${styles.title} 
        ${className || ''}
        ${styles[color]}
      `}
      {...props}
    >
      {title}
    </h1>
  )
};
