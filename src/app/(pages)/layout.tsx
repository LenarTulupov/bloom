import LayoutsPagesLayout from "@/layouts/pages-layout/pages-layout";
import { ReactNode } from "react";

export default function PagesLayout({ children }: { children: ReactNode }) {
  return <LayoutsPagesLayout>{ children }</LayoutsPagesLayout>
};
