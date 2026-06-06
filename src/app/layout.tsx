import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
