import styles from './price.module.scss';
import cn from 'classnames'

interface IPrice {
  price: number;
  through?: boolean;
}

export default function Price({ price, through }: IPrice) {
  return (
    <div className={cn(styles.price, through ? "through" : "")}>
      { price }
    </div>
  )
}
