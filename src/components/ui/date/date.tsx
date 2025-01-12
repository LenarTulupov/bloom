import Icon from "../icon/icon";
import DateIcon from '@icons/date.svg'
import styles from './date.module.scss';

interface IDate {
  date: string;
}

export default function Date({ date }: IDate) {
  return (
    <div className={styles.date}>
      <Icon icon={DateIcon}/>
      <div className={styles.date__text}>{date}</div>
    </div>
  )
}
