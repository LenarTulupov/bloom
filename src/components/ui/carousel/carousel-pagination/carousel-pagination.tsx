import { ReactNode } from 'react';
import styles from './carousel-pagination.module.scss';

interface ICarouselPagination {
  children: ReactNode;
  className?: string;
}

export default function CarouselPagination({ className = "", children }: ICarouselPagination) {
  return (
    <div className={`${styles.carousel__pagination} ${className}`}>
      { children }
    </div>
  )
}
