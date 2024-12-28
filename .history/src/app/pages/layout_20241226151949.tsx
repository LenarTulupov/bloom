import Footer from "@/components/ui/footer/footer";
import Header from "@/components/ui/header/header";
import { ReactNode } from "react"
import HomePage from "./home/home";

export default function PagesLayout() {
  return (
    <>
      <Header />
      <HomePage />
      <Footer />
    </>
  )
};
