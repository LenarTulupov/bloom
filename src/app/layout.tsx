import type { Metadata } from "next";
import Providers from "@/utils/providers";
import "./swiper-overrides.scss"
import "./globals.scss";

export const metadata: Metadata = {
  title: "Mire | Women Clothes | Shop Online",
  description:
    "Shop mire range of women's clothing for the latest fashion pieces you need to be adding-to-basket, with 100s of new styles landing every day!",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Mire | Women's Clothing & Accessories",
    description: "Mire - online store for women's fashion clothing, shoes and accessories",
    type: "website",
    locale: "en_US",
    siteName: "Mire",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
