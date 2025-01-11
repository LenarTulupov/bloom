import Image from "next/image";
import styles from './date.module.scss';

interface IDate {
  date: string;
}

export default function Date({ date }: IDate) {
  return (
    <div className={styles.date}>
      <Image
        alt="date"
        src={'/icons/date.svg'}
        width={20}
        height={20}
      />
      <div className={styles.date__text}>{date}</div>
    </div>
  )
}
