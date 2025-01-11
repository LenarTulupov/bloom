import Image from "next/image";
import styles from './comments.module.scss';

interface IComment {
  comments: number;
}

export default function Comments({ comments }: IComment) {
  return (
    <div className={styles.comments}>
      <Image
        alt="comment"
        src={'/icons/comment.svg'}
        width={20}
        height={20}
      />
      <div className={styles.comments__text}>Comments <span>({comments})</span></div>
    </div>
  )
}
