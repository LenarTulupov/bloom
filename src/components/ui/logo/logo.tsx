import Image from "next/image";
import styles from "./logo.module.scss";
import cn from 'classnames'

interface ILogo {
  className?: string;
}

export default function Logo({ className }: ILogo) {
  const logo = "/logo/logo.png";
  return (
    <div className={styles.logo}>
    <Image 
      className={cn(
        styles.logo__icon,
        className || ''
      )} 
      alt="logo" 
      src={logo} 
      width={100}
      height={100}
      />
      </div>
  )
}
