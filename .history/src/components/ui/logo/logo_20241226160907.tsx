import Image from "next/image";
import styles from './logo.module.scss';

export default function Logo() {
  const logo = '.logo';
  return (
    <div className={styles.logo}>
      <Image
        alt="logo"
        src={logo}
        sizes="100%"
        fill
        priority
      />
    </div>
  )
};
