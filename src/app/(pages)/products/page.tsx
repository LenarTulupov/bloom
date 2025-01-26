import Products from "@/client-pages/pages/products/products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products"
}

export default function ProductsPage() {
  return <Products/>
}
