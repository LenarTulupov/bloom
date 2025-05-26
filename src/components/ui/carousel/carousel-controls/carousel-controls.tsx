import ArrowButton from "../../buttons/arrow-button/arrow-button";
import styles from './carousel-controls.module.scss';

interface ICarouselControls {
  onNext: () => void;
  onPrev: () => void;
}

export default function CarouselControls({ onNext, onPrev}: ICarouselControls) {
  return (
    <div className={styles.carousel__controls}>
      <ArrowButton
        className={styles["carousel__controls-prev"]}
        rotate="left"
        onClick={onPrev}
      />
      <ArrowButton
        className={styles["carousel__controls-next"]}
        rotate="right"
        onClick={onNext}
      />
    </div>
  );
}
