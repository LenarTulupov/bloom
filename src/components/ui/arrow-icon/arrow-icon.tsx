import Image from "next/image";
import styles from './arrow-icon.module.scss';

interface IArrowIcon {
  className?: string;
  color: 'white' | 'black';
  width?: number;
  height?: number;
}

export default function ArrowIcon({ className, color, width = 20, height = 20}: IArrowIcon) {
  return (
    <Image
      className={`${styles[color]} ${className || ''}`}
      alt="dobble arrow"
      src="/icons/DobbleArrow.svg"
      width={width}
      height={height}
    />
  );
}
