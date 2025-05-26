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
    <div className="not-found-layout">
      {children}
    </div>
  );
} 