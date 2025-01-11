import cn from 'classnames'
import { IIcon } from "@/types/icon.interface";
import styles from "./icon.module.scss";

export default function Icon({
  icon: Icon,
  color = "accent",
  size = "md",
}: IIcon) {
  return (
    <div className={styles['icon']}>
      <Icon
        className={cn(
          styles[color],
          styles[size]
        )}
      />
    </div>
  );
}
