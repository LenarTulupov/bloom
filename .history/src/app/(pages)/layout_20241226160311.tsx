import Footer from "@/components/ui/footer/footer";
import Header from "@/components/ui/header/header";
import { ReactNode } from "react";

interface IPagesLayout {
  children: ReactNode;
}

export default function PagesLayout({ children }: IPagesLayout) {
  return (
    <>
      <Header />
      { children }
      <Footer />
    </>
  )
};
