import styles from './input-text.module.scss';

interface IInputText {
  placeholder?: string;
}

export default function InputText({ placeholder }: IInputText) {
  return (
    <input 
      className={styles['input-text']} 
      placeholder={placeholder}
    />
  )
}
