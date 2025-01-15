import Link from "next/link";
import { IButton } from "@/types/button.interface";
import cn from "classnames";
import styles from "./button.module.scss";

export default function Button({
  children,
  href,
  color = "primary",
  type = "button",
  onClick,
  className,
}: IButton) {
  const buttonClassName = cn(styles.button, className || "", styles[color]);

  if (href) {
    return (
      <Link href={href} className={buttonClassName}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} className={buttonClassName} onClick={onClick}>
      {children}
    </button>
  );
}
