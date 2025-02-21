import type { Metadata } from "next";
import "./globals.scss";
import Providers from "@/utils/providers";

export const metadata: Metadata = {
  title: "Mire",
  description:
    "Mire e-commerce",
  icons: {
    icon: "/favicon.png",
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
