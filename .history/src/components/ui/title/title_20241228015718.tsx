import styles from './title.module.scss';

interface ITitle {
  title: string;
  className?: string;
}

export default function Title() {
  return (
    <h1 className={`{styles.title}`}>
        {title}
    </h1>
  )
};
