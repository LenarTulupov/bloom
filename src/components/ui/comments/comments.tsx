import { ICONS } from '@/constants/icons';
import Icon from '../icon/icon';
import styles from './comments.module.scss';

interface IComment {
  comments: number;
}

export default function Comments({ comments }: IComment) {
  return (
    <div className={styles.comments}>
      <Icon icon={ICONS.comments}/>
      <div className={styles.comments__text}>
        Comments <span>({comments})</span>
      </div>
    </div>
  )
}
