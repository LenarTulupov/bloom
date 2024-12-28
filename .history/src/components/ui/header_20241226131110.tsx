import { ReactNode } from "react"

interface IHeader {
  children: ReactNode;
}

export default function Header({ children }: IHeader) {
  return (
    <header>
        { children }
    </header>
  )
};
