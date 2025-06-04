import CarouselControls from "../carousel-controls/carousel-controls";
import PageIndicator from "../ui/page-indicator/page-indicator";
import Title from "../ui/title/title";
import styles from "./carousel-header.module.scss";

interface ICarouselHeader {
  title: string;
  uppercase?: boolean;
  bold?: boolean;
  allPages?: number;
  currentPage?: number;
  onNext?: () => void;
  onPrev?: () => void; 
}

export default function CarouselHeader({ 
  title, 
  uppercase = true, 
  bold = true, 
  allPages,
  currentPage, 
  onNext, 
  onPrev }: ICarouselHeader) {
  return (
    <header className={styles["carousel-header"]}>
      <Title bold={bold} uppercase={uppercase}>{title}</Title>
      <div
        className={`${styles["catalog-section__top-inner"]} ${styles["top-inner"]}`}
      >
        <PageIndicator currentPage={currentPage} pages={allPages} />
        <CarouselControls onNext={onNext} onPrev={onPrev}/>
      </div>
    </header>
  );
}
