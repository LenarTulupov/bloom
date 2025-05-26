import NotFound from "@/client-pages/not-found";
import { Metadata } from "next";
import PagesLayout from "./(pages)/layout";

export const metadata: Metadata = {
  title: "404 - Страница не найдена | Mire",
  description: "Запрашиваемая страница не найдена",
};

export default function NotFoundPage() {
  return (
    <PagesLayout footer={false}>
      <NotFound />
    </PagesLayout>
  );
}
