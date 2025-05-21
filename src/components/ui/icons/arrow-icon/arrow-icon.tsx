import Icon from "../../../icon/icon";
import styles from "./arrow-icon.module.scss";

interface IArrowIcon {
  isHovered?: boolean;
  color?: "primary" | "white";
}

export default function ArrowIcon({ isHovered, color }: IArrowIcon) {
  return (
    <Icon
      className={`${styles["arrow-icon"]} ${isHovered ? styles.hovered : ''}`}
      name="arrow"
      size="md"
      color={color}
    />
  );
}
