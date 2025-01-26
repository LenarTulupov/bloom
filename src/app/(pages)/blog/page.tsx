import Blog from "@/client-pages/pages/blog/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Blog"
}

export default function BlogPage() {
  return <Blog />
};
