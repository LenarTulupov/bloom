import Container from "../ui/container/container";
import FooterBody from "./footer-body/footer-body";
import FooterBottom from "./footer-bottom/footer-bottom";
import FooterHeader from "./footer-header/footer-header";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <FooterHeader/>
        <FooterBody/>
        <FooterBottom/>
      </Container>
    </footer>
  );
}
