import type { Metadata } from "next";
import "./styles/globals.css";
import "./styles/reset.css";
import "./styles/normalize.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "jirehtents - carpas para eventos en Colombia",
  description:
    "Alquiler de carpas para eventos en Bogotá y venta de carpas de todo tipo",
  icons: {
    icon: "https://www.jirehtents.com/assets/logo-main.png", // Path to your favicon
    apple: "https://www.jirehtents.com/assets/logo-main.png", // Path to Apple touch icon
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
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-16976475416"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16976475416');
            `,
          }}
        />
        {/* Marcado JSON-LD para el logo de la empresa */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              url: "https://www.jirehtents.com/assets/logo-main.png",
              logo: "https://www.jirehtents.com/assets/logo-main.png",
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
