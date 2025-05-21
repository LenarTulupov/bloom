import CarouselPagination from "../ui/carousel/carousel-pagination/carousel-pagination";
import CarouselPaginationButton from "../ui/carousel/carousel-pagination/carousel-pagination-button/carousel-pagination-button";
import CarouselPaginationProgress from "../ui/carousel/carousel-pagination/carousel-pagination-progress/carousel-pagination-progress";
import Description from "../ui/description/description";
import Title from "../ui/title/title";
import styles from "./carousel-text.module.scss";

interface ICarouselText {
  title: string;
  description: string;
  slidesLength: number;
  goToSlide: (index: number) => void;
  activeSlideIndex: number;
  progress: number;
}

export default function CarouselText({ 
  title, 
  description, 
  slidesLength, 
  goToSlide, 
  progress, 
  activeSlideIndex }: ICarouselText) {
  return (
    <div className={styles["collections-carousel__text"]}>
      <Title
        className={styles["collections-carousel__text-title"]}
        color="white"
      >
        {title}
      </Title>
      <Description>{description}</Description>
      <CarouselPagination className={styles["collections-carousel__text-pagination"]}>
        {Array.from({length: slidesLength }).map((_, index) => (
          <CarouselPaginationButton key={index} index={index} onClick={goToSlide}>
            <CarouselPaginationProgress 
              index={index} 
              progress={progress} 
              activeSlideIndex={activeSlideIndex}
            />
          </CarouselPaginationButton>
        ))}
        </CarouselPagination>
    </div>
  );
}
