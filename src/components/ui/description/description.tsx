import styles from './description.module.scss'

interface IDescr {
  children: string;
}

export default function Description({ children }: IDescr) {
  return (
    <p className={styles.description}>
      { children }
    </p>
  )
}