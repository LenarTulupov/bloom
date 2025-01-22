import { usePathname } from "next/navigation";
import Icon from "../icon/icon";
import { ICONS } from "@/constants/icons";
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
      <Icon icon={ICONS.doubleArrow} color="white"/>
      {formattedPathname || pathname}
    </div>
  );
}
