'use client'

import Icon from "../icon/icon";
import Link from "next/link";
import useHover from "@/hooks/use-hover";
import { ICONS } from "@/constants/icons";
import styles from "./more-button.module.scss";

interface IMoreButton {
  text?: string;
  href?: string;
}

export default function MoreButton({
  href = "#!",
  text = "Read More",
}: IMoreButton) {
  const { hover, onMouseEnter, onMouseLeave } = useHover();
  return (
    <Link
      className={styles["more-button"]}
      href={href}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {text}
      <Icon icon={ICONS.arrow} isHovered={hover} size="sm"/>
    </Link>
  );
}
