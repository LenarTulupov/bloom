import Wishlist from "@/client-pages/pages/wishlist/wishlist";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Wishlist"
}

export default function WishlistPage() {
  return <Wishlist/>
}
