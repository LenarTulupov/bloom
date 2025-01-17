import styles from './input-text.module.scss';
import { IInputText } from '@/types/input-text.interface';

export default function InputText({ 
  id, 
  placeholder, 
  type = 'text', 
  onChange, 
  required,
  className }: IInputText) {
  return (
    <input 
      className={`${styles['input-text']} ${className || ''}`} 
      id={id}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      required={required}
    />
  )
}
