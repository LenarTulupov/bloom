import Button from "@/components/ui/button/button";
import Title from "@/components/ui/title/title";
import styles from "./welcome-content.module.scss";
import Description from "@/components/ui/description/description";

export default function WelcomeContent() {
  return (
    <div className={styles["welcome-section__content"]}>
      <Title
        size="small"
        title="Turning Parenthood Dreams into Reality"
        background
      />
      <Title size="big" color="black" h={1}>
        Welcome to&nbsp;
        <span className={styles["welcome-section__content-color"]}>
          NewBloom Surrogacy
        </span>&nbsp;
        Agency
      </Title>
      <Description size="md" className={styles["welcome-section__content-description"]}>
        trusted surrogacy services in Georgia with transparency, speed, and
        care.
      </Description>
      <Button
        href="/contact-us"
        className={styles["welcome-section__content-button"]}
      >
        Contact Us Now
      </Button>
    </div>
  );
}
