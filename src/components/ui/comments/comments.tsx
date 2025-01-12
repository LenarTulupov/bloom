import Icon from '../icon/icon';
import styles from './comments.module.scss';
import CommentIcon from '@icons/comment.svg'

interface IComment {
  comments: number;
}

export default function Comments({ comments }: IComment) {
  return (
    <div className={styles.comments}>
      <Icon icon={CommentIcon}/>
      <div className={styles.comments__text}>
        Comments <span>({comments})</span>
      </div>
    </div>
  )
}
