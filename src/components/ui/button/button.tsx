import { ButtonHTMLAttributes, ReactNode, RefObject } from 'react';
import cn from 'classnames';  
import styles from './button.module.scss';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  color?: "primary";
  ref?: RefObject<HTMLButtonElement>;
}

export default function Button({ 
  children, 
  className, 
  color = "primary", 
  ...props }: IButton) {
  return (
    <button 
      className={cn(
        styles.button, 
        styles[color], 
        className
      )} 
      {...props}
    >
      { children }
    </button>
  )
}