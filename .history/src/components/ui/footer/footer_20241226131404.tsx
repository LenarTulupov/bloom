interface IFooter {
  children: ReactNode;
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      { children }
    </footer>
  )
};
