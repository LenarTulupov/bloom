import { ReactNode } from "react"

interface IPagesLayout {
  children: ReactNode;
}

export default function PagesLayout() {
  return (
    <header>
      {children}
    </header>
  )
};
