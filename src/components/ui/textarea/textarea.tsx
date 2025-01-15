import cn from "classnames";
import { usePathname } from "next/navigation";
import styles from "./textarea.module.scss";

interface ITextarea {
  placeholder: string;
}

export default function Textarea({ placeholder }: ITextarea) {
  const pathname = usePathname();
  return (
    <textarea
      key={pathname}
      className={cn(styles.textarea, styles.reset)}
      placeholder={placeholder}
    />
  );
}
