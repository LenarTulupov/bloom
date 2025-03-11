import { ReactNode } from "react"
import styles from './title.module.scss'
import cn from 'classnames';

interface ITitle {
  children: ReactNode;
  bold?: boolean;
  className?: string;
  color?: "white" | "black"
}

export default function Title({ children, bold = false, className, color = "black" }: ITitle) {
  return (
    <div className={cn(styles.title, styles[color], { [styles.title_bold]: bold }, className || "")}>
      {children}
    </div>
  );
}
