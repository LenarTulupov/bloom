import { ReactNode } from "react"
import styles from './carousel-pagination-button.module.scss';

interface ICarouselPaginationButton {
  onClick: (index: number) => void
  index: number
  className?: string
  children: ReactNode;
}

export default function CarouselPaginationButton({ onClick, index, className = "", children}: ICarouselPaginationButton) {
  return (
    <button 
      className={`${styles['carousel__pagination-button']} ${className}`} 
      onClick={() => onClick(index)}
    >
      {children}
    </button>
  )
}
