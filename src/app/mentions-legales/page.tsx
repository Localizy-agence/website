import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Underline from "@/components/Underline";

export const metadata: Metadata = {
  title: "Mentions légales — Localizy",
  description: "Mentions légales du site Localizy.",
};

// Contenu à compléter avec les informations légales fournies par le client.
const sections = [
  {
    title: "Éditeur du site",
    body: "À compléter : raison sociale, forme juridique, capital social, adresse du siège, SIREN/SIRET, numéro de TVA intracommunautaire, directeur de la publication.",
  },
  {
    title: "Hébergement",
    body: "À compléter : nom de l'hébergeur, raison sociale, adresse et coordonnées.",
  },
  {
    title: "Propriété intellectuelle",
    body: "À compléter : mentions relatives aux droits d'auteur, marques et contenus du site.",
  },
  {
    title: "Données personnelles",
    body: "À compléter : responsable de traitement, finalités, base légale, durée de conservation, droits RGPD et coordonnées du DPO le cas échéant.",
  },
  {
    title: "Cookies",
    body: "À compléter : nature des cookies utilisés, finalités et modalités de consentement.",
  },
  {
    title: "Contact",
    body: "Pour toute question relative aux présentes mentions légales : contact@localizy.fr — 07 81 18 94 24.",
  },
];

export default function MentionsLegalesPage() {
  return (
    <div className="max-w-[1280px] mx-auto" style={{ padding: "16px 28px 80px" }}>
      <Header />

      <section style={{ marginTop: "48px", maxWidth: "760px" }}>
        <div className="section-eyebrow">· Informations légales ·</div>
        <h1 className="about-hero-headline" style={{ marginTop: "16px" }}>
          Mentions <Underline>légales</Underline>
          <span className="hero-accent">.</span>
        </h1>

        <div style={{ marginTop: "40px", display: "flex", flexDirection: "column", gap: "32px" }}>
          {sections.map((s) => (
            <div key={s.title}>
              <h2
                className="section-headline"
                style={{ fontSize: "22px", marginBottom: "8px" }}
              >
                {s.title}
              </h2>
              <p className="about-hero-lead" style={{ maxWidth: "680px" }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
