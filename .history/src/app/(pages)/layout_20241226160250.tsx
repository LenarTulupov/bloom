import Footer from "@/components/ui/footer/footer";
import Header from "@/components/ui/header/header";

export default function PagesLayout() {
  return (
    <>
      <Header />
      { children }
      <Footer />
    </>
  )
};
