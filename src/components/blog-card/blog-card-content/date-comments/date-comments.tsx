import Date from '@/components/ui/date/date';
import Comments from '@/components/ui/comments/comments';
import styles from './date-comments.module.scss';

interface IDateComments {
  date: string;
  comments: number;
}

export default function DateComments({ date, comments}: IDateComments) {
  return (
    <div className={styles["blog-card__content-date-comments"]}>
      <Date date={date} />
      <Comments comments={comments} />
    </div>
  );
}