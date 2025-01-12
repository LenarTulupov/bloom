import ArrowIcon from "@icons/arrow.svg";
import Icon from "../icon/icon";
import Link from "next/link";
import styles from "./more-button.module.scss";

interface IMoreButton {
  text?: string;
  href?: string;
}

export default function MoreButton({ href = '#!', text = "Read More" }: IMoreButton) {
  return (
    <Link href={href} className={styles["more-button"]}>
      {text}
      <Icon icon={ArrowIcon} />
    </Link>
  );
}
