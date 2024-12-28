import styles from './footer.module.scss';

export default function Footer({ children }: IFooter) {
  return (
    <footer className={styles.footer}>
      {children}
    </footer>
  )
};
