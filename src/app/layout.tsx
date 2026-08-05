import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import ClientProviders from "@/components/ClientProviders";

export const metadata: Metadata = {
  title: "Localizy · Sites web & SEO local dans l'Oise",
  description:
    "Localizy conçoit des sites web performants et optimise votre présence en ligne pour attirer plus de clients autour de vous. Agence locale dans l'Oise.",
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
        {/* Mesure d'audience Cloudflare : sans cookie, sans identifiant, donc
            aucun bandeau de consentement (voir /confidentialite).
            Ce jeton n'est PAS un secret : il part en clair dans chaque page et
            désigne le site sans ouvrir d'accès au compte. Sa présence dans un
            dépôt public est normale.
            Posée ici, la balise couvre les 6 pages du site. La landing IzyRESA
            est un fichier statique de public/, elle ne passe pas par ce layout
            et porte la sienne, injectée par le build du dossier GTM. Même
            jeton : un seul tableau de bord, où la dimension Path sépare
            /izy-reservation/ du reste. */}
        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          strategy="afterInteractive"
          data-cf-beacon='{"token": "2148d22968f449fa981c4cda16c89346"}'
        />
      </body>
    </html>
  );
}
