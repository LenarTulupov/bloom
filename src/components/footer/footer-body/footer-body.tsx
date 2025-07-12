import FooterColumns from "../components/footer-columns/footer-columns";
import FooterBodyRight from "./footer-body-right/footer-body-right";
import styles from './footer-body.module.scss';

export default function FooterBody() {
  return (
    <div className={styles['footer-body']}>
      <FooterColumns/>
      <FooterBodyRight/>
    </div>
  )
}
