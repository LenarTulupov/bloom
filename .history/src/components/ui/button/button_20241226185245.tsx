import Link from "next/link";
import { ReactNode } from "react";

interface IButton {
  children: ReactNode;
  href: string;
}

export default function Button({ children }: IButton ) {
  return (
    <Link>
      { children }
    </Link>
  )
};
