import { ICONS } from "@/constants/icons";
import Icon from "../icon/icon";
import cn from 'classnames'
import styles from './close-button.module.scss';

interface ICloseButton {
  onClose: () => void;
  className?: string;
}

export default function CloseButton({ onClose, className }: ICloseButton) {
  return (
    <button 
      onClick={onClose} 
      className={cn(
        styles['close-button'],
        className || ''
      )}
    >
      <Icon icon={ICONS.close} color="black" size="xl"/>
    </button>
  )
}
