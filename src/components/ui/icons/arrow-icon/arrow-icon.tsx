import Icon from "../../../icon/icon";
import styles from "./arrow-icon.module.scss";

interface IArrowIcon {
  isHovered?: boolean;
  color?: "primary" | "white" | "gray";
  className?: string;
  direction?: "down" | "right";
}

export default function ArrowIcon({ isHovered, color, direction = "down", className = "" }: IArrowIcon) {
  return (
    <Icon
      className={`${styles["arrow-icon"]} ${isHovered ? styles.hovered : ''} ${styles[direction]} ${className}`}
      name="arrow"
      size="md"
      color={color}
    />
  );
}
