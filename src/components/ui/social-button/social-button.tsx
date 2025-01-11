import Link from "next/link";
import Icon from "../icon/icon";
import cn from 'classnames'
import { ISocialButton } from "@/types/social-button.interface";
import styles from "./social-button.module.scss";

export default function SocialButton({ 
  size = 'sm', 
  href, 
  icon, 
  rounded, 
  color = 'accent'
}: ISocialButton) {
  return (
    <Link 
      href={href} 
      className={cn(
        styles["social-button"], 
        rounded ? styles.rounded : '',
        styles[size],
        styles[color]
      )}
    >
      <Icon icon={icon} color={color}/>
    </Link>
  );
}
