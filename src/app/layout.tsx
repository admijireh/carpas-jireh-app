import type { Metadata } from "next";
import "./styles/globals.css";
import "./styles/reset.css";
import "./styles/normalize.css";

export const metadata: Metadata = {
  title: "jirehtents - carpas para eventos en Colombia",
  description:
    "Alquiler de carpas para eventos en Bogotá y venta de carpas de todo tipo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
