import styles from './divider.module.scss';
import cn from 'classnames'

interface IDivider {
  className?: string;
  color?: "white" | "gray";
}

export default function Divider({ className, color = 'white' }: IDivider) {
  return (
    <div className={cn(
      className || '',
      styles.divider,
      styles[color]
    )} />
  )
};
