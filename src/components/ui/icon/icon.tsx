import cn from "classnames";
import { IIcon } from "@/types/icon.interface";
import styles from "./icon.module.scss";

export default function Icon({
  icon: Icon,
  color = "primary",
  size = "md",
  className,
  isHovered
}: IIcon) {
  return (
    <Icon
      className={cn(
        styles["icon"],
        !isHovered ? styles[color] : styles[`${color}_hovered`],
        styles[size],
        className || ""
      )}
    />
  );
}
