import { usePathname } from "next/navigation";
import ArrowIcon from "../icons/dobble-arrow-icon/dobble-arrow-icon";
import styles from "./breadcrumps.module.scss";

interface IBreadcrumps {
  className?: string;
  formattedPathname?: string;
}

export default function Breadcrumps({
  className,
  formattedPathname,
}: IBreadcrumps) {
  const pathname = usePathname();

  return (
    <div className={`${styles.breadcrumps} ${className || ""}`}>
      Home
      <ArrowIcon color="white" width={16} height={16} />
      {formattedPathname || pathname}
    </div>
  );
}
