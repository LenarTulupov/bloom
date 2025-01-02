import { ReactNode } from 'react';
import styles from './text.module.scss';

interface IText {
  children: ReactNode;
  className?: string;
  color?: "white" | "black";
}

export default function Text({ children, className, color = "black" }: IText) {
  return (
    <div className={`${styles.text} ${className || ''} ${styles[color]}`}>
      { children }
    </div>
  )
}
