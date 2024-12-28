import { ReactNode } from "react"

interface IHeader {
  children: ReactNode;
}

export default function Header() {
  return (
    <header>
        { children }
    </header>
  )
};
