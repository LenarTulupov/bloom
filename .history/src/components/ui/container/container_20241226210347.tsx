import styles from './container.module.scss';

interface IContainer {
  
}

export default function Container() {
  return (
    <div className={styles.container}>
      { children }
    </div>
  )
};
