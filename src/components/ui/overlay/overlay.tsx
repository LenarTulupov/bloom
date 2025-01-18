import cn from 'classnames'
import styles from './overlay.module.scss';

interface IOverlay {
  className?: string;
  isOpened: boolean;
}

export default function Overlay({ className, isOpened }: IOverlay) {
  return (
    <div className={cn(
      styles.overlay, 
      className || '',
      isOpened ? styles.overlay_opened : ''
      )}
    />
  )
}
