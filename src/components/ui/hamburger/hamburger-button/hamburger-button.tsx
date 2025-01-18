import cn from 'classnames'
import styles from './hamburger-button.module.scss';
import { useHamburger } from '@/hooks/use-hamburger';

export default function HamburgerButton() {
  const { isHamburgerOpened, handleHamburgerClick } = useHamburger();
  return (
    <button 
      className={cn(
        styles['hamburger__button'],
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
