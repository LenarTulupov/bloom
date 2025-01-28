import Favorite from "@/client-pages/pages/favorite/favorite";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Favorite goods"
}

export default function FavoritePage() {
  return <Favorite/>
}
