import { HTMLAttributes } from 'react';
import styles from './title.module.scss';

interface ITitle extends HTMLAttributes<HTMLHeadingElement> {
  title: string;
  className?: string;
  color: 'white' | 'black'
}

export default function Title({
  title,
  className,
  ...props }: ITitle) {
  return (
    <h1
      className={`${styles.title} ${className || ''}`}
      {...props}
    >
      {title}
    </h1>
  )
};
