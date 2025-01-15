import Container from "../container/container";
import Divider from "../divider/divider";
import FooterPrivacy from "./footer-privacy/footer-privacy";
import FooterContent from "./footer-content/footer-content";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <FooterContent />
      </Container>
      <Divider />
      <Container>
        <FooterPrivacy />
      </Container>
    </footer>
  );
}
