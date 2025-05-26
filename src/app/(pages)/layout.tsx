import LayoutsPagesLayout from "@/layouts/pages-layout/pages-layout";
import { ReactNode } from "react";

interface IPagesLayout {
  children: ReactNode
  footer?: boolean;
}

export default function PagesLayout({ children, footer = true }: IPagesLayout) {
  return <LayoutsPagesLayout footer={footer}>{ children }</LayoutsPagesLayout>
};
