import Link from "next/link";
import { ReactNode } from "react";

interface IButton {
  children: ReactNode;
}

export default function Button({ children }: IButton) {
  return (
    {
      link ?<Link> : <button>
      { children }
      </Link>
      </button >
    }
  )
};
