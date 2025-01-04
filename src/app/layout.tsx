import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "NewBloom",
  description: "Surrogacy Agency trusted surrogacy services in Georgia with transparency, speed, and care",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
