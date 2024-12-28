import styles from './title.module.scss';

interface ITitle {
  title: string;
  className?: string;
}

export default function Title({ 
  title, 
  className,
  ...props }: ITitle) {
  return (
    <h1 className={`${styles.title} ${className || ''}`}>
      {title}
    </h1>
  )
};