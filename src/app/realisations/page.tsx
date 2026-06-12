"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Underline from "@/components/Underline";

const categories = [
  { id: "all", label: "Tous" },
  { id: "site-web", label: "Site web" },
  { id: "seo", label: "SEO & GMB" },
  { id: "saas", label: "SaaS" },
];

const projects = [
  {
    id: 1,
    name: "Garage Martin",
    category: "site-web",
    type: "Site vitrine",
    result: "+180% de contacts",
    sticker: "ordinateur",
  },
  {
    id: 2,
    name: "Pizzeria Bella",
    category: "seo",
    type: "SEO local & GMB",
    result: "Top 3 Google Maps",
    sticker: "cible",
  },
  {
    id: 3,
    name: "Cabinet Dupont",
    category: "site-web",
    type: "Site vitrine",
    result: "+95% de trafic",
    sticker: "ordinateur",
  },
  {
    id: 4,
    name: "Plomberie Express",
    category: "seo",
    type: "SEO local & GMB",
    result: "12 avis 5 étoiles/mois",
    sticker: "cible",
  },
  {
    id: 5,
    name: "Agence Immo Plus",
    category: "saas",
    type: "CRM sur-mesure",
    result: "-40% temps admin",
    sticker: "fiole",
  },
  {
    id: 6,
    name: "Coach Sportif 60",
    category: "site-web",
    type: "Site + booking",
    result: "+250% réservations",
    sticker: "ordinateur",
  },
];

export default function RealisationsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.category === activeFilter);
  return (
    <div className="max-w-[1280px] mx-auto" style={{ padding: "16px 28px 80px" }}>
      <Header />

      {/* Hero - texte à gauche, Izy à droite */}
      <section style={{
        marginTop: "32px",
        padding: "56px",
        borderRadius: "24px",
        backgroundColor: "#F5F5FA",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "40px",
        position: "relative",
        overflow: "hidden"
      }}>
        {/* Contenu texte à gauche */}
        <div style={{ flex: 1, position: "relative", zIndex: 2 }}>
          <div className="section-eyebrow">· Nos réalisations ·</div>
          <h1 className="about-hero-headline" style={{ marginTop: "16px" }}>
            Des projets qui <Underline>parlent</Underline> d&apos;eux-mêmes<span className="hero-accent">.</span>
          </h1>
          <p className="about-hero-lead" style={{ marginTop: "20px", maxWidth: "500px" }}>
            Sites web, stratégies SEO, outils sur-mesure — découvrez comment nous avons accompagné des entreprises locales dans leur croissance digitale.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Button>
              Discuter de mon projet <span className="arrow-anim">→</span>
            </Button>
            <Button variant="ghost">Voir nos services</Button>
          </div>
        </div>

        {/* Zone Izy + sticker à droite */}
        <div style={{
          position: "relative",
          width: "380px",
          height: "400px",
          flexShrink: 0
        }}>
          {/* Sticker étoiles au-dessus d'Izy */}
          <Image
            src="/stickers/etoiles.svg"
            alt=""
            width={150}
            height={150}
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
            height={400}
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
      <section style={{
        marginTop: "32px",
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "24px"
      }}>
        {filteredProjects.map((project) => (
          <div key={project.id} style={{
            backgroundColor: "#FFFFFF",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid #E8E8F0",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
            cursor: "pointer"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-4px)";
            e.currentTarget.style.boxShadow = "0 12px 32px rgba(35, 49, 66, 0.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
          >
            {/* Image placeholder */}
            <div style={{
              aspectRatio: "16/10",
              backgroundColor: "#F5F5FA",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative"
            }}>
              <span style={{ color: "#9C9CB4", fontSize: "14px" }}>Capture du site</span>
              {/* Badge catégorie */}
              <div style={{
                position: "absolute",
                top: "16px",
                left: "16px",
                backgroundColor: "#FFFFFF",
                borderRadius: "8px",
                padding: "6px 10px",
                display: "flex",
                alignItems: "center",
                gap: "6px"
              }}>
                <Image
                  src={`/stickers/${project.sticker}.svg`}
                  alt=""
                  width={16}
                  height={16}
                />
                <span style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#233142"
                }}>{project.type}</span>
              </div>
            </div>
            {/* Contenu */}
            <div style={{ padding: "20px 24px" }}>
              <h3 style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "18px",
                color: "#233142",
                marginBottom: "8px"
              }}>{project.name}</h3>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "8px"
              }}>
                <div style={{
                  backgroundColor: "#E8F5E9",
                  color: "#2E7D32",
                  padding: "4px 10px",
                  borderRadius: "6px",
                  fontSize: "13px",
                  fontWeight: 600
                }}>{project.result}</div>
              </div>
            </div>
          </div>
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
            <Button>
              Prendre rendez-vous <span className="arrow-anim">→</span>
            </Button>
            <Button variant="secondary">Nous écrire</Button>
          </div>

          <div className="final-cta-contact">
            <div>
              <div className="final-cta-contact-label">Email</div>
              <div className="final-cta-contact-value">contact@localizy.fr</div>
            </div>
            <div>
              <div className="final-cta-contact-label">Téléphone</div>
              <div className="final-cta-contact-value">07 81 18 94 24</div>
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
          height={400}
          className="final-cta-mascot hidden lg:block self-end justify-self-end"
        />
      </section>

      <Footer />
    </div>
  );
}
