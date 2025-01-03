import Title from "@/components/ui/title/title";
import styles from "./about-content.module.scss";
import Button from "@/components/ui/button/button";
import Description from "@/components/ui/description/description";

export default function AboutContent() {
  return (
    <div className={styles.about__content}>
      <div className={styles["about__content-text"]}>
        <Title h={3} size="small" title="About Us" color="white" />
        <Title
          title="Together, We Make Parenthood Possible"
          size="middle"
          color="white"
        />
        <Description size="md" color="white">
          NewBloom is a Georgian surrogacy agency created to fulfill the wishes
          of parents and bring their lifelong dreams to life.
        </Description>
        <Description size="md" color="white">
          We know how deeply you wish to hold your baby in your arms and how
          vital this journey is to you. Surrogacy is more than a service—it’s a
          personal journey filled with hope, love, and the desire to build a
          family. At NewBloom, we believe everyone deserves the joy of becoming
          a parent. Therefore, our mission is to provide surrogacy services that
          are swift, supportive, and fully transparent.
        </Description>
      </div>
      <Button color="white" className={styles["about__content-button"]}>
        Learn More
      </Button>
    </div>
  );
}
