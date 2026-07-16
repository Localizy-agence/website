"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export type Project = {
  id: number;
  name: string;
  type: string;
  result?: string;
  sticker: string;
  categories: string[];
  url?: string;
  screenshot?: string;
  // Visuel affiché tel quel (produit, outil…) plutôt qu'une capture full-page.
  fixed?: boolean;
};

export default function RealisationCard({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  const hasVisual = Boolean(project.screenshot);

  // Au clic sur une carte, la capture s'ouvre en grand dans une lightbox
  // (remplace l'ancien défilement à la molette, inutilisable au tactile).
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    if (!lightboxOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [lightboxOpen]);

  // Carte sans visuel (ex : SEO & GMB) : structure de marque pleine, sans média.
  if (!hasVisual) {
    return (
      <div className="realisation-card realisation-card--novisual">
        <div className="realisation-card-novisual-tile">
          <Image
            src={`/stickers/${project.sticker}.svg`}
            alt=""
            width={30}
            height={30}
            style={{ width: "30px", height: "30px", objectFit: "contain" }}
          />
        </div>

        <div className="realisation-card-novisual-foot">
          <span className="realisation-card-novisual-cat">{project.type}</span>
          <h3 className="realisation-card-novisual-name">{project.name}</h3>
          {project.result ? (
            <div className="realisation-card-novisual-result">{project.result}</div>
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <>
      <div
        className="realisation-card"
        role="button"
        tabIndex={0}
        aria-label={`Voir l'aperçu de ${project.name}`}
        onClick={() => setLightboxOpen(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setLightboxOpen(true);
          }
        }}
      >
        <div className="realisation-card-media">
          <Image
            src={project.screenshot as string}
            alt={`Aperçu du site ${project.name}`}
            fill
            sizes="(max-width: 768px) 128px, 600px"
            priority={priority}
            className={`realisation-card-screenshot ${project.fixed ? "realisation-card-screenshot--fixed" : ""}`}
          />

          {/* Badge catégorie */}
          <div className="realisation-card-badge">
            <Image
              src={`/stickers/${project.sticker}.svg`}
              alt=""
              width={16}
              height={16}
              style={{ width: "16px", height: "16px", objectFit: "contain" }}
            />
            <span className="realisation-card-badge-label">{project.type}</span>
          </div>
        </div>

        <div className="realisation-card-body">
          {/* Type : affiché ici en mobile (liste compacte), via le badge en desktop. */}
          <span className="realisation-card-body-cat">{project.type}</span>
          <h3 className="realisation-card-title">{project.name}</h3>
          {project.result ? (
            <div className="realisation-card-result">{project.result}</div>
          ) : null}
        </div>
      </div>

      {lightboxOpen ? (
        <div
          className="realisation-lightbox"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            type="button"
            className="realisation-lightbox-close"
            aria-label="Fermer l'aperçu"
            onClick={() => setLightboxOpen(false)}
          >
            ×
          </button>
          <div
            className="realisation-lightbox-inner"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.screenshot as string}
              alt={`Aperçu complet du site ${project.name}`}
              className="realisation-lightbox-img"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
