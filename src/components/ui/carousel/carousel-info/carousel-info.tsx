import { ReactNode } from "react";
import styles from "./carousel-info.module.scss";

interface ICarouselInfo {
  children: ReactNode;
  className?: string;
}

export default function CarouselInfo({ children, className = "" }: ICarouselInfo) {
  return (
    <div className={`${styles.carousel__info} ${className}`}>
      { children }
    </div>
  );
}
