import { ReactNode } from 'react';
import cn from "classnames";
import styles from './background-color.module.scss';

interface IBackgroundColor {
  className?: string;
  children: ReactNode;
  color?: "primary" | "gray";
}

export default function BackgroundColor({ className, children, color = 'primary' }: IBackgroundColor) {
  return (
    <div className={cn(
      styles['background-color'],
      styles[color],
      className || ''
    )}>
      { children }
    </div>
  )
}
