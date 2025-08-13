import LayoutsPagesLayout from "@/layouts/pages-layout/pages-layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Страница не найдена | Mire",
  description: "Запрашиваемая страница не найдена",
};

export default function NotFoundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LayoutsPagesLayout footer={false}>
      {children}
    </LayoutsPagesLayout>
  );
} 