import { footerCards } from "@/constants/footer-cards";
import Image from "next/image";
import styles from "./footer-payment-cards.module.scss";

export default function FooterPaymentCards() {
  return (
    <div className={styles["footer-payment-cards"]}>
      {footerCards.map((card) => (
        <Image
          key={card.id}
          className={"footer-payment-cards__image"}
          width={64}
          height={44}
          alt={card.name}
          src={card.image}
          priority
        />
      ))}
    </div>
  );
}
