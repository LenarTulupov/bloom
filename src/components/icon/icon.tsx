import { ICONS } from "@/constants/icons";
import cn from "classnames";
import Image from "next/image";
import { FC, SVGProps } from "react";
import styles from "./icon.module.scss";

interface IIcon {
  name: string;
  color?: "primary" | "white";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
}

const SIZE_TO_DIMENSIONS = {
  xs: { width: 16, height: 16 },
  sm: { width: 18, height: 18 },
  md: { width: 20, height: 20 },
  lg: { width: 24, height: 24 },
  xl: { width: 30, height: 30 },
};

export default function Icon({
  name,
  color = "primary",
  size = "lg",
  className = "",
}: IIcon) {
  const IconComponent = ICONS[name];

  if (!IconComponent) {
    console.error(`Icon "${name}" not found`);
    return null;
  }

  if (typeof IconComponent === "string") {
    const dimensions = SIZE_TO_DIMENSIONS[size];

    return (
      <Image
        src={IconComponent}
        alt={name}
        className={cn(
          styles.icon,
          styles[size],
          styles[color],
          className,
        )}
        width={dimensions.width}
        height={dimensions.height}
      />
    );
  } else {
    // SVG-компонент
    const SvgIcon = IconComponent as FC<SVGProps<SVGSVGElement>>;
    return (
      <SvgIcon
        className={cn(
          styles.icon,
          styles[size],
          styles[color],
          className,
        )}
      />
    );
  }
}
