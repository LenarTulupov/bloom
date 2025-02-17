import styles from './product-skeleton.module.scss';

export default function ProductSkeleton() {
  return (
    <div className={styles['product-skeleton']}>
        <div className={styles['product-skeleton__image']}/>
        <div className={styles['product-skeleton__title']}>Title</div>
        <div>Color</div>
        <div>
          <div>price old</div>
          <div>price new</div>
        </div>
        <div>Button</div>
    </div>
  )
};
