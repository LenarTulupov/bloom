import styles from "./logo.module.scss";
import cn from 'classnames'

interface ILogo {
  className?: string;
}

export default function Logo({ className }: ILogo) {
  const logo = "/logo.png";
  return (
    <img 
      className={cn(
        styles.logo,
        className || ''
      )} 
      alt="logo" 
      src={logo} 
    />
  )
}
