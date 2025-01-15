'use client'

import Link from "next/link";
import cn from "classnames";
import { ISocialButton } from "@/types/social-button.interface";
import { oppositeColor } from "@/utils/oposite-color";
import Icon from "../icon/icon";
import { useState } from "react";
import { getSVGIcon } from "@/utils/get-svg-icon";
import styles from "./social-button.module.scss";

export default function SocialButton({
  size = "sm",
  href,
  name,
  rounded,
  color = "primary",
}: ISocialButton) {
  const [hover, setHover] = useState<boolean>(false);
  const SVGIcon = getSVGIcon(name);

  if (!SVGIcon) {
    return null;
  }

  const onMouseEnter = () => {
    setHover(true);
  }
  const onMouseLeave = () => {
    setHover(false);
  }
  return (
    <Link
    className={cn(
      styles["social-button"],
      rounded ? styles.rounded : "",
      styles[size],
      styles[color]
    )}
    href={href}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    >
      <Icon icon={SVGIcon} color={oppositeColor(color)} isHovered={hover} />
    </Link>
  );
}