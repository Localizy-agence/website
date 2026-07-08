"use client";

import { useEffect, useRef, useState } from "react";
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
  // Visuel affiché tel quel (pas de défilement à la molette) : produit, outil…
  fixed?: boolean;
};

// Sensibilité de la molette : % de la capture parcouru par « cran » (~100px).
const WHEEL_SPEED = 0.12;

export default function RealisationCard({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  const hasVisual = Boolean(project.screenshot);
  const scrollable = hasVisual && !project.fixed;

  // La capture « full page » très haute défile de haut (0%) en bas (100%) à la
  // molette tant qu'on n'est pas en bout de course ; aux extrémités, la page
  // reprend son défilement naturel.
  const [posY, setPosY] = useState(0);
  const posRef = useRef(0);
  const mediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mediaRef.current;
    if (!el || !scrollable) return;

    const onWheel = (e: WheelEvent) => {
      const next = Math.min(100, Math.max(0, posRef.current + e.deltaY * WHEEL_SPEED));
      if (next !== posRef.current) {
        e.preventDefault();
        posRef.current = next;
        setPosY(next);
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [scrollable]);

  const resetScroll = () => {
    posRef.current = 0;
    setPosY(0);
  };

  // Carte sans visuel (ex : SEO & GMB) : structure différente des cartes avec
  // capture — une carte de marque pleine, sans zone média.
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
    <div className="realisation-card">
      <div
        className="realisation-card-media"
        ref={mediaRef}
        onMouseLeave={scrollable ? resetScroll : undefined}
      >
        <Image
          src={project.screenshot as string}
          alt={`Aperçu du site ${project.name}`}
          fill
          sizes="(max-width: 768px) 100vw, 600px"
          priority={priority}
          className={`realisation-card-screenshot ${project.fixed ? "realisation-card-screenshot--fixed" : ""}`}
          style={scrollable ? { objectPosition: `center ${posY}%` } : undefined}
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
        <h3 className="realisation-card-title">{project.name}</h3>
        {project.result ? (
          <div className="realisation-card-result">{project.result}</div>
        ) : null}
      </div>
    </div>
  );
}
