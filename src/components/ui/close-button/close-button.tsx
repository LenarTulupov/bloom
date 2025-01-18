import { ICONS } from "@/constants/icons";
import Icon from "../icon/icon";
import styles from './close-button.module.scss';

interface ICloseButton {
  onClick: () => void;
  className?: string;
}

export default function CloseButton({ onClick, className }: ICloseButton) {
  return (
    <button onClick={onClick} className={`${styles['close-button']} ${className || ''}`}>
      <Icon icon={ICONS.close}/>
    </button>
  )
}
