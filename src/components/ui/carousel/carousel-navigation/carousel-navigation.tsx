import ArrowButton from "../../buttons/arrow-button/arrow-button";
import styles from './carousel-navigation.module.scss';

interface ICarouselNavigation {
  onNext: () => void;
  onPrev: () => void;
}

export default function CarouselNavigation({ onNext, onPrev}: ICarouselNavigation) {
  return (
    <div className={styles.carousel__navigation}>
      <ArrowButton
        className={styles["carousel__navigation-prev"]}
        rotate="left"
        onClick={onPrev}
      />
      <ArrowButton
        className={styles["carousel__navigation-next"]}
        rotate="right"
        onClick={onNext}
      />
    </div>
  );
}
