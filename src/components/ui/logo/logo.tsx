import { usePathname } from "next/navigation";
import styles from "./logo.module.scss";

interface ILogo {
  isScrolled?: boolean;
}

export default function Logo({ isScrolled }: ILogo) {
  const pathname = usePathname();
  return (
    <div className={styles.logo}>
      <svg
        className={pathname === '/' ? isScrolled ? styles.black: styles.white : ""}
        width="90"
        height="43"
        viewBox="0 0 90 43"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M74.1193 43V37.6745H89.9999V43H74.1193ZM74.1193 17.5169V12.1914H89.9999V17.5169H74.1193ZM74.1193 29.2682V24.0307H89.1001V29.2682H74.1193ZM69.9805 12.1914H76.1887V43H69.9805V12.1914ZM86.7158 2.11259L78.6181 8.71443L75.334 7.04197L82.0821 0L86.7158 2.11259Z"
          className={pathname === '/' ? isScrolled ? styles.black: styles.white : ""}
        />
        <path
          d="M53.235 28.652H60.0281L70.2853 43H62.6824L53.235 28.652ZM46.082 12.1914H52.5152V43H46.082V12.1914ZM49.9959 17.5609V12.1914H56.6541C59.1434 12.1914 61.2578 12.6022 62.9973 13.4238C64.7368 14.2453 66.0714 15.3896 67.0012 16.8567C67.9309 18.3238 68.3958 20.0403 68.3958 22.0061C68.3958 23.9427 67.9309 25.6592 67.0012 27.1556C66.0714 28.6227 64.7368 29.767 62.9973 30.5885C61.2578 31.4101 59.1434 31.8209 56.6541 31.8209H49.9959V26.8035H56.2492C57.3889 26.8035 58.3636 26.6274 59.1734 26.2753C60.0131 25.8939 60.658 25.3657 61.1078 24.6909C61.5577 23.9867 61.7826 23.1505 61.7826 22.1822C61.7826 21.2139 61.5577 20.3924 61.1078 19.7175C60.658 19.0133 60.0131 18.4852 59.1734 18.1331C58.3636 17.7516 57.3889 17.5609 56.2492 17.5609H49.9959Z"
          className={pathname === '/' ? isScrolled ? styles.black: styles.white : ""}
        />
        <path 
          d="M36.7695 12.1914H43.2927V43H36.7695V12.1914Z" 
          className={pathname === '/' ? isScrolled ? styles.black: styles.white : ""}
        />
        <path
          d="M8.72756 25.7032L6.70312 43H0L4.67869 10.651L17.86 30.5445L31.0413 10.651L35.72 43H29.0169L26.9924 25.7032L17.86 40.1392L8.72756 25.7032Z"
          className={pathname === '/' ? isScrolled ? styles.black: styles.white : ""}
        />
      </svg>
    </div>
  );
}
