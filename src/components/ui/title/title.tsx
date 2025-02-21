import { ReactNode } from "react"
import styles from './title.module.scss'
import cn from 'classnames';

interface ITitle {
  children: ReactNode;
  bold?: boolean;
  className?: string;
}

export default function Title({ children, bold = false, className }: ITitle) {
  return (
    <div className={cn(styles.title, { [styles.title_bold]: bold }, className || "")}>
      {children}
    </div>
  );
}
