import styles from './dobble-arrow-icon.module.scss';

interface IDobbleArrowIcon {
  className?: string;
  color: 'white' | 'black';
  width?: number;
  height?: number;
}

export default function DobbleArrowIcon({ className, color, width = 20, height = 20}: IDobbleArrowIcon) {
  return (
    <img
      className={`${styles[color]} ${className || ''}`}
      alt="dobble arrow"
      src="/icons/DobbleArrow.svg"
      width={width}
      height={height}
    />
  );
}
