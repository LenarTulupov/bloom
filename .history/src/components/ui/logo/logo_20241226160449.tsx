import Image from "next/image";
import styles from './logo.module.scss';

export default function Logo() {
  return (
    <div className={styles.logo}>
      <Image
        alt="logo"
        src={logo}
      />
    </div>
  )
};
