import Link from "next/link";
import { ReactNode } from "react";

interface IButton {
  children: ReactNode;
  href: string;
  color: 'purple' | 'white' | 'yellow';
}

export default function Button({ children, href, color = 'purple' }: IButton ) {
  return (
    <Link href={href}>
      { children }
    </Link>
  )
};
