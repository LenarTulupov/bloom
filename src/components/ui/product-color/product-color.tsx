import cn from 'classnames'
import styles from './product-color.module.scss';

interface IProductColor {
  color: string;
  block?: boolean;
}

export default function ProductColor({ color, block = false }: IProductColor) {
  return (
    <div className={cn(styles.color, block ? "block" : "")}>
      { color }
    </div>
  )
}
