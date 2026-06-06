"use client";

import { useState, useEffect } from "react";

const REVIEWS = [
  {
    name: "Thibault Roux",
    text: "J'ai fait appel à Localizy pour la création de mon site et la mise en place de campagnes en ligne. L'équipe est pro, réactive, et le résultat est top ! Mon activité a gagné en visibilité très rapidement. Je recommande à 100% pour vos projets web et marketing digital.",
  },
  {
    name: "Salomé Davrinche",
    text: "Super expérience avec Localizy ! Ils m'ont créé un site web moderne et bien référencé, et ont optimisé ma fiche Google. Équipe pro et réactive, je recommande à 100%.",
  },
  {
    name: "Lil U",
    text: "Un vrai plaisir de collaborer avec Localizy pour la refonte de mon site web ! Une équipe à l'écoute, réactive et pro, qui m'a accompagné jusqu'au bout du projet. Résultat au top, je recommande à 100% pour un site web sur mesure et un accompagnement de qualité.",
  },
  {
    name: "HL",
    text: "Super expérience avec Localizy ! Ils ont su créer une identité visuelle qui parle vraiment à notre public dans l'Oise. Merci pour votre créativité et votre écoute !",
  },
  {
    name: "Isabelle Gomes",
    text: "Merci à Localizy pour la création de l'image de marque de ma petite entreprise ! Si vous cherchez à vous développer dans l'Oise, je vous recommande leur service.",
  },
  {
    name: "Arnaud Mauband",
    text: "Toujours hyper réactive et de très bons conseils, je conseille fortement !",
  },
  {
    name: "Pierre M.",
    text: "Un super conseil, une équipe au top ! Merci pour tout.",
  },
  {
    name: "Nico Duquesne",
    text: "Super service, je les recommande !",
  },
  {
    name: "Lisa Chavois",
    text: "Très satisfaite.",
  },
];

const CLIENT_LOGOS = [
  "Auberge du Maroc",
  "Débarras Grand Paris",
  "Espace Modulaire France",
  "EV Espaces Verts",
  "Ganertrans",
  "KDI Overseas",
  "Mon Projet Rentable",
  "Motobike 60",
  "Nouveau Regard",
  "Simone & Colette Location",
  "Teamlok",
  "Wiart & Fils",
];

const colors = ["#9699CE", "#FF6B6B", "#31445E", "#BABBDE"];

function ReviewCard({ review, index }: { review: typeof REVIEWS[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="review-card hover-lift flex-shrink-0 flex flex-col"
      style={{ width: "var(--card-width)" }}
    >
      <div className="star-fill text-sm tracking-widest mb-3">★★★★★</div>
      <div className="relative flex-1">
        <p
          className="review-card-text"
          style={!expanded ? {
            display: "-webkit-box",
            WebkitLineClamp: 5,
            WebkitBoxOrient: "vertical" as const,
            overflow: "hidden",
          } : undefined}
        >
          « {review.text} »
        </p>
        {review.text.length > 150 && (
          <button
            className="review-see-more"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "voir moins" : "voir plus"}
          </button>
        )}
      </div>
      <div className="review-card-author mt-auto">
        <span
          className="review-card-avatar"
          style={{ background: colors[index % 4] }}
        >
          {review.name
            .split(" ")
            .map((w) => w[0])
            .join("")
            .slice(0, 2)}
        </span>
        <div className="min-w-0">
          <div className="review-card-name">{review.name}</div>
          <div className="review-card-role">Avis Google</div>
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(4);
    };
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const maxIndex = Math.max(0, REVIEWS.length - visibleCount);

  const prev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const next = () => setCurrentIndex((i) => Math.min(maxIndex, i + 1));

  const cardWidth = `calc(${100 / visibleCount}% - ${((visibleCount - 1) * 16) / visibleCount}px)`;

  return (
    <section className="reviews">
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 items-center mb-8 px-2">
        <div className="flex items-center gap-4">
          <div className="reviews-google-icon">G</div>
          <div>
            <div className="reviews-header-title">
              <span className="hero-accent">5/5</span> sur Google
            </div>
            <div className="star-fill text-base tracking-wider">
              ★★★★★{" "}
              <span className="reviews-header-sub ml-2">· {REVIEWS.length} avis</span>
            </div>
          </div>
        </div>
        <div className="hidden md:flex justify-self-end items-center gap-3">
          <span className="reviews-header-sub">
            Ce que disent celles et ceux qu&apos;on accompagne
          </span>
          <div className="flex gap-2">
            <button
              onClick={prev}
              disabled={currentIndex === 0}
              className="carousel-btn"
              aria-label="Avis précédents"
            >
              ←
            </button>
            <button
              onClick={next}
              disabled={currentIndex >= maxIndex}
              className="carousel-btn"
              aria-label="Avis suivants"
            >
              →
            </button>
          </div>
        </div>
      </div>

      <div
        className="overflow-hidden"
        style={{ "--card-width": cardWidth } as React.CSSProperties}
      >
        <div
          className="flex gap-4 transition-transform duration-300 ease-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
          }}
        >
          {REVIEWS.map((r, i) => (
            <ReviewCard key={i} review={r} index={i} />
          ))}
        </div>
      </div>

      {/* Mobile navigation dots */}
      <div className="flex justify-center gap-2 mt-6 md:hidden">
        {Array.from({ length: REVIEWS.length }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === currentIndex ? "bg-[var(--lz-red-bright)]" : "bg-[var(--border-2)]"
            }`}
            aria-label={`Aller à l'avis ${i + 1}`}
          />
        ))}
      </div>

      <div className="marquee-container">
        <div className="marquee-track">
          {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, i) => (
            <span key={i} className="marquee-logo">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
