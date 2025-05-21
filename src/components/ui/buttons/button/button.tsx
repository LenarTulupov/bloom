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
  className?: string;
  color?: "primary";
} & (
  | ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
  | (ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
);

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ children, className = "", color = "primary", href, ...props }, ref) => {
    const buttonClasses = cn(styles.button, styles[color], className);

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
