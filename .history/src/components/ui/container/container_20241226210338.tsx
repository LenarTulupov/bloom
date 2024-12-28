import styles from './container.module.scss';

export default function Container() {
  return (
    <div className={styles.container}>
      { children }
    </div>
  )
};
