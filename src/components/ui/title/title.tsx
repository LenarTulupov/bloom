import cn from "classnames";
import { ITitle } from "@/types/title.interface";
import styles from "./title.module.scss";
import { ElementType } from "react";

export default function Title({
  children,
  bold = false,
  className = "",
  color = "black",
  size = "sm",
  uppercase = false,
  h = 2
}: ITitle) {
  const HeadingTag: ElementType = `h${h}`;
  return (
    <HeadingTag
      className={cn(
        styles.title,
        styles[color],
        { [styles.title_bold]: bold },
        styles[size],
        {[ styles.title_uppercase]: uppercase },
        className
      )}
    >
      {children}
    </HeadingTag>
  );
}