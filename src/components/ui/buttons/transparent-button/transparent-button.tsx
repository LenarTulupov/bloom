import { ReactNode } from "react";
import Button from "../button/button";
import styles from './transparent-button.module.scss';

interface ITransparentButton {
  text: ReactNode;
  href: string;
}

export default function TransparentButton({ text, href }: ITransparentButton) {
  return (
  <Button className={styles["transparent-button"]} href={href} weight="bold">
    {text}
  </Button>
  )
}
