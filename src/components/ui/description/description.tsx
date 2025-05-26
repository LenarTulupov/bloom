import styles from './description.module.scss'

interface IDescr {
  children: string;
  color?: "primary" | "white";
  className?: string;
  size?: "xs" | "sm";
}

export default function Description({ children, color = "primary", size = "xs", className = "" }: IDescr) {
  return (
    <p className={`${styles.description} ${styles[color]} ${styles[size]} ${className}`}>
      { children }
    </p>
  )
}