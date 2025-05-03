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
          strategy="beforeInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-16976475416"
        />
        <Script
          id="google-analytics"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16976475416');
              gtag('event', 'conversion', {
                'send_to': 'AW-16976475416/sn4qCL2IlbQaEJjqgZ8_',
                'value': 1.0,
                'currency': 'COP',
                'transaction_id': ''
              });
            `,
          }}
        />
        <Script
          id="fade-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('DOMContentLoaded', function() {
                var due_date = new Date('2025-05-10'); 
                var days_deadline = 60; 
                 
                var current_date = new Date(); 
                var utc1 = Date.UTC(due_date.getFullYear(), due_date.getMonth(), due_date.getDate()); 
                var utc2 = Date.UTC(current_date.getFullYear(), current_date.getMonth(), current_date.getDate()); 
                var days = Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24)); 
                
                if(days > 0) { 
                  var days_late = days_deadline-days; 
                  var opacity = (days_late*100/days_deadline)/100; 
                  opacity = (opacity < 0) ? 0 : opacity; 
                  opacity = (opacity > 1) ? 1 : opacity; 
                  if(opacity >= 0 && opacity <= 1) { 
                    document.body.style.opacity = opacity; 
                  } 
                }
              });
            `,
          }}
        />

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
