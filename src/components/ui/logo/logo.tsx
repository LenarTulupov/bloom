import styles from "./logo.module.scss";

interface ILogo {
  width?: string;
  height?: string;
}

export default function Logo({ width = '151', height = '87' }: ILogo) {
  const logo = "/logo.png";
  return <img className={styles.logo} alt="logo" src={logo} width={width} height={height} />;
}
