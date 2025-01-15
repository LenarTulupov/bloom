import { ReactNode } from "react"
import styles from './products-grid.module.scss';

interface IProductsGrid {
  children: ReactNode;
}

export default function ProductsGrid({ children }: IProductsGrid) {
  return (
    <div className={styles['products-grid']}>
      { children }
    </div>
  )
}
