import ArrowButton from '../ui/buttons/arrow-button/arrow-button';
import styles from './carousel-controls.module.scss';

interface ICarouselControls {
  onNext?: () => void;
  onPrev?: () => void;
}

export default function CarouselControls({ onNext, onPrev }: ICarouselControls) {
  return (
    <div className={styles["carousel-controls"]}>
      <ArrowButton rotate='left' onClick={onPrev}/>
      <ArrowButton rotate='right' onClick={onNext}/>
    </div>
  )
}
