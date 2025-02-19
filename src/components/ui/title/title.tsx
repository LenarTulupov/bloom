import { ReactNode } from "react"
import styles from './title.module.scss'

interface ITitle {
  children: ReactNode;
}

export default function Title({ children }: ITitle) {
  return (
    <div className={styles.title}>{children}</div>
  )
}
