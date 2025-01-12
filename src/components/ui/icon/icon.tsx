import cn from "classnames";
import { IIcon } from "@/types/icon.interface";
import styles from "./icon.module.scss";

export default function Icon({
  icon: Icon,
  color = "accent",
  size = "md",
  className,
}: IIcon) {
  return (
    <Icon
      className={cn(
        styles["icon"],
        styles[color],
        styles[size],
        className || ""
      )}
    />
  );
}
