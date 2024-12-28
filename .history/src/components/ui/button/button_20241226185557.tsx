import Link from "next/link";
import { ReactNode } from "react";

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
      className={`${styles.button} `}
      href={href}
      color={color}
    >
      {children}
    </Link>
  )
};
