import { ReactNode } from "react"
import styles from './empty-message.module.scss';

type TypeEmptyMessage = 
  | { children: ReactNode; text?: never; className?: string }
  | { children?: never; text: string; className?: string };

export default function EmptyMessage({ children, text, className = "" }: TypeEmptyMessage) {
  return (
    <p className={`${styles['empty-message']} ${className}`}>
      { children || text}
    </p>
  )
}
