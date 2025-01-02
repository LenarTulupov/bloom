import Button from "@/components/ui/button/button";
import Text from "@/components/ui/text/text";
import Title from "@/components/ui/title/title";
import styles from "./welcome-content.module.scss";

export default function WelcomeContent() {
  return (
    <div className={styles["welcome-section__content"]}>
      <Title
        size="small"
        title="Turning Parenthood Dreams into Reality"
        background
      />
      <Title size="big" color="black">
        Welcome to{" "}
        <span className={styles["welcome-section__content-color"]}>
          NewBloom Surrogacy
        </span>{" "}
        Agency
      </Title>
      <Text className={styles["welcome-section__content-description"]}>
        trusted surrogacy services in Georgia with transparency, speed, and
        care.
      </Text>
      <Button
        link
        href="/contact-us"
        className={styles["welcome-section__content-button"]}
      >
        Contact Us Now
      </Button>
    </div>
  );
}
