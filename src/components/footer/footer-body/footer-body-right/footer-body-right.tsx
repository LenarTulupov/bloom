import FooterPaymentCards from "../../components/footer-payment-cards/footer-payment-cards";
import FooterSubscription from "../../components/footer-subscription/footer-subscription";
import styles from './footer-body-right.module.scss';

export default function FooterBodyRight() {
  return (
    <div className={styles['footer-body-right']}>
      <FooterSubscription/>
      <FooterPaymentCards/>
    </div>
  )
}
