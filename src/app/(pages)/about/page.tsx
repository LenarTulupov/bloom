import About from "@/client-pages/pages/about/about";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About us"
}

export default function AboutPage() {
  return <About />
};
