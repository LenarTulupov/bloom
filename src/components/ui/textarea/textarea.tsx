import styles from './textarea.module.scss';

interface ITextarea {
  placeholder: string;
}

export default function Textarea({ placeholder }: ITextarea) {
  return (
    <textarea placeholder={placeholder} className={styles.textarea}/>
  )
}
