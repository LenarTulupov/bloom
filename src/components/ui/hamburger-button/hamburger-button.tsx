import cn from 'classnames'
import styles from './hamburger-button.module.scss';
import { useHamburger } from '@/hooks/use-hamburger';

interface IHamburgerButton {
  className?: string;
}

export default function HamburgerButton({ className }: IHamburgerButton) {
  const { isHamburgerOpened, handleHamburgerClick } = useHamburger();
  return (
    <button 
      className={cn(
        styles['hamburger__button'],
        className || ''
      )}
      onClick={handleHamburgerClick}
    >
      <div className={cn(
        styles['hamburger__button-icon'],
        isHamburgerOpened ? '' : styles.active
      )}/>
      <div className={cn(
        styles['hamburger__button-icon'],
        isHamburgerOpened ? '' : styles.active
      )}/>
      <div className={cn(
        styles['hamburger__button-icon'],
        isHamburgerOpened ? '' : styles.active
      )}/>
    </button>
  )
}
