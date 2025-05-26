import Image from "next/image";
import Link from "next/link";
import Icon from "../icon/icon";
import styles from "./review.module.scss";

interface IReview {
  review: {
    name: string;
    avatar: string;
    date: string;
    comment: string;
    link: string;
  }
}

export default function Review({ review }: IReview) {
  const { comment, link, avatar, name, date } = review;
  return (
    <div className={styles.review}>
      <div className={styles.review__quotes}>
        <Image
          className={styles["review__quotes-image"]}
          alt="quotes"
          src={"/home/review/quotes.png"}
          width={1000}
          height={1000}
          priority
        />
      </div>
      <div className={styles.review__comment}>
        <p className={styles["review__comment-text"]}>{comment}</p>
      </div>
      <div className={styles.review__footer}>
        <div
          className={`${styles["review__footer-left"]} ${styles["footer-left"]}`}
        >
          <div className={styles["footer-left__avatar"]}>
            <Image
              className={styles["footer-left__avatar-image"]}
              src={avatar}
              alt="avatar"
              width={1000}
              height={1000}
              priority
            />
          </div>
          <div className={styles["footer-left__info"]}>
            <div className={styles["footer-left__info-name"]}>{name}</div>
            <div className={styles["footer-left__info-date"]}>{date}</div>
          </div>
        </div>
        <div className={`${styles["review__footer-right"]} ${styles["footer-right"]}`}>
          <Link href={link} className={styles["footer-right__link"]}>
            <div className={styles["footer-right__link-text"]}>
              original review
            </div>
            <div className={styles["footer-right__link-arrow"]}>
              <Icon name="arrowFull" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
