import Cart from "@/client-pages/pages/cart/cart";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your shopping cart"
}

export default function CartPage() {
  return <Cart/>
}
