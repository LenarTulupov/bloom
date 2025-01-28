import styles from './product-content.module.scss';

interface IProductContent {
  product: {
    title: string;
    /* thumbnail: string; */
  }
}

export default function ProductContent({ product }: IProductContent) {
  const { title, /* thumbnail */ } = product;
  return (
    <div className={styles.product__content}>
      {/* <AdaptiveImage alt={title} src={thumbnail} /> */}
      {title}
    </div>
  );
}
