import { ReactNode } from "react"

interface IPagesLayout {
  children: ReactNode;
}

export default function PagesLayout({ children }) {
  return (
    <header>
      {children}
    </header>
  )
};
