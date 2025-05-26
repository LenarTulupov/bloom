import styles from './page-indicator.module.scss';

interface IPageIndicator {
  currentPage?: number;
  pages?: number;
}

export default function PageIndicator({ currentPage, pages}: IPageIndicator) {
  return (
    <div className={styles["page-indicator"]}>
      { currentPage } / { pages }
    </div>
  )
}
