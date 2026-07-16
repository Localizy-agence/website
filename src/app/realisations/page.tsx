"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactButton from "@/components/ContactButton";
import Underline from "@/components/Underline";
import RealisationCard, { type Project } from "@/components/RealisationCard";

const categories = [
  { id: "all", label: "Tous" },
  { id: "site-web", label: "Site web" },
  { id: "seo", label: "SEO & GMB" },
  { id: "saas", label: "SaaS" },
];

const projects: Project[] = [
  {
    id: 1,
    name: "Espace Modulaire France",
    type: "Site vitrine",
    result: "+48% de traffic",
    sticker: "ordinateur",
    categories: ["site-web", "seo"],
    url: "https://espacemodulaire.com/",
    screenshot: "/images/espacemodulaire.png",
  },
  {
    id: 2,
    name: "KDI Overseas",
    type: "Site vitrine",
    result: "Création d'entreprise réussie",
    sticker: "ordinateur",
    categories: ["site-web"],
    url: "https://kdiol.com/",
    screenshot: "/images/kdioverseas.png",
  },
  {
    id: 4,
    name: "Ardila",
    type: "Générateur d'articles SEO",
    result: "-60% de temps passé sur la com'",
    sticker: "fiole",
    categories: ["saas"],
    screenshot: "/images/ardila_seogenerator.webp",
    fixed: true,
  },
  {
    id: 5,
    name: "Auberge du Maroc",
    type: "Site restaurant",
    result: "+20% de commandes",
    sticker: "ordinateur",
    categories: ["site-web"],
    url: "https://aubergedumaroc.com/",
    screenshot: "/images/aubergedumaroc.png",
  },
  {
    id: 6,
    name: "Opticien Nouveau Regard",
    type: "Site + prise de RDV",
    result: "+15% de RDV en boutique",
    sticker: "ordinateur",
    categories: ["site-web"],
    url: "https://opticiennouveauregard.fr/",
    screenshot: "/images/opticiennouveauregard.png",
  },
  {
    id: 7,
    name: "Débarras Grand Paris",
    type: "Optimisation GMB",
    result: "Top 5 Google Maps",
    sticker: "cible",
    categories: ["site-web", "seo"],
  },
];

export default function RealisationsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.categories.includes(activeFilter));
  return (
    <div className="page-shell">
      <Header />

      {/* Hero - texte à gauche, Izy à droite */}
      <section className="izy-hero">
        {/* Contenu texte à gauche */}
        <div className="izy-hero-text">
          <div className="section-eyebrow">· Nos réalisations ·</div>
          <h1 className="about-hero-headline" style={{ marginTop: "16px" }}>
            Des projets qui <Underline>parlent</Underline> d&apos;eux-mêmes<span className="hero-accent">.</span>
          </h1>
          <p className="about-hero-lead" style={{ marginTop: "20px", maxWidth: "500px" }}>
            Sites web, stratégies SEO, outils sur-mesure — découvrez comment nous avons accompagné des entreprises locales dans leur croissance digitale.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <ContactButton>
              Discuter de mon projet <span className="arrow-anim">→</span>
            </ContactButton>
            <Link href="/services" className="btn btn-ghost">Voir nos services</Link>
          </div>
        </div>

        {/* Zone Izy + sticker à droite */}
        <div className="izy-hero-izy">
          {/* Sticker étoiles au-dessus d'Izy */}
          <Image
            className="realisations-hero-etoiles"
            src="/stickers/etoiles.svg"
            alt=""
            width={150}
            height={67}
            style={{
              position: "absolute",
              top: "14%",
              left: "50%",
              transform: "translateX(-50%) rotate(-5deg)",
              opacity: 0.6
            }}
          />

          {/* Izy mascotte */}
          <Image
            src="/mascots/Izy_Regard-Gauche.webp"
            alt="Izy"
            width={340}
            height={340}
            priority
            style={{
              position: "absolute",
              bottom: "-50px",
              left: "50%",
              transform: "translateX(-50%) rotate(3deg)",
              zIndex: 1
            }}
          />
        </div>
      </section>

      {/* Filtres */}
      <section style={{ marginTop: "48px", display: "flex", justifyContent: "center" }}>
        <div style={{
          display: "inline-flex",
          gap: "8px",
          padding: "8px 16px",
          backgroundColor: "#FFFFFF",
          borderRadius: "100px",
          boxShadow: "0 2px 8px rgba(35, 49, 66, 0.08)"
        }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`services-tab-v2 ${activeFilter === cat.id ? "active" : ""}`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Grille de projets */}
      <section className="realisations-grid" style={{
        marginTop: "32px",
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "24px"
      }}>
        {filteredProjects.map((project, index) => (
          <RealisationCard key={project.id} project={project} priority={index === 0} />
        ))}
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="py-14">
          <div className="final-cta-eyebrow">· Votre projet ici ? ·</div>
          <h2 className="final-cta-headline">
            Prêt à rejoindre nos <Underline>success stories</Underline>
            <span className="hero-accent">?</span>
          </h2>
          <p className="final-cta-lead">
            Chaque projet commence par une discussion. Parlez-nous de vos objectifs, on vous dit comment on peut vous aider.
          </p>

          <div className="flex flex-wrap gap-3 mb-7">
            <ContactButton>
              Prendre rendez-vous <span className="arrow-anim">→</span>
            </ContactButton>
            <ContactButton variant="secondary">Nous écrire</ContactButton>
          </div>

          <div className="final-cta-contact">
            <div>
              <div className="final-cta-contact-label">Email</div>
              <div className="final-cta-contact-value">contact@localizy.fr</div>
            </div>
            <div>
              <div className="final-cta-contact-label">Téléphone</div>
              <div className="final-cta-contact-value">07 81 18 94 24</div>
              <div className="final-cta-contact-value">06 59 94 66 12</div>
            </div>
            <div>
              <div className="final-cta-contact-label">Bureau</div>
              <div className="final-cta-contact-value">Oise (60)</div>
            </div>
          </div>
        </div>

        <Image
          src="/mascots/shadow-telephone.webp"
          alt="Shadow au téléphone"
          width={360}
          height={524}
          className="final-cta-mascot hidden lg:block self-end justify-self-end"
        />
      </section>

      <Footer />
    </div>
  );
}
