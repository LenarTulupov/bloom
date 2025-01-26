import cn from "classnames";
import { IIcon } from "@/types/icon.interface";
import styles from "./icon.module.scss";

export default function Icon({
  icon: Icon,
  color = "primary",
  size = "md",
  className,
  isHovered,
  isHoverIcon
}: IIcon) {
  return (
    <Icon
      className={cn(
        styles["icon"],
        !isHovered ? styles[color] : styles[`${color}_hovered`],
        styles[size],
        isHoverIcon ? styles["icon__hover-icon"] : '',
        className || ""
      )}
    />
  );
}
