import Image from "next/image";

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
