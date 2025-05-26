import Image from "next/image";
import Title from "@/components/ui/title/title";
import Button from "@/components/ui/buttons/button/button";
import Container from "@/components/ui/container/container";
import styles from "./not-found.module.scss";

export default function NotFound() {
  return (
    <div className={styles["not-found"]}>
      <div className={styles["not-found__background"]}>
        <Image
          className={styles["not-found__background-image"]}
          alt="image"
          src="/not-found/not-found.jpg"
          width={1000}
          height={1000}
          priority
        />
      </div>
      <div className={styles["not-found__text"]}>
        <Container>
          <Title 
            bold 
            size="xxl" 
            uppercase 
            className={styles["not-found__text-title"]}
          >
            error #404
          </Title>
          <Title className={styles["not-found__text-subtitle"]}>Page not found</Title>
          <Button 
            className={styles["not-found__text-button"]} 
            width="fit" 
            href="/"
          >
            Go to main page
          </Button>
        </Container>
      </div>
    </div>
  );
}
