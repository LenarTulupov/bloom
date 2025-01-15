import Icon from "../icon/icon";
import styles from './date.module.scss';
import { ICONS } from "@/constants/icons";

interface IDate {
  date: string;
}

export default function Date({ date }: IDate) {
  return (
    <div className={styles.date}>
      <Icon icon={ICONS.date}/>
      <div className={styles.date__text}>{date}</div>
    </div>
  )
}
