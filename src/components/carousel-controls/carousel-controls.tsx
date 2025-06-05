import ArrowButton from '../ui/buttons/arrow-button/arrow-button';
import styles from './carousel-controls.module.scss';

interface ICarouselControls {
  onNext?: () => void;
  onPrev?: () => void;
  isNextDisabled: boolean;
  isPrevDisabled: boolean;
}

export default function CarouselControls({ onNext, onPrev, isNextDisabled, isPrevDisabled }: ICarouselControls) {
  return (
    <div className={styles["carousel-controls"]}>
      <ArrowButton rotate='left' onClick={onPrev} disabled={isPrevDisabled} className={styles["carousel-controls__button"]}/>
      <ArrowButton rotate='right' onClick={onNext} disabled={isNextDisabled} className={styles["carousel-controls__button"]}/>
    </div>
  )
}
