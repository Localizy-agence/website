import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Politique de confidentialité · Localizy",
  description:
    "Comment Localizy collecte, utilise et protège vos données personnelles : finalités, durées de conservation, destinataires et vos droits.",
};

const sections: LegalSection[] = [
  {
    title: "Responsable du traitement",
    body: [
      <>
        Localizy, nom commercial d'Eric Gomes, entrepreneur individuel (EI), 11 Allée des Bourgognes, 60500
        Chantilly, France (SIREN 981 186 026), est responsable des traitements décrits ci-dessous.
        <br />
        Contact :{" "}
        <a href="mailto:contact@localizy.fr" className="legal-link">
          contact@localizy.fr
        </a>{" "}
        · 07 81 18 94 24.
      </>,
      "Aucun délégué à la protection des données (DPO) n'a été désigné : la nature et le volume des traitements réalisés ne l'imposent pas.",
    ],
  },
  {
    title: "Données collectées",
    body: [
      "Nous ne collectons que les données que vous nous transmettez volontairement. Aucune donnée n'est achetée, aspirée ou enrichie auprès de tiers.",
    ],
    list: [
      "Formulaire de contact : prénom, nom, adresse e-mail, téléphone, entreprise, secteur d'activité, nature du projet, budget et délai envisagés, disponibilités, message libre.",
      "Assistant conversationnel : les informations que vous saisissez dans la conversation, ainsi que vos coordonnées si vous choisissez de les laisser.",
      "Pages de destination (landing pages) : nom de l'entreprise, e-mail, téléphone, description de votre besoin, ainsi que la provenance du lien qui vous a amené jusqu'à nous.",
    ],
  },
  {
    title: "Finalités et bases légales",
    list: [
      "Répondre à votre demande, vous rappeler et établir un devis. Base légale : l'exécution de mesures précontractuelles prises à votre demande (article 6.1.b du RGPD).",
      "Assurer le suivi de la relation commerciale et contractuelle si une collaboration démarre. Base légale : l'exécution du contrat.",
      "Assurer la sécurité et le bon fonctionnement du site. Base légale : notre intérêt légitime à maintenir un service fiable.",
      "Mesurer la fréquentation du site de façon agrégée, pour savoir si nos pages sont consultées et lesquelles. Base légale : notre intérêt légitime à comprendre l'audience de notre propre site. Cette mesure ne permet ni de vous identifier, ni de vous suivre d'un site à l'autre.",
      "Respecter nos obligations comptables et fiscales. Base légale : le respect d'une obligation légale.",
    ],
  },
  {
    title: "Durées de conservation",
    list: [
      "Demandes de contact restées sans suite : 3 ans à compter du dernier échange avec vous.",
      "Données des clients : pendant toute la durée de la relation contractuelle, puis 3 ans à des fins de suivi.",
      "Documents comptables et pièces justificatives : 10 ans, conformément au Code de commerce.",
      "Conversations avec l'assistant : le temps de votre visite uniquement, sur votre appareil.",
    ],
  },
  {
    title: "Destinataires et sous-traitants",
    body: [
      "Vos données sont traitées par Localizy. Elles ne sont ni vendues, ni louées, ni transmises à des tiers à des fins de prospection. Seuls interviennent les prestataires techniques strictement nécessaires au fonctionnement du site :",
    ],
    list: [
      "o2switch (France) : hébergement du site.",
      "EmailJS (États-Unis) : acheminement vers notre boîte de réception des messages envoyés depuis le formulaire de contact et l'assistant.",
      "jsDelivr (réseau de diffusion de contenu) : chargement de certaines ressources techniques du site.",
      "Cloudflare (États-Unis) : mesure d'audience agrégée du site, sans cookie et sans identifiant de visiteur.",
    ],
  },
  {
    title: "Transferts hors Union européenne",
    body: [
      "Le service EmailJS, qui achemine les messages du formulaire, est établi aux États-Unis. Ce transfert est encadré par les clauses contractuelles types de la Commission européenne. Les données concernées se limitent au contenu du message que vous nous adressez.",
      "Notre outil de mesure d'audience, Cloudflare Web Analytics, est également fourni par une société établie aux États-Unis, et ce transfert est encadré par les mêmes clauses contractuelles types. Les données concernées se limitent aux statistiques agrégées décrites plus bas : aucun identifiant, aucun contenu que vous nous adressez.",
    ],
  },
  {
    title: "Cookies, mesure d'audience et stockage local",
    body: [
      "Ce site n'utilise aucun cookie publicitaire et aucun outil de suivi publicitaire. Nous mesurons la fréquentation de nos pages avec Cloudflare Web Analytics, qui ne dépose aucun cookie, n'écrit rien sur votre appareil et ne construit aucune empreinte technique permettant de vous reconnaître. Aucun consentement préalable n'est donc requis, et aucun bandeau ne vous est imposé.",
      "Les statistiques que nous consultons se limitent au nombre de pages vues, à la page consultée, au site depuis lequel vous êtes arrivé, au pays, au type d'appareil, au navigateur et au système d'exploitation. Elles sont agrégées : nous n'avons aucun moyen de les relier à une personne, ni de vous suivre d'une visite à l'autre ou d'un site à l'autre. Si vous souhaitez ne pas y figurer, n'importe quel bloqueur de contenu installé sur votre navigateur suffit à empêcher cette mesure.",
      "Seuls des espaces de stockage strictement fonctionnels du navigateur (stockage local et de session) sont utilisés, afin de conserver le fil d'une conversation avec l'assistant le temps de votre visite. Ces informations restent sur votre appareil, ne nous sont pas transmises automatiquement, et peuvent être effacées à tout moment depuis les réglages de votre navigateur.",
    ],
  },
  {
    title: "Sécurité",
    body: [
      "Le site est intégralement servi en HTTPS. L'accès aux demandes reçues est limité aux personnes qui interviennent sur votre projet. Nous appliquons des mesures techniques et organisationnelles raisonnables pour protéger vos données contre la perte, l'accès non autorisé et la divulgation.",
    ],
  },
  {
    title: "Vos droits",
    body: [
      "Conformément au Règlement général sur la protection des données et à la loi Informatique et Libertés, vous disposez des droits suivants sur vos données :",
    ],
    list: [
      "Droit d'accès : obtenir une copie des données que nous détenons sur vous.",
      "Droit de rectification : faire corriger une information inexacte ou incomplète.",
      "Droit à l'effacement : demander la suppression de vos données.",
      "Droit à la limitation et droit d'opposition au traitement.",
      "Droit à la portabilité : recevoir vos données dans un format lisible par machine.",
    ],
  },
  {
    title: "Exercer vos droits",
    body: [
      <>
        Écrivez-nous à{" "}
        <a href="mailto:contact@localizy.fr" className="legal-link">
          contact@localizy.fr
        </a>{" "}
        ou par courrier à l&apos;adresse du siège indiquée ci-dessus. Nous répondons dans un délai
        d&apos;un mois. Une pièce d&apos;identité pourra vous être demandée en cas de doute
        raisonnable sur votre identité.
      </>,
      <>
        Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous
        pouvez introduire une réclamation auprès de la CNIL :{" "}
        <a
          href="https://www.cnil.fr"
          target="_blank"
          rel="noopener noreferrer"
          className="legal-link"
        >
          cnil.fr
        </a>
        .
      </>,
    ],
  },
  {
    title: "Modification de la présente politique",
    body: [
      <>
        Cette politique peut évoluer pour refléter un changement de nos outils ou de la
        réglementation. La version en vigueur est celle publiée sur cette page. Elle complète nos{" "}
        <Link href="/mentions-legales" className="legal-link">
          mentions légales
        </Link>
        .
      </>,
      "Dernière mise à jour : juillet 2026.",
    ],
  },
];

export default function ConfidentialitePage() {
  return (
    <LegalPage
      eyebrow="Vos données"
      title="Politique de"
      underlined="confidentialité"
      intro="Nous collectons le strict nécessaire pour répondre à votre demande, rien de plus. Pas de traceur publicitaire, pas de revente de fichier, pas de newsletter à laquelle vous n'auriez pas souscrit."
      sections={sections}
    />
  );
}
