import { ReactNode } from "react"

interface ITitle {
  children: ReactNode;
}

export default function Title({ children }: ITitle) {
  return (
    <div>{children}</div>
  )
}
