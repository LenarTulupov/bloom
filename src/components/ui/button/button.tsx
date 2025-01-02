import Link from "next/link";
import { IButton } from "@/types/button.interface";
import styles from './button.module.scss';

export default function Button({ 
  link = false,
  children, 
  href, 
  color = 'purple', 
  type = 'button',
  onClick,
  className }: IButton) {
    const buttonClassName = `
        ${styles.button} 
        ${className || ''}
        ${styles[color]}
      `;

    if(href) {
      return (
        <Link 
          href={href} 
          className={buttonClassName}
        >
          { children }
        </Link>
      )
    }
  return (
    <button 
      type={type} 
      className={buttonClassName}
      onClick={onClick}
    >
        {children}
      </button>
  )
};