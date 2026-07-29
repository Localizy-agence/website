import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Mentions légales — Localizy",
  description:
    "Mentions légales du site Localizy : éditeur, hébergeur, propriété intellectuelle et traitement des données personnelles.",
};

const sections: LegalSection[] = [
  {
    title: "Éditeur du site",
    body: [
      "Le site localizy.fr est édité par Localizy — Eric Gomes, entrepreneur individuel (EI).",
      <>
        Siège : 11 Allée des Bourgognes, 60500 Chantilly, France
        <br />
        SIREN : 981 186 026 — SIRET : 981 186 026 00028
        <br />
        Code APE : 7311Z (activités des agences de publicité)
        <br />
        Immatriculée au Registre National des Entreprises (RNE) depuis le 1
        <sup>er</sup> novembre 2023
        <br />
        TVA non applicable, article 293 B du Code général des impôts
      </>,
      <>
        Directeur de la publication : Eric Gomes
        <br />
        Contact :{" "}
        <a href="mailto:contact@localizy.fr" className="legal-link">
          contact@localizy.fr
        </a>{" "}
        — 07 81 18 94 24 / 06 59 94 66 12
      </>,
    ],
  },
  {
    title: "Hébergement",
    body: [
      <>
        Le site est hébergé par o2switch
        <br />
        222-224 Boulevard Gustave Flaubert, 63000 Clermont-Ferrand, France
        <br />
        Téléphone : 04 44 44 60 40 —{" "}
        <a
          href="https://www.o2switch.fr"
          target="_blank"
          rel="noopener noreferrer"
          className="legal-link"
        >
          o2switch.fr
        </a>
      </>,
    ],
  },
  {
    title: "Propriété intellectuelle",
    body: [
      "L'ensemble des éléments composant ce site — structure, textes, visuels, illustrations, mascotte, logo, code source et charte graphique — est la propriété exclusive de Localizy ou de ses partenaires, et est protégé par le droit d'auteur et le droit des marques.",
      "Toute reproduction, représentation, modification ou exploitation, totale ou partielle, de ces éléments, par quelque procédé que ce soit et sur quelque support que ce soit, est interdite sans autorisation écrite préalable.",
      "Les marques, logos et visuels des clients présentés dans la rubrique Réalisations restent la propriété de leurs titulaires respectifs et sont affichés avec leur accord, à titre d'illustration.",
    ],
  },
  {
    title: "Données personnelles",
    body: [
      "Les informations transmises via le formulaire de contact ou l'assistant conversationnel servent uniquement à répondre à votre demande. Elles ne sont ni revendues, ni cédées, ni utilisées à des fins de prospection non sollicitée.",
      <>
        Le détail des traitements, des durées de conservation et de vos droits figure dans notre{" "}
        <Link href="/confidentialite" className="legal-link">
          politique de confidentialité
        </Link>
        .
      </>,
    ],
  },
  {
    title: "Cookies",
    body: [
      "Ce site n'utilise aucun cookie publicitaire, aucun traceur de mesure d'audience et aucun outil de suivi tiers. Aucun bandeau de consentement n'est donc nécessaire.",
      "Seuls des espaces de stockage strictement fonctionnels du navigateur (stockage local et de session) sont utilisés, pour conserver le fil d'une conversation avec l'assistant le temps de votre visite. Ces données restent sur votre appareil et peuvent être effacées à tout moment depuis les réglages de votre navigateur.",
    ],
  },
  {
    title: "Liens hypertextes",
    body: [
      "Ce site peut contenir des liens vers des sites tiers, notamment vers les réalisations de nos clients. Ces sites échappent à notre contrôle : leur contenu et leurs pratiques en matière de données personnelles n'engagent que leurs éditeurs respectifs.",
    ],
  },
  {
    title: "Responsabilité",
    body: [
      "Les informations publiées sur ce site sont fournies à titre indicatif et mises à jour régulièrement, sans garantie d'exhaustivité ni d'absence d'erreur. Localizy ne saurait être tenue responsable d'un dommage résultant de leur utilisation, ni d'une interruption temporaire du service liée à une opération de maintenance ou à un incident technique.",
    ],
  },
  {
    title: "Droit applicable",
    body: [
      "Les présentes mentions légales sont soumises au droit français. En cas de litige, et à défaut de résolution amiable, les tribunaux français seront seuls compétents.",
    ],
  },
  {
    title: "Contact",
    body: [
      <>
        Pour toute question relative aux présentes mentions légales :{" "}
        <a href="mailto:contact@localizy.fr" className="legal-link">
          contact@localizy.fr
        </a>{" "}
        — 07 81 18 94 24 / 06 59 94 66 12.
      </>,
    ],
  },
];

export default function MentionsLegalesPage() {
  return (
    <LegalPage
      eyebrow="Informations légales"
      title="Mentions"
      underlined="légales"
      sections={sections}
    />
  );
}
