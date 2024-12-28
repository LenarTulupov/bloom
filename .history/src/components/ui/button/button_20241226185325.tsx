import Link from "next/link";
import { ReactNode } from "react";

interface IButton {
  children: ReactNode;
  href: string;
  color: 'purple'
}

export default function Button({ children, href }: IButton ) {
  return (
    <Link href={href}>
      { children }
    </Link>
  )
};
