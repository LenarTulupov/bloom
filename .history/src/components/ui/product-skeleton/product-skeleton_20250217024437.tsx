import styles from './product-skeleton.module.scss';

export default function ProductSkeleton() {
  return (
    <div className={styles['product-skeleton']}>
        <div className={styles['product-skeleton__image']}/>
        <div className={styles['product-skeleton__title']}/>
        <div className={styles['product-skeleton__color']}/>
        <div>
          <div>price old</div>
          <div>price new</div>
        </div>
        <div>Button</div>
    </div>
  )
};
