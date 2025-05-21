import styles from "./carousel-pagination-progress.module.scss";

interface IProgress {
  index: number;
  progress: number;
  activeSlideIndex: number;
}

export default function CarouselPaginationProgress({
  index,
  progress,
  activeSlideIndex
}: IProgress) {
  let width = 0;

  if (index < activeSlideIndex) {
    width = 100;
  } else if (index === activeSlideIndex) {
    width = progress;
  }
  return (
    <div
      className={styles["carousel__pagination-progress"]}
      style={{ width: `${width}%` }}
    />
  );
}
