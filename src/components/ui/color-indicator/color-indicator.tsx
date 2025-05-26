import { IColorIndicator } from '@/types/color-indicator.interface';
import styles from './color-indicator.module.scss';

export default function ColorIndicator({ color, className = "" }: IColorIndicator) {
  return (
    <div className={`${styles["color-indicator"]} ${className}`} style={{backgroundColor: color}}/>
  )
}
