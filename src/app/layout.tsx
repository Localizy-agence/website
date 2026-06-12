import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import ClientProviders from "@/components/ClientProviders";

export const metadata: Metadata = {
  title: "Localizy — Sites web & SEO local dans l'Oise",
  description:
    "Localizy conçoit des sites web performants et optimise votre présence en ligne pour attirer plus de clients autour de vous. Agence locale dans l'Oise.",
  icons: {
    icon: "/logo/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="stylesheet" href="/chatbot/chatbot.css" />
      </head>
      <body>
        <ClientProviders>
          {children}
        </ClientProviders>
        <Script
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
          strategy="beforeInteractive"
        />
        <Script src="/chatbot/config.js" strategy="beforeInteractive" />
        <Script src="/chatbot/chatbot.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
