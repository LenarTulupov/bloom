import { ReactNode } from 'react';
import styles from './item-title.module.scss';
import cn from "classnames"

interface IItemTitle {
  title?: string;
  size?: "xs" | "sm";
  className?: string;
  children?: ReactNode;
  uppercase?: boolean;
}

export default function ItemTitle({ title, size = "xs", uppercase = true, className = "", children }: IItemTitle ) {
  return (
    <div className={cn(
      styles["item-title"], 
      styles[size], 
      {[styles.uppercase]: uppercase}, 
      className
    )}>
      {title || children}
    </div>
  )
}
