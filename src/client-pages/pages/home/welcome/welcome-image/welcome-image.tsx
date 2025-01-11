import Image from "next/image";
import styles from "./welcome-image.module.scss";

export default function WelcomeImage() {
  return (
    <div className={styles["welcome-image"]}>
      <Image
        className={styles["welcome-image__img"]}
        alt="background"
        src="/home/welcome/background.png"
        width={1007}
        height={649}
        priority
      />
    </div>
  );
}