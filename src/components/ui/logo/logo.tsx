import styles from "./logo.module.scss";
import cn from 'classnames'

interface ILogo {
  width?: string;
  height?: string;
  className?: string;
}

export default function Logo({ width = '151', height = '87', className }: ILogo) {
  const logo = "/logo.png";
  return (
    <img 
      className={cn(
        styles.logo,
        className || ''
      )} alt="logo" src={logo} width={width} height={height} 
    />
  )
}
