import Button from "@/components/ui/buttons/button/button";
import styles from "./footer-subscription.module.scss";

export default function FooterSubscription() {
  return (
    <div className={styles["footer-subscription"]}>
      <div className={styles["footer-subscription__title"]}>
        Stay stylish with us! ♥
      </div>
      <p className={styles["footer-subscription__description"]}>
        Get <strong>10% OFF</strong> your first order by subscribing.
      </p>
      <form className={styles["footer-subscription__form"]}>
        <input
          type="email"
          placeholder="Email"
          className={styles["footer-subscription__form-input"]}
        />
        <Button
          type="submit"
          weight="semi"
          className={styles["footer-subscription__form-button"]}
          width="fit"
          uppercase={false}
        >
          Subscribe
        </Button>
      </form>
      <p className={styles["footer-subscription__note"]}>
        By subscribing, you agree to receive marketing emails and accept our
        <strong>Privacy Policy.</strong>
      </p>
    </div>
  );
}
