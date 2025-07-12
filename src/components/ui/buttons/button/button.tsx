import {
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  ReactNode,
  forwardRef,
  Ref,
} from "react";
import cn from "classnames";
import Link from "next/link";
import styles from "./button.module.scss";

type ButtonProps = {
  children: ReactNode;
  width?: "full" | "fit";
  className?: string;
  color?: "primary" | "secondary";
  font?: "xs" | "sm";
  weight?: "semi" | "bold";
  uppercase?: boolean;
} & (
  | ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
  | (ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
);

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ children, className = "", color = "primary", width = "full", font = "sm", weight = "sm", href, uppercase = true, ...props }, ref) => {
    const buttonClasses = cn(styles.button, styles[color], styles[width], styles[font], styles[weight], {[styles.uppercase]: uppercase}, className);

    if (href) {
      return (
        <Link
          className={buttonClasses}
          href={href}
          ref={ref as Ref<HTMLAnchorElement>}
          {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        className={buttonClasses}
        ref={ref as Ref<HTMLButtonElement>}
        {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
