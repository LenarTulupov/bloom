import Price from "../price/price";
import styles from './product-prices.module.scss';

interface IProductPrices {
  oldPrice: number;
  newPrice: number;
}

export default function ProductPrices({ oldPrice, newPrice }: IProductPrices) {
  return (
    <div className={styles['product-prices']}>
      <Price price={oldPrice} through />
      <Price price={newPrice} />
    </div>
  );
}
