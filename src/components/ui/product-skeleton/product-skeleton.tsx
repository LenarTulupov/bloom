import styles from './product-skeleton.module.scss';

export default function ProductSkeleton() {
  return (
    <div className={styles['product-skeleton']}>
      <div className={styles['product-skeleton__image']} />
      <div className={styles['product-skeleton__content']}>
        <div className={styles['product-skeleton__title']} />
        <div className={styles['product-skeleton__color']} />
        <div className={styles['product-skeleton__price']}>
          <div className={styles['product-skeleton__price-old']} />
          <div className={styles['product-skeleton__price-new']} />
        </div>
        <div className={styles['product-skeleton__button']} />
      </div>
    </div>
  )
};
