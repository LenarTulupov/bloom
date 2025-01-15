import type { Metadata } from "next";
import "./globals.scss";
import Providers from "@/utils/providers";

export const metadata: Metadata = {
  title: "NewBloom",
  description:
    "Surrogacy Agency trusted surrogacy services in Georgia with transparency, speed, and care",
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
