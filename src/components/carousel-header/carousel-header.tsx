import CarouselHeaderControls from "../carousel-header-controls/carousel-header-controls";
import Title from "../ui/title/title";
import styles from "./carousel-header.module.scss";

interface ICarouselHeader {
  title: string;
  uppercase?: boolean;
  bold?: boolean;
  pages: number;
  currentPage: number;
  onNext: () => void;
  onPrev: () => void; 
}

export default function CarouselHeader({ 
  title, 
  uppercase = true, 
  bold = true, 
  pages,
  currentPage, 
  onNext, 
  onPrev }: ICarouselHeader) {
  return (
    <header className={styles["carousel-header"]}>
      <Title bold={bold} uppercase={uppercase}>{title}</Title>
      <CarouselHeaderControls pages={pages} currentPage={currentPage} onNext={onNext} onPrev={onPrev}/>
    </header>
  );
}
