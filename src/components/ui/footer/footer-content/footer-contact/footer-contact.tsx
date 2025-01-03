import Button from "@/components/ui/button/button";
import Title from "../../../title/title";
import InputText from "@/components/ui/input-text/input-text";
import styles from "./footer-contact.module.scss";

export default function FooterContact() {
  return (
    <div className={styles.footer__contact}>
      <Title size="small" title="Contact us" />
      <form
        // onSubmit={}
        className={`${styles["footer__contact-form"]} ${styles.form}`}
      >
        <div className={styles.form__inputs}>
          <InputText placeholder="Full Name" />
          <InputText placeholder="Phone Number" />
          <InputText placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          {/* <InputText placeholder="Message" /> */}
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
