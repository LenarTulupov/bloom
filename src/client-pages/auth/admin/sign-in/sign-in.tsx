import Image from "next/image";
import SignInContent from "./sign-in-content/sign-in-content";
import styles from "./sign-in.module.scss";

export default function AdminSignIn() {
  return (
    <div className={styles["admin-sign-in"]}>
      <SignInContent/>
      <div className={styles["image-container"]}>
        <Image
          src="/sign-in-background.jpg"
          alt="sign in background"
          fill
          objectFit="cover" 
          priority
        />
      </div>
    </div>
  );
}
