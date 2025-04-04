import type { Metadata } from "next";
import "./styles/globals.css";
import "./styles/reset.css";
import "./styles/normalize.css";

export const metadata: Metadata = {
  title: "jirehtents - carpas para eventos en Colombia",
  description:
    "Alquiler de carpas para eventos en Bogotá y venta de carpas de todo tipo",
  icons: {
    icon: "/assets/logo-main.png", // Path to your favicon
    apple: "/apple-touch-icon.png", // Path to Apple touch icon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* Marcado JSON-LD para el logo de la empresa */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              url: "https://www.jirehtents.com",
              logo: "/assets/logo-main.png",
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
