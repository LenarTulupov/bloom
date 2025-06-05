import CarouselControls from '../carousel-controls/carousel-controls';
import PageIndicator from '../ui/page-indicator/page-indicator';
import styles from './carousel-header-controls.module.scss';

interface ICarouselHeaderControls {
  pages: number;
  currentPage: number;
  onNext: () => void;
  onPrev: () => void; 
  isNextDisabled: boolean;
  isPrevDisabled: boolean;
}

export default function CarouselHeaderControls({ currentPage, pages, onNext, onPrev, isNextDisabled, isPrevDisabled }: ICarouselHeaderControls) {
  return (
    <div className={styles["carousel-header-controls"]}>
      <PageIndicator currentPage={currentPage} pages={pages} />
      <CarouselControls onNext={onNext} onPrev={onPrev} isPrevDisabled={isPrevDisabled} isNextDisabled={isNextDisabled} />
    </div>
  );
}
