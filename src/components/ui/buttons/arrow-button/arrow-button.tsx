import ArrowIcon from '../../icons/arrow-icon/arrow-icon';
import { ButtonHTMLAttributes, Ref, forwardRef } from "react";
import styles from './arrow-button.module.scss';

interface IArrowButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  rotate: "left" | "right";
  className?: string;
}

function ArrowButtonComponent(
  { rotate, className = '', ...props }: IArrowButton,
  ref: Ref<HTMLButtonElement>
) {
  return (
    <button
      ref={ref}
      className={`${styles["arrow-button"]} ${styles[rotate]} ${className}`}
      {...props}
    >
      <ArrowIcon/>
    </button>
  );
}

const ArrowButton = forwardRef(ArrowButtonComponent);
ArrowButton.displayName = "ArrowButton";

export default ArrowButton;
