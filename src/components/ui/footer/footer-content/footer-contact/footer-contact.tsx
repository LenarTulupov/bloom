import Button from "@/components/ui/button/button";
import Title from "../../../title/title";
import InputText from "@/components/ui/input-text/input-text";
import styles from "./footer-contact.module.scss";
import Textarea from "@/components/ui/textarea/textarea";

export default function FooterContact() {
  return (
    <div className={styles.footer__contact}>
      <Title size="xs" title="Contact us" color="white" />
      <form className={`${styles["footer__contact-form"]} ${styles.form}`}>
        <div className={styles.form__inputs}>
          <InputText placeholder="Full Name" />
          <InputText placeholder="Phone Number" />
          <InputText placeholder="Email" />
          <Textarea placeholder="Message"/>
        </div>
        <div className={styles["form__button-wrapper"]}>
          <Button className={styles.form__button} type="submit">
            Send message
          </Button>
        </div>
      </form>
    </div>
  );
}
