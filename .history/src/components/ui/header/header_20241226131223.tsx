import { ReactNode } from "react"
sr

interface IHeader {
  children: ReactNode;
}

export default function Header({ children }: IHeader) {
  return (
    <header>
      {children}
    </header>
  )
};
