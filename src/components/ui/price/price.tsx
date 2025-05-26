import { IPrice } from '@/types/price.interface';
import styles from './price.module.scss';

export default function Price({price_new, price_old, className = ""}: IPrice) {
  return (
    <div className={`${styles["price"]} ${className}`}>
      <div className={styles["price__new"]}>{price_new}</div>
      <div className={styles["price__old"]}>{price_old}</div>
    </div>
  )
}
