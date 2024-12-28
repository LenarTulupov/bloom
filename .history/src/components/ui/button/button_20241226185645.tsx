import Link from "next/link";
import { ReactNode } from "react";
import styles from './button.module.scss';

interface IButton {
  children: ReactNode;
  href: string;
  color: 'purple' | 'white' | 'yellow';
  className?: string;
}

export default function Button({ 
  children, 
  href, 
  color = 'purple', 
  className }: IButton) {
  return (
    <Link
      className={`
        ${styles.button} 
        ${className || ''}
        ${styles[]}
      `}
      href={href}
      color={color}
    >
      {children}
    </Link>
  )
};
