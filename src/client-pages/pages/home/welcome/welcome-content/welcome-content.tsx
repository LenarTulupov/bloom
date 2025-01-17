import Button from "@/components/ui/button/button";
import Title from "@/components/ui/title/title";
import Description from "@/components/ui/description/description";
import styles from "./welcome-content.module.scss";

export default function WelcomeContent() {
  return (
    <div className={styles["welcome-section__content"]}>
      <Title
        size="xs"
        title="Turning Parenthood Dreams into Reality"
        background
        rounded
        border
        color="primary"
        className={styles['welcome-section__content-title-background']}
      />
      <Title 
        size="lg" 
        color="black" 
        h={1} 
        className={styles['welcome-section__content-title']}
      >
        Welcome to&nbsp;
        <span className={styles["welcome-section__content-color"]}>
          NewBloom Surrogacy
        </span>
        &nbsp; Agency
      </Title>
      <Description
        size="md"
        className={styles["welcome-section__content-description"]}
      >
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
