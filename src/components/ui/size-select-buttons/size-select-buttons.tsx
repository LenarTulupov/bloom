import { ISize } from "@/types/product.interface";
import styles from './size-select-buttons.module.scss';

interface ISizeSelectButtons {
  sizes: ISize[];
}

export default function SizeSelectButtons({ sizes }: ISizeSelectButtons) {
  return (
    <div className={styles["size-select-buttons"]}>
      {sizes.map((size) => (
        <button key={size.id}>{size.abbreviation}</button>
      ))}
    </div>
  );
}
